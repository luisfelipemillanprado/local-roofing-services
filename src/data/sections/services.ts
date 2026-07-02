/** Shared "Services" section; ordered list (icon/image), text resolved by key. */
export const servicesSection = {
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    summary: { key: "action.summary", href: "/services" },
    detail: { key: "action.detail", href: "#contact" },
  },
  items: [
    { key: "gutters", icon: "droplets", image: "/images/services/service1.webp" },
    { key: "energyEfficient", icon: "energy", image: "/images/services/service2.webp" },
    { key: "shingle", icon: "layers", image: "/images/services/service3.webp" },
    { key: "metal", icon: "home", image: "/images/services/service4.webp" },
    { key: "dormers", icon: "sun", image: "/images/services/service5.webp" },
    { key: "inspection", icon: "wrench", image: "/images/services/service6.webp" },
  ],
} as const;
