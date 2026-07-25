/* Service detail: shared four-phase process, text by key */
export const serviceDetailData = {
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.contact", href: "#contact" },
  /* brand stats, identical for every service */
  stats: [
    { key: "years", icon: "award" },
    { key: "projects", icon: "hammer" },
    { key: "licensed", icon: "shield" },
  ],
  /* four-phase skeleton shared by every service; only the copy varies */
  process: [
    { key: "inspect", icon: "clipboard" },
    { key: "quote", icon: "document" },
    { key: "work", icon: "hammer" },
    { key: "warranty", icon: "shield" },
  ],
} as const;
