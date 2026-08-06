import { customerAvatars } from "@/data/avatars";
import { company } from "@/data/site";

/* Shared hero band data: image variants, social proof, and the i18n key contract */
export const pageHeaderData = {
  /* hero backgrounds by variant: image path + its alt key */
  images: {
    default: { src: "/images/hero/hero-2.webp", altKey: "imageAlt" },
    home: { src: "/images/hero/hero-1.webp", altKey: "imageAltHome" },
    shop: { src: "/images/hero/hero-3.webp", altKey: "imageAltShop" },
  },
  /* availability badge: label by key + the city it names (from site) */
  badgeKey: "badge",
  badgeCity: company.city,
  /* hero copy: explicit i18n keys, read from page-header.pages.<page> per page */
  titleLeadKey: "titleLead",
  titleAccentKey: "titleAccent",
  descriptionKey: "description",
  /* section CTA: i18n key (text) + href (destination) */
  ctaHref: { key: "action.upgrade", href: "#contact" },
  /* rotating ghost CTA per page: i18n key (text) + href (destination) */
  secondaryCtaHref: {
    services: { key: "action.viewServices", href: "/services" },
    projects: { key: "action.viewProjects", href: "/gallery" },
    team: { key: "action.viewTeam", href: "/about#team" },
    shop: { key: "action.viewShop", href: "/shop" },
    work: { key: "action.viewWork", href: "#projects" },
  },
  /* social proof: avatars + rating label by key + the count it names (from site) */
  avatars: customerAvatars,
  customersKey: "customers",
  customersCount: company.customersServed,
} as const;
