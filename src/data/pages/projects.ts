/* Case study: before/after + narrative cards, text by key */
export const caseStudyData = {
  /* same home; before shown first */
  images: [
    { key: "before", src: "/images/case/before.webp" },
    { key: "after", src: "/images/case/after.webp" },
  ],
  /* section cta: i18n key (text) + href (destination) */
  ctaHref: { key: "action.contact", href: "#contact" },
  cards: [
    { key: "challenge", icon: "alert" },
    { key: "solution", icon: "wrench" },
    { key: "result", icon: "shield" },
    { key: "guarantee", icon: "award" },
  ],
} as const;
