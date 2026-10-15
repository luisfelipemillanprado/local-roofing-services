import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  /* pin the root here, or a stray home-directory lockfile is inferred instead */
  turbopack: {
    root: import.meta.dirname,
  },
  /* hide the floating dev indicator badge */
  devIndicators: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
