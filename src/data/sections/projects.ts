/* Projects section: ordered items (image), text by key */
export const projectsData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/gallery" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* slug = detail-page route id (/gallery/[slug]); first six on the home (one per service), rest grouped by type */
  items: [
    { key: "cedarHeights", slug: "cedar-heights", image: "/images/projects/project-1.webp" },
    { key: "sunsetRidge", slug: "sunset-ridge", image: "/images/projects/project-9.webp" },
    { key: "summitBungalow", slug: "summit-bungalow", image: "/images/projects/project-2.webp" },
    { key: "condoComplex", slug: "condo-complex", image: "/images/projects/project-20.webp" },
    { key: "solarResidence", slug: "solar-residence", image: "/images/projects/project-18.webp" },
    { key: "coastalMetal", slug: "coastal-metal", image: "/images/projects/project-11.webp" },
    { key: "lakeviewContemporary", slug: "lakeview-contemporary", image: "/images/projects/project-3.webp" },
    { key: "northgateRanch", slug: "northgate-ranch", image: "/images/projects/project-5.webp" },
    { key: "stonebridge", slug: "stonebridge", image: "/images/projects/project-6.webp" },
    { key: "greystoneFarmhouse", slug: "greystone-farmhouse", image: "/images/projects/project-8.webp" },
    { key: "blackpineEstate", slug: "blackpine-estate", image: "/images/projects/project-7.webp" },
    { key: "modernBlueMetal", slug: "modern-blue-metal", image: "/images/projects/project-13.webp" },
    { key: "estateMetal", slug: "estate-metal", image: "/images/projects/project-14.webp" },
    { key: "maroonMetal", slug: "maroon-metal", image: "/images/projects/project-15.webp" },
    { key: "harborMetal", slug: "harbor-metal", image: "/images/projects/project-16.webp" },
    { key: "ranchMetal", slug: "ranch-metal", image: "/images/projects/project-17.webp" },
    { key: "mapleGrove", slug: "maple-grove", image: "/images/projects/project-4.webp" },
    { key: "tilePlaza", slug: "tile-plaza", image: "/images/projects/project-12.webp" },
    { key: "gardenResidences", slug: "garden-residences", image: "/images/projects/project-21.webp" },
    { key: "skylightHome", slug: "skylight-home", image: "/images/projects/project-10.webp" },
    { key: "carportMetal", slug: "carport-metal", image: "/images/projects/project-19.webp" },
  ],
} as const;
