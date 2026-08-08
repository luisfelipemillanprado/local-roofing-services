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
    { key: "repair", slug: "roof-repair", image: "/images/services/service10.webp" },
    { key: "replacement", slug: "roof-replacement", image: "/images/services/service9.webp" },
    { key: "storm", slug: "storm-damage-repair", image: "/images/services/service7.webp" },
    { key: "inspections", slug: "roof-inspections", image: "/images/services/service6.webp" },
    { key: "gutters", slug: "gutters", image: "/images/services/service1.webp" },
    { key: "commercial", slug: "commercial-roofing", image: "/images/services/service8.webp" },
    { key: "residential", slug: "residential-roofing", image: "/images/services/service3.webp" },
    { key: "metal", slug: "metal", image: "/images/services/service4.webp" },
    { key: "tile", slug: "tile-roofing", image: "/images/services/service11.webp" },
    { key: "flat", slug: "flat-roofing", image: "/images/services/service12.webp" },
    { key: "skylights", slug: "skylight-installation", image: "/images/services/service5.webp" },
    { key: "solar", slug: "solar-roofing", image: "/images/services/service2.webp" },
  ],
} as const;
