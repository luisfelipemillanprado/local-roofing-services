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

export const whyChooseData = {
  ctaHref: { key: "action.learnMore", href: "/about" },
  features: [
    { key: "emergency", icon: "phone" },
    { key: "proactive", icon: "idea" },
    { key: "reliable", icon: "shield" },
    { key: "experience", icon: "award" },
  ],
  stats: [
    { key: "years", icon: "award", value: `${company.yearsExperience}+` },
    { key: "projects", icon: "hammer", value: "1.5k" },
    { key: "roofers", icon: "hardhat", value: "40+" },
  ],
} as const;
