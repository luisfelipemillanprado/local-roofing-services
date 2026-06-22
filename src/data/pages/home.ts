import { ShieldCheck, Award, Hammer, Wrench, CloudRain, type LucideIcon } from "lucide-react";
import type { IconBadgeKey } from "@/common/icon-badge/types";

/* Keys map to the home-only message namespaces (literal unions → type-safe `t()`). */
export type WhyChooseFeatureKey = "emergency" | "proactive" | "reliable" | "experience";
export type WhyChooseStatKey = "years" | "projects" | "roofers";
export type MarqueeKey = "stormReady" | "licensed" | "years" | "builtStrong" | "fullService";
export type PricingPlanKey = "residential" | "commercial" | "industrial";

export const heroSection: {
  image: string;
  ctaPrimaryHref: string;
  ctaSecondaryHref: string;
  avatars: string[];
} = {
  image: "/images/hero/hero.webp",
  ctaPrimaryHref: "#contact",
  ctaSecondaryHref: "#projects",
  avatars: [
    "/images/avatars/avatar1.webp",
    "/images/avatars/avatar2.webp",
    "/images/avatars/avatar3.webp",
    "/images/avatars/avatar4.webp",
  ],
};

export const whyChooseSection: {
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
    { key: "roofers", icon: "wrench" },
  ],
};

/* Marquee keeps the icon component directly (not an IconBadge). */
export const marqueeSection: { items: { key: MarqueeKey; icon: LucideIcon }[] } = {
  items: [
    { key: "stormReady", icon: CloudRain },
    { key: "licensed", icon: ShieldCheck },
    { key: "years", icon: Award },
    { key: "builtStrong", icon: Hammer },
    { key: "fullService", icon: Wrench },
  ],
};

export const pricingSection: {
  plans: { key: PricingPlanKey; icon: IconBadgeKey; highlighted?: boolean }[];
} = {
  plans: [
    { key: "residential", icon: "home" },
    { key: "commercial", icon: "building", highlighted: true },
    { key: "industrial", icon: "factory" },
  ],
};
