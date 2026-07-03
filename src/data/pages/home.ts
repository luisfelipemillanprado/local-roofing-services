import { ShieldCheck, Award, Hammer, Wrench, CloudRain, type LucideIcon } from "lucide-react";
import type { IconBadgeKey } from "@/common/icon-badge/types";
import { company } from "@/data/site";

/* Keys map to the home-only message namespaces (literal unions → type-safe `t()`). */
type WhyChooseFeatureKey = "emergency" | "proactive" | "reliable" | "experience";
type WhyChooseStatKey = "years" | "projects" | "roofers";
type MarqueeKey = "stormReady" | "licensed" | "years" | "builtStrong" | "fullService";
type PricingPlanKey = "residential" | "commercial" | "industrial";

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

export const whyChooseData: {
  features: { key: WhyChooseFeatureKey; icon: IconBadgeKey }[];
  stats: { key: WhyChooseStatKey; icon: IconBadgeKey }[];
} = {
  features: [
    { key: "emergency", icon: "phone" },
    { key: "proactive", icon: "idea" },
    { key: "reliable", icon: "shield" },
    { key: "experience", icon: "award" },
  ],
  stats: [
    { key: "years", icon: "award" },
    { key: "projects", icon: "hammer" },
    { key: "roofers", icon: "hardhat" },
  ],
};

/* Marquee keeps the icon component directly (not an IconBadge). */
export const marqueeData: { items: { key: MarqueeKey; icon: LucideIcon }[] } = {
  items: [
    { key: "stormReady", icon: CloudRain },
    { key: "licensed", icon: ShieldCheck },
    { key: "years", icon: Award },
    { key: "builtStrong", icon: Hammer },
    { key: "fullService", icon: Wrench },
  ],
};

export const pricingData: {
  plans: { key: PricingPlanKey; icon: IconBadgeKey; highlighted?: boolean }[];
} = {
  plans: [
    { key: "residential", icon: "home" },
    { key: "commercial", icon: "building", highlighted: true },
    { key: "industrial", icon: "factory" },
  ],
};
