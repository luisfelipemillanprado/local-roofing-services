/* Projects section: ordered items (image), text by key */
export const projectsData = {
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/projects" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* slug = detail-page route id (/projects/[slug]) */
  items: [
    { key: "cedarHeights", slug: "cedar-heights", image: "/images/projects/project2.webp" },
    { key: "summitBungalow", slug: "summit-bungalow", image: "/images/projects/project1.webp" },
    { key: "lakeviewContemporary", slug: "lakeview-contemporary", image: "/images/projects/project7.webp" },
    { key: "mapleGrove", slug: "maple-grove", image: "/images/projects/project3.webp" },
    { key: "northgateRanch", slug: "northgate-ranch", image: "/images/projects/project5.webp" },
    { key: "stonebridge", slug: "stonebridge", image: "/images/projects/project8.webp" },
    { key: "blackpineEstate", slug: "blackpine-estate", image: "/images/projects/project9.webp" },
    { key: "greystoneFarmhouse", slug: "greystone-farmhouse", image: "/images/projects/project4.webp" },
    { key: "sunsetRidge", slug: "sunset-ridge", image: "/images/projects/project6.webp" },
  ],
} as const;
