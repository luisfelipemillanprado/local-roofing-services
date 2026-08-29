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
  /* image viewer controls: labels by key */
  viewer: { close: "action.close", previous: "action.previous", next: "action.next" },
  /* first six on the home, next six on about, rest on /gallery */
  items: [
    { key: "cedarHeights", image: "/images/projects/project-1.webp" },
    { key: "sunsetRidge", image: "/images/projects/project-9.webp" },
    { key: "summitBungalow", image: "/images/projects/project-2.webp" },
    { key: "condoComplex", image: "/images/projects/project-20.webp" },
    { key: "solarResidence", image: "/images/projects/project-18.webp" },
    { key: "coastalMetal", image: "/images/projects/project-11.webp" },
    { key: "lakeviewContemporary", image: "/images/projects/project-3.webp" },
    { key: "northgateRanch", image: "/images/projects/project-5.webp" },
    { key: "stonebridge", image: "/images/projects/project-6.webp" },
    { key: "greystoneFarmhouse", image: "/images/projects/project-8.webp" },
    { key: "blackpineEstate", image: "/images/projects/project-7.webp" },
    { key: "modernBlueMetal", image: "/images/projects/project-13.webp" },
    { key: "estateMetal", image: "/images/projects/project-14.webp" },
    { key: "maroonMetal", image: "/images/projects/project-15.webp" },
    { key: "harborMetal", image: "/images/projects/project-16.webp" },
    { key: "ranchMetal", image: "/images/projects/project-17.webp" },
    { key: "mapleGrove", image: "/images/projects/project-4.webp" },
    { key: "tilePlaza", image: "/images/projects/project-12.webp" },
    { key: "gardenResidences", image: "/images/projects/project-21.webp" },
    { key: "skylightHome", image: "/images/projects/project-10.webp" },
    { key: "carportMetal", image: "/images/projects/project-19.webp" },
  ],
} as const;
