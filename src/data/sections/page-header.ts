import { customerAvatars } from "@/data/avatars";

/* Page-header section: shared background image for the dedicated pages */
export const pageHeaderData = {
  image: "/images/hero/hero2.webp",
  avatars: customerAvatars,
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.upgrade", href: "#contact" },
} as const;
