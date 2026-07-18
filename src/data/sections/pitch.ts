/* Pitch section: per-variant bundles (icons/hrefs), text and chip values by full key */
export const pitchData = {
  "why-choose": {
    /* section CTA: i18n key (text) + href (destination) */
    ctaHref: { key: "why-choose.action.viewDetails", href: "/about" },
    items: [
      { key: "why-choose.items.emergency", icon: "phone" },
      { key: "why-choose.items.proactive", icon: "idea" },
      { key: "why-choose.items.reliable", icon: "shield" },
      { key: "why-choose.items.experience", icon: "award" },
    ],
    stats: [
      { key: "why-choose.stats.years", icon: "award" },
      { key: "why-choose.stats.projects", icon: "hammer" },
      { key: "why-choose.stats.roofers", icon: "hardhat" },
    ],
  },
  process: {
    /* section CTA: i18n key (text) + href (destination) */
    ctaHref: { key: "process.action.contact", href: "#contact" },
    items: [
      { key: "process.items.inspection", icon: "clipboard" },
      { key: "process.items.quote", icon: "document" },
      { key: "process.items.installation", icon: "hammer" },
      { key: "process.items.warranty", icon: "shield" },
    ],
    stats: [
      { key: "process.stats.inspection", icon: "clipboard" },
      { key: "process.stats.scheduling", icon: "document" },
      { key: "process.stats.warranty", icon: "shield" },
    ],
  },
  values: {
    /* section CTA: i18n key (text) + href (destination) */
    ctaHref: { key: "values.action.contact", href: "#contact" },
    items: [
      { key: "values.items.quality", icon: "award" },
      { key: "values.items.safety", icon: "hardhat" },
      { key: "values.items.honest", icon: "handshake" },
      { key: "values.items.community", icon: "users" },
    ],
    stats: [
      { key: "values.stats.licensed", icon: "shield" },
      { key: "values.stats.rating", icon: "star" },
      { key: "values.stats.reviews", icon: "users" },
    ],
  },
} as const;
