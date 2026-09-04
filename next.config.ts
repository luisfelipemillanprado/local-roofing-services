import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project so Next.js doesn't infer it from a
  // stray pnpm-lock.yaml in the home directory.
  turbopack: {
    root: import.meta.dirname,
  },
  // Hide the Next.js dev indicator badge (the floating "N" in the corner).
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // /gallery was renamed to /projects; keep old URLs working.
  async redirects() {
    return [
      { source: "/gallery", destination: "/projects", permanent: true },
      { source: "/es/gallery", destination: "/es/projects", permanent: true },
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
