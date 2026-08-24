/* Services section: ordered items (image), text by key */
export const servicesData = {
  heading: {
    eyebrow: "eyebrow",
    titleLead: "titleLead",
    titleAccent: "titleAccent",
    description: "description",
  },
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/services" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* slug = detail route id (/services/[slug]); first six lead, shown by the home limit */
  items: [
    { key: "repair", slug: "roof-repair", image: "/images/services/service-1.webp" },
    { key: "replacement", slug: "roof-replacement", image: "/images/services/service-5.webp" },
    { key: "storm", slug: "storm-damage-repair", image: "/images/services/service-2.webp" },
    { key: "inspections", slug: "roof-inspections", image: "/images/services/service-12.webp" },
    { key: "gutters", slug: "gutters", image: "/images/services/service-6.webp" },
    { key: "commercial", slug: "commercial-roofing", image: "/images/services/service-10.webp" },
    { key: "residential", slug: "residential-roofing", image: "/images/services/service-7.webp" },
    { key: "metal", slug: "metal", image: "/images/services/service-3.webp" },
    { key: "tile", slug: "tile-roofing", image: "/images/services/service-11.webp" },
    { key: "flat", slug: "flat-roofing", image: "/images/services/service-4.webp" },
    { key: "skylights", slug: "skylight-installation", image: "/images/services/service-9.webp" },
    { key: "solar", slug: "solar-roofing", image: "/images/services/service-8.webp" },
  ],
} as const;
