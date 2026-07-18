import { company } from "@/data/site";

/* Pitch section: per-variant bundles (icons/values/hrefs), text by full key */
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
      { key: "why-choose.stats.years", icon: "award", value: `${company.yearsExperience}+` },
      { key: "why-choose.stats.projects", icon: "hammer", value: "1.5k" },
      { key: "why-choose.stats.roofers", icon: "hardhat", value: "40+" },
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
      { key: "values.stats.licensed", icon: "shield", value: "100%" },
      { key: "values.stats.rating", icon: "star", value: "4.9" },
      { key: "values.stats.response", icon: "phone", value: "24/7" },
    ],
  },
} as const;
