/* Faq section: per-variant items, text by full key; header + cta shared */
export const faqData = {
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.contact", href: "#contact" },
  services: {
    items: [
      { key: "services.items.assessment" },
      { key: "services.items.insurance" },
      { key: "services.items.warranty" },
      { key: "services.items.presence" },
      { key: "services.items.protection" },
      { key: "services.items.weather" },
      { key: "services.items.scheduling" },
    ],
  },
  projects: {
    items: [
      { key: "projects.items.similar" },
      { key: "projects.items.duration" },
      { key: "projects.items.occupied" },
      { key: "projects.items.permits" },
      { key: "projects.items.matching" },
      { key: "projects.items.hidden" },
      { key: "projects.items.start" },
    ],
  },
  about: {
    items: [
      { key: "about.items.licensed" },
      { key: "about.items.hurricanes" },
      { key: "about.items.insurance" },
      { key: "about.items.permits" },
      { key: "about.items.warranty" },
      { key: "about.items.replacement" },
      { key: "about.items.signs" },
    ],
  },
} as const;
