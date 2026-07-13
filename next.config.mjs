/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    // Host CPU is a generic QEMU virtual CPU with no SSE4.2/AVX/WASM-SIMD, so
    // sharp can't load (neither its native nor wasm build) — serve images unoptimized.
    unoptimized: true,
  },
};

export default nextConfig;
