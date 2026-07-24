/* Service detail: shared four-phase process, text by key */
export const serviceDetailData = {
  /* four-phase skeleton shared by every service; only the copy varies */
  process: [
    { key: "inspect", icon: "clipboard" },
    { key: "quote", icon: "document" },
    { key: "work", icon: "hammer" },
    { key: "warranty", icon: "shield" },
  ],
} as const;
