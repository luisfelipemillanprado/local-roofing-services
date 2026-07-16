import { customerAvatars } from "@/data/avatars";

/* Page-header section: hero band image + social proof; text by key */
export const pageHeaderData = {
  image: "/images/hero/hero2.webp",
  /* availability badge: label by key */
  badgeKey: "badge",
  /* social proof: avatars + rating label by key */
  avatars: customerAvatars,
  customersKey: "customers",
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.upgrade", href: "#contact" },
  /* rotating ghost CTA per page: i18n key (text) + href (destination) */
  secondaryCtaHref: {
    services: { key: "action.viewServices", href: "/services" },
    projects: { key: "action.viewProjects", href: "/projects" },
    team: { key: "action.viewTeam", href: "/about#team" },
  },
} as const;
