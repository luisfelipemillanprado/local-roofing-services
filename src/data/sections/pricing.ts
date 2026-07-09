/* Pricing section: ordered items (icon/price), text by key */
export const pricingData = {
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/services" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* per-plan card button: i18n key (text) + href (destination) */
  chooseHref: { key: "action.choose", href: "#contact" },
  items: [
    { key: "residential", icon: "home", price: "$5,999" },
    { key: "commercial", icon: "building", price: "$599", highlighted: true },
    { key: "industrial", icon: "factory", price: "$12,999" },
  ],
} as const;
