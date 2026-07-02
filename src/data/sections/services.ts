/** Shared "Services" section; ordered list (icon/image), text resolved by key. */
export const servicesSection = {
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    summary: { key: "action.summary", href: "/services" },
    detail: { key: "action.detail", href: "#contact" },
  },
  /* slug = detail-page route id (/services/[slug]) */
  items: [
    { key: "gutters", slug: "gutters", icon: "droplets", image: "/images/services/service1.webp" },
    {
      key: "energyEfficient",
      slug: "energy-efficient",
      icon: "energy",
      image: "/images/services/service2.webp",
    },
    { key: "shingle", slug: "shingle", icon: "layers", image: "/images/services/service3.webp" },
    { key: "metal", slug: "metal", icon: "home", image: "/images/services/service4.webp" },
    { key: "dormers", slug: "dormers", icon: "sun", image: "/images/services/service5.webp" },
    { key: "inspection", slug: "inspection", icon: "wrench", image: "/images/services/service6.webp" },
  ],
} as const;
