import { company } from "@/data/site";

export const heroData = {
  name: company.name,
  yearsExperience: company.yearsExperience,
  image: "/images/hero/hero.webp",
  ctaPrimaryHref: { key: "action.primary", href: "#contact" },
  ctaSecondaryHref: { key: "action.secondary", href: "#projects" },
  avatars: [
    "/images/avatars/avatar1.webp",
    "/images/avatars/avatar2.webp",
    "/images/avatars/avatar3.webp",
    "/images/avatars/avatar4.webp",
  ],
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
