/** @type {import('next').NextConfig} */

// Local Markdown content supports a static GitHub Pages export.
// Set STATIC_EXPORT=true to emit /out; otherwise use a standard Next.js build.
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
