/* Projects section: ordered items (image), text by key */
export const projectsData = {
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/gallery" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* slug = detail-page route id (/gallery/[slug]) */
  items: [
    { key: "cedarHeights", slug: "cedar-heights", image: "/images/projects/project-1.webp" },
    { key: "summitBungalow", slug: "summit-bungalow", image: "/images/projects/project-2.webp" },
    { key: "lakeviewContemporary", slug: "lakeview-contemporary", image: "/images/projects/project-3.webp" },
    { key: "mapleGrove", slug: "maple-grove", image: "/images/projects/project-4.webp" },
    { key: "northgateRanch", slug: "northgate-ranch", image: "/images/projects/project-5.webp" },
    { key: "stonebridge", slug: "stonebridge", image: "/images/projects/project-6.webp" },
    { key: "blackpineEstate", slug: "blackpine-estate", image: "/images/projects/project-7.webp" },
    { key: "greystoneFarmhouse", slug: "greystone-farmhouse", image: "/images/projects/project-8.webp" },
    { key: "sunsetRidge", slug: "sunset-ridge", image: "/images/projects/project-9.webp" },
  ],
} as const;
