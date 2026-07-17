import { company } from "@/data/site";
import { customerAvatars } from "@/data/avatars";

export const heroData = {
  name: company.name,
  yearsExperience: company.yearsExperience,
  image: "/images/hero/hero1.webp",
  /* availability badge: label by key */
  badgeKey: "badge",
  ctaPrimaryHref: { key: "action.primary", href: "#contact" },
  ctaSecondaryHref: { key: "action.secondary", href: "#projects" },
  /* social proof: avatars + rating label by key */
  avatars: customerAvatars,
  customersKey: "customers",
} as const;
