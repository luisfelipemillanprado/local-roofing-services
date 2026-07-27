/* Testimonials section: ordered items (avatar), text by key */
export const testimonialsData = {
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/about" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* Google badge numbers; the label text lives in i18n */
  rating: { score: "4.9", count: "820+" },
  /* Google logo, rendered by the GoogleMark atom */
  google: "/images/google/google.webp",
  /* per-set cards: avatar + full i18n key; chrome + rating shared across sets */
  sets: {
    /* general reviews for home, about and projects */
    general: {
      items: [
        { key: "general.items.paula", avatar: "/images/avatars/avatar1.webp" },
        { key: "general.items.dennis", avatar: "/images/avatars/avatar2.webp" },
        { key: "general.items.howard", avatar: "/images/avatars/avatar3.webp" },
        { key: "general.items.grace", avatar: "/images/avatars/avatar4.webp" },
        { key: "general.items.greg", avatar: "/images/avatars/avatar5.webp" },
        { key: "general.items.tyler", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    /* per-service detail pages: same six avatars, quotes by service */
    residential: {
      items: [
        { key: "residential.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "residential.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "residential.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "residential.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "residential.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "residential.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    metal: {
      items: [
        { key: "metal.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "metal.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "metal.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "metal.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "metal.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "metal.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    tile: {
      items: [
        { key: "tile.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "tile.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "tile.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "tile.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "tile.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "tile.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    flat: {
      items: [
        { key: "flat.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "flat.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "flat.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "flat.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "flat.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "flat.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    gutters: {
      items: [
        { key: "gutters.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "gutters.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "gutters.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "gutters.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "gutters.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "gutters.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    replacement: {
      items: [
        { key: "replacement.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "replacement.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "replacement.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "replacement.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "replacement.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "replacement.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    repair: {
      items: [
        { key: "repair.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "repair.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "repair.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "repair.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "repair.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "repair.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    skylights: {
      items: [
        { key: "skylights.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "skylights.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "skylights.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "skylights.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "skylights.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "skylights.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    storm: {
      items: [
        { key: "storm.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "storm.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "storm.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "storm.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "storm.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "storm.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    commercial: {
      items: [
        { key: "commercial.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "commercial.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "commercial.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "commercial.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "commercial.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "commercial.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    inspections: {
      items: [
        { key: "inspections.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "inspections.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "inspections.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "inspections.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "inspections.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "inspections.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
    solar: {
      items: [
        { key: "solar.items.r1", avatar: "/images/avatars/avatar1.webp" },
        { key: "solar.items.r2", avatar: "/images/avatars/avatar2.webp" },
        { key: "solar.items.r3", avatar: "/images/avatars/avatar3.webp" },
        { key: "solar.items.r4", avatar: "/images/avatars/avatar4.webp" },
        { key: "solar.items.r5", avatar: "/images/avatars/avatar5.webp" },
        { key: "solar.items.r6", avatar: "/images/avatars/avatar6.webp" },
      ],
    },
  },
} as const;
