import type { SocialData } from "@/common/social/types";

/* Locale-independent company facts, ordered by render top to bottom */
export const company = {
  /* navbar: brand badge, name, contact phone */
  logo: "/images/logo/logo.webp",
  name: "Roofpro",
  phone: "+123 456 7890",
  /* hero: availability badge city + social-proof rating count */
  city: "MIAMI, FL" /* hand-cased uppercase for the badge */,
  customersServed: 1500,
  /* marquee: years-in-business figure */
  yearsExperience: 25,
  /* about: stat figures */
  projectsCompleted: 1500,
  homesProtected: 1000,
  satisfaction: 98,
  /* footer brand: social profiles (placeholder hrefs until the real accounts exist) */
  socials: [
    { key: "facebook", label: "Facebook", href: "#" },
    { key: "x", label: "X", href: "#" },
    { key: "instagram", label: "Instagram", href: "#" },
    { key: "youtube", label: "YouTube", href: "#" },
  ] satisfies SocialData[],
  /* footer contact: address + linked phone + linked email */
  address: "1200 Biscayne Blvd, Miami, FL",
  phoneHref: "tel:+1234567890",
  email: "hello@roofpro.com",
  emailHref: "mailto:hello@roofpro.com",
  /* footer hours: day label by key; a null time means closed */
  hours: [
    { key: "weekdays", time: "8:00 AM – 7:00 PM" },
    { key: "saturday", time: "9:00 AM – 4:00 PM" },
    { key: "sunday", time: null },
  ] as const,
  /* footer credit: who built the site (placeholder href until the real domain) */
  builder: { key: "builtBy", name: "Remiux LLC", href: "#" } as const,
  /* floating contact: whatsapp deep link */
  whatsappHref: "https://wa.me/1234567890" /* placeholder number, digits only */,
};
