/* Services section: ordered items (icon/image), text by key */
export const servicesData = {
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/services" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* slug = detail-page route id (/services/[slug]); star six lead, the home limit shows them */
  items: [
    {
      key: "replacement",
      slug: "roof-replacement",
      icon: "hammer",
      image: "/images/services/service9.webp",
    },
    { key: "shingle", slug: "shingle", icon: "layers", image: "/images/services/service3.webp" },
    { key: "metal", slug: "metal", icon: "home", image: "/images/services/service4.webp" },
    { key: "storm", slug: "storm-damage", icon: "shield", image: "/images/services/service7.webp" },
    {
      key: "commercial",
      slug: "commercial",
      icon: "building",
      image: "/images/services/service8.webp",
    },
    {
      key: "maintenance",
      slug: "maintenance",
      icon: "wrench",
      image: "/images/services/service6.webp",
    },
    { key: "gutters", slug: "gutters", icon: "droplets", image: "/images/services/service1.webp" },
    { key: "skylights", slug: "skylights", icon: "sun", image: "/images/services/service5.webp" },
    { key: "solar", slug: "solar", icon: "energy", image: "/images/services/service2.webp" },
  ],
} as const;
