/* Case study section: before/after of the same home + narrative cards, text by key */
export const caseStudyData = {
  /* same home, compared in the before/after slider */
  images: {
    before: "/images/case/before.webp",
    after: "/images/case/after.webp",
  },
  cards: [
    { key: "challenge", icon: "alert" },
    { key: "solution", icon: "wrench" },
    { key: "result", icon: "shield" },
  ],
} as const;
