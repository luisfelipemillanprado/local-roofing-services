import type { SocialData } from "@/common/social/types";

/* Locale-independent company details; translatable copy lives in messages. */
export const company = {
  name: "Roofpro",
  logo: "/images/logo/logo.webp" /* brand badge, rendered by the Logo component */,
  phone: "+123 456 7890",
  phoneHref: "tel:+1234567890",
  whatsappHref: "https://wa.me/1234567890" /* placeholder number, digits only */,
  email: "hello@roofpro.com",
  emailHref: "mailto:hello@roofpro.com",
  address: "1200 Biscayne Blvd, Miami, FL",
  yearsExperience: 25,
  /* site credit: who built the site (placeholder href until the real domain) */
  builder: { key: "builtBy", name: "Remiux LLC", href: "#" } as const,
  /* social profiles: placeholder hrefs until the real accounts exist */
  socials: [
    { key: "facebook", label: "Facebook", href: "#" },
    { key: "x", label: "X", href: "#" },
    { key: "instagram", label: "Instagram", href: "#" },
    { key: "youtube", label: "YouTube", href: "#" },
  ] satisfies SocialData[],
  /* opening hours: day label by key; a null time means closed */
  hours: [
    { key: "weekdays", time: "8:00 AM – 7:00 PM" },
    { key: "saturday", time: "9:00 AM – 4:00 PM" },
    { key: "sunday", time: null },
  ] as const,
};
