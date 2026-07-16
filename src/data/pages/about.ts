/* Values section: ordered items (icon) + themed stats; text by key */
export const valuesData = {
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.quote", href: "#contact" },
  items: [
    { key: "quality", icon: "award" },
    { key: "safety", icon: "hardhat" },
    { key: "honest", icon: "handshake" },
    { key: "community", icon: "users" },
  ],
  stats: [
    { key: "licensed", icon: "shield", value: "100%" },
    { key: "rating", icon: "star", value: "4.9" },
    { key: "response", icon: "phone", value: "24/7" },
  ],
} as const;
