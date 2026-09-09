import { company } from "@/data/site";

/* Shared hero band data: image variants, social proof, and the i18n key contract */
export const pageHeaderData = {
  /* hero backgrounds by variant: image path + its alt key */
  images: {
    default: { src: "/images/hero/hero-1.webp", altKey: "imageAlt" },
    home: { src: "/images/hero/hero-1.webp", altKey: "imageAltHome" },
    shop: { src: "/images/hero/hero-2.webp", altKey: "imageAltShop" },
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
    projects: { key: "action.viewProjects", href: "/projects" },
    shop: { key: "action.viewShop", href: "/shop" },
    work: { key: "action.viewWork", href: "#projects" },
  },
  /* hero-side material teaser: three cards (central one links out) + a shop banner; images reuse shop product shots */
  showcase: {
    materials: [
      {
        key: "showcase.shingles",
        image: "/images/products/asphalt-shingles/timberline-hdz/timberline-hdz-3.webp",
      },
      {
        key: "showcase.metal",
        image: "/images/products/corrugated-metal-panels/brakki-19pc/brakki-19pc-1.webp",
        linked: true,
      },
      {
        key: "showcase.underlayment",
        image: "/images/products/synthetic-underlayment/dupont-tyvek-120/dupont-tyvek-120-1.webp",
      },
    ],
    bannerKey: "showcase.banner",
    linkAriaKey: "showcase.linkAria",
    /* route-aware CTA: the shop hero funnels to contact, every other hero to the shop */
    shopCta: { key: "action.shopNow", href: "/shop" },
    contactCta: { key: "action.getQuote", href: "#contact" },
  },
  /* social proof: avatars + rating label by key + the count it names (from site) */
  avatars: [
    "/images/avatars/avatar-1.webp",
    "/images/avatars/avatar-7.webp",
    "/images/avatars/avatar-3.webp",
    "/images/avatars/avatar-8.webp",
  ],
  customersKey: "customers",
  customersCount: company.customersServed,
} as const;
