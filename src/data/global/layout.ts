import type { NavLinkData } from "@/layout/navbar/types";
import type { FloatingActionData } from "@/layout/floating-contact/types";
import { company } from "@/data/site";

/* Site-wide layout shell data (logo, navbar, floating-contact); labels by key. */
export const layoutData = {
  logo: {
    src: company.logo,
    name: company.name,
    href: "/" /* logo link target (site root) */,
  },
  navbar: {
    menuId: "mobile-menu",
    ctaHref: { key: "action.contact", href: "#contact" },
    phone: company.phone,
    links: [
      { key: "home", href: "/", icon: "home" },
      { key: "services", href: "/services", icon: "services" },
      { key: "shop", href: "/shop", icon: "shop" },
      { key: "gallery", href: "/gallery", icon: "gallery" },
      { key: "about", href: "/about", icon: "about" },
      { key: "areas", href: "/areas", icon: "areas" },
    ] satisfies NavLinkData[],
  },
  /* footer columns: every label/title by key in the footer namespace */
  footer: {
    topLinks: {
      titleKey: "topLinksTitle",
      items: [
        { key: "about", href: "/about" },
        { key: "services", href: "/services" },
        { key: "projects", href: "/gallery" },
        { key: "pricing", href: "/#pricing" },
        { key: "contact", href: "/#contact" },
      ],
    },
    /* services column: labels reuse the service namespace titles */
    services: {
      titleKey: "servicesTitle",
      items: [
        { key: "residential", href: "/services/residential-roofing" },
        { key: "replacement", href: "/services/roof-replacement" },
        { key: "metal", href: "/services/metal" },
        { key: "storm", href: "/services/storm-damage-repair" },
        { key: "commercial", href: "/services/commercial-roofing" },
      ],
    },
    /* contact column: closedKey labels the null-time hours row */
    contact: { titleKey: "contactTitle", closedKey: "closed" },
    /* legal links: placeholder routes until the pages exist */
    legal: {
      privacy: { key: "privacy", href: "#" },
      terms: { key: "terms", href: "#" },
    },
  },
  floatingContact: {
    name: company.name,
    actions: [
      { key: "whatsapp", href: company.whatsappHref, external: true },
      { key: "call", href: company.phoneHref },
    ] satisfies FloatingActionData[],
  },
} as const;
