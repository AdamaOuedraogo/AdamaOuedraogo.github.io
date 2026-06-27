/** @type {import('next').NextConfig} */

// The site is fully static (markdown synced from the Agentic Quality Lab).
// - On Vercel (primary): standard Next.js build, room to add API routes later.
// - On GitHub Pages (zero-config fallback): set STATIC_EXPORT=true to emit /out.
const staticExport = process.env.STATIC_EXPORT === "true";

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx"],
  ...(staticExport
    ? {
        output: "export",
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
