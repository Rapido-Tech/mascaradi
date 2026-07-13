/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    // Host CPU is a generic QEMU virtual CPU with no SSE4.2/AVX/WASM-SIMD, so
    // sharp can't load at runtime (neither its native nor wasm build). Images
    // are instead pre-resized/compressed at Docker build time (which runs on
    // a normal CPU) — see scripts/optimize-images.js — so this just serves
    // those already-optimized files as-is.
    unoptimized: true,
  },
};

export default nextConfig;
