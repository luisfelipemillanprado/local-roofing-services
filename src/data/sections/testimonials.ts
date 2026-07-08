/* Testimonials section: ordered items (avatar), text by key */
export const testimonialsData = {
  /* CTA per variant: i18n key (text) + href (destination) */
  ctaHref: {
    viewAll: { key: "action.viewAll", href: "/about" },
    contact: { key: "action.contact", href: "#contact" },
  },
  /* Google badge numbers; the label text lives in i18n */
  rating: { score: "4.9", count: "820+" },
  items: [
    { key: "paula", avatar: "/images/avatars/avatar1.webp" },
    { key: "dennis", avatar: "/images/avatars/avatar2.webp" },
    { key: "howard", avatar: "/images/avatars/avatar3.webp" },
    { key: "grace", avatar: "/images/avatars/avatar4.webp" },
    { key: "greg", avatar: "/images/avatars/avatar5.webp" },
    { key: "tyler", avatar: "/images/avatars/avatar6.webp" },
  ],
} as const;
