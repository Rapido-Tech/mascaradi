export const ADMIN_SESSION_COOKIE = "mascaradi_admin_session";
const SESSION_TTL_MS = 24 * 60 * 60 * 1000;

async function getKey() {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) throw new Error("ADMIN_SESSION_SECRET is not set");
  return crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSessionToken(): Promise<string> {
  const expires = Date.now() + SESSION_TTL_MS;
  const key = await getKey();
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(String(expires)));
  return `${expires}.${toHex(signature)}`;
}

export async function verifySessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const [expiresStr, signatureHex] = token.split(".");
  if (!expiresStr || !signatureHex) return false;

  const expires = Number(expiresStr);
  if (!Number.isFinite(expires) || Date.now() > expires) return false;

  const key = await getKey();
  const expectedSignature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(expiresStr));
  const expectedHex = toHex(expectedSignature);

  if (expectedHex.length !== signatureHex.length) return false;
  let mismatch = 0;
  for (let i = 0; i < expectedHex.length; i++) {
    mismatch |= expectedHex.charCodeAt(i) ^ signatureHex.charCodeAt(i);
  }
  return mismatch === 0;
}
