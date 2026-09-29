import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

/* shop slugs renamed to the maker's real model code */
const renamedProducts = [
  ["werner-6206", "bilco-s20"],
  ["dewalt-dxst11000", "dewalt-dxl2010"],
  ["masterplug-ose15104g", "masterplug-cma301116g4sl"],
  ["palmer-k111115", "palmer-v5501"],
];

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
      ...renamedProducts.flatMap(([from, to]) => [
        { source: `/shop/${from}`, destination: `/shop/${to}`, permanent: true },
        { source: `/es/shop/${from}`, destination: `/es/shop/${to}`, permanent: true },
      ]),
    ];
  },
};

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

export default withNextIntl(nextConfig);
