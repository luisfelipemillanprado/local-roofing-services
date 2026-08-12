import { company } from "@/data/site";

/* Pitch section: per-variant bundles (icons/hrefs/stat values), text by full key */
export const pitchData = {
  "why-choose": {
    stats: [
      { key: "why-choose.stats.years", icon: "calendar", value: `${company.yearsExperience}+` },
      { key: "why-choose.stats.projects", icon: "hammer", value: `${company.projectsCompleted}+` },
      { key: "why-choose.stats.roofers", icon: "hardhat", value: `${company.certifiedRoofers}+` },
      /* 4th stat: fills the 2x2 on desktop, hidden on mobile */
      { key: "why-choose.stats.rating", icon: "star", value: "4.9" },
    ],
    /* section CTA: i18n key (text) + href (destination) */
    ctaHref: { key: "why-choose.action.viewDetails", href: "/about" },
    items: [
      { key: "why-choose.items.emergency", icon: "phone", highlights: true },
      { key: "why-choose.items.materials", icon: "gem", highlights: true },
      { key: "why-choose.items.pricing", icon: "dollar", highlights: true },
      { key: "why-choose.items.licensed", icon: "shield", highlights: true },
    ],
  },
  process: {
    stats: [
      { key: "process.stats.inspection", icon: "clipboard", value: "$0" },
      { key: "process.stats.scheduling", icon: "document", value: "48h" },
      /* value stays in i18n: the unit is translatable (yr / años) */
      { key: "process.stats.warranty", icon: "shield" },
    ],
    /* section CTA: i18n key (text) + href (destination) */
    ctaHref: { key: "process.action.contact", href: "#contact" },
    items: [
      { key: "process.items.inspection", icon: "clipboard" },
      { key: "process.items.quote", icon: "document" },
      { key: "process.items.installation", icon: "hammer" },
      { key: "process.items.warranty", icon: "shield" },
    ],
  },
  values: {
    stats: [
      { key: "values.stats.licensed", icon: "shield", value: "100%" },
      { key: "values.stats.rating", icon: "star", value: "4.9" },
      { key: "values.stats.reviews", icon: "users", value: "820+" },
    ],
    /* section CTA: i18n key (text) + href (destination) */
    ctaHref: { key: "values.action.contact", href: "#contact" },
    items: [
      { key: "values.items.quality", icon: "award" },
      { key: "values.items.safety", icon: "hardhat" },
      { key: "values.items.honest", icon: "handshake" },
      { key: "values.items.community", icon: "users" },
    ],
  },
} as const;
