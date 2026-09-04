import type { NavLinkData } from "@/layout/navbar/types";
import type { FloatingActionData } from "@/layout/floating-contact/types";
import type { SocialData } from "@/common/social/types";
import { company } from "@/data/site";

/* Site-wide layout shell data (logo, socials, navbar, footer, floating-contact); labels by key */
export const layoutData = {
  logo: {
    href: "/" /* logo link target (site root) */,
    src: company.logo,
    name: company.name,
  },
  /* brand social profiles (footer + shop): icon key + aria label, href from company */
  socials: [
    { key: "facebook", label: "Facebook", href: company.facebookHref },
    { key: "x", label: "X", href: company.xHref },
    { key: "instagram", label: "Instagram", href: company.instagramHref },
    { key: "youtube", label: "YouTube", href: company.youtubeHref },
  ] satisfies SocialData[],
  navbar: {
    links: [
      { key: "home", href: "/", icon: "home" },
      { key: "services", href: "/services", icon: "services" },
      { key: "shop", href: "/shop", icon: "shop" },
      { key: "projects", href: "/projects", icon: "projects" },
      { key: "about", href: "/about", icon: "about" },
      { key: "areas", href: "/areas", icon: "areas" },
    ] satisfies NavLinkData[],
    phone: company.phone,
    ctaHref: { key: "action.contact", href: "#contact" },
    menuId: "mobile-menu",
  },
  /* footer columns: every label/title by key in the footer namespace */
  footer: {
    topLinks: {
      titleKey: "topLinksTitle",
      items: [
        { key: "home", href: "/" },
        { key: "services", href: "/services" },
        { key: "shop", href: "/shop" },
        { key: "projects", href: "/projects" },
        { key: "about", href: "/about" },
        { key: "contact", href: "/#contact" },
      ],
    },
    /* services column: labels reuse the service namespace titles */
    services: {
      titleKey: "servicesTitle",
      items: [
        { key: "repair", href: "/services/roof-repair" },
        { key: "replacement", href: "/services/roof-replacement" },
        { key: "storm", href: "/services/storm-damage-repair" },
        { key: "inspections", href: "/services/roof-inspections" },
        { key: "gutters", href: "/services/gutters" },
        { key: "commercial", href: "/services/commercial-roofing" },
        { key: "residential", href: "/services/residential-roofing" },
      ],
    },
    /* contact column: closedKey labels the null-time hours row */
    contact: { titleKey: "contactTitle", closedKey: "closed" },
    /* opening hours: day label by key; time from company, a null time means closed (see contact.closedKey) */
    hours: [
      { key: "weekdays", time: company.weekdayHours },
      { key: "saturday", time: company.saturdayHours },
      { key: "sunday", time: company.sundayHours },
    ],
    /* legal links: placeholder routes until the pages exist */
    legal: {
      privacy: { key: "privacy", href: "#" },
      terms: { key: "terms", href: "#" },
    },
    /* site credit: key labels it; placeholder href until the real domain */
    builder: { key: "builtBy", name: "Remiux LLC", href: "#" },
  },
  floatingContact: {
    name: company.name,
    actions: [
      { key: "whatsapp", href: company.whatsappHref, external: true },
      { key: "call", href: company.phoneHref },
    ] satisfies FloatingActionData[],
  },
} as const;
