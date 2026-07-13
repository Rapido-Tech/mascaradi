// Pre-shrinks car photos at Docker build time (runs on the CI runner's normal
// CPU) so the deployed image ships small files. This is separate from Next's
// runtime image optimization (disabled — the production host's CPU can't run
// sharp), so this is the only place these images ever get compressed.
import sharp from "sharp";
import { readdirSync, statSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..", "public", "images");
const MAX_WIDTH = 1600;
const QUALITY = 78;

function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) out.push(p);
  }
  return out;
}

async function optimize(file) {
  const before = statSync(file).size;
  const image = sharp(file);
  const meta = await image.metadata();
  const pipeline = meta.width && meta.width > MAX_WIDTH ? image.resize({ width: MAX_WIDTH }) : image;
  const isPng = /\.png$/i.test(file);
  const buffer = await (isPng
    ? pipeline.png({ quality: QUALITY, compressionLevel: 9 })
    : pipeline.jpeg({ quality: QUALITY, mozjpeg: true })
  ).toBuffer();

  if (buffer.length < before) writeFileSync(file, buffer);
  return { before, after: Math.min(buffer.length, before) };
}

async function main() {
  const files = walk(ROOT);
  let totalBefore = 0;
  let totalAfter = 0;
  for (const file of files) {
    const { before, after } = await optimize(file);
    totalBefore += before;
    totalAfter += after;
  }
  const mb = (n) => (n / 1024 / 1024).toFixed(1);
  console.log(`Optimized ${files.length} images: ${mb(totalBefore)}MB -> ${mb(totalAfter)}MB`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
