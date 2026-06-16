import {
  PhoneCall,
  Lightbulb,
  ShieldCheck,
  Award,
  Hammer,
  Wrench,
  CloudRain,
  Home,
  Building2,
  Factory,
  type LucideIcon,
} from "lucide-react";

/* Keys map to the home-only message namespaces (literal unions → type-safe `t()`). */
export type WhyChooseFeatureKey = "emergency" | "proactive" | "reliable" | "experience";
export type WhyChooseStatKey = "years" | "projects" | "roofers";
export type MarqueeKey = "stormReady" | "licensed" | "years" | "builtStrong" | "fullService";
export type PricingPlanKey = "residential" | "commercial" | "industrial";

export const whyChooseSection: {
  features: { key: WhyChooseFeatureKey; icon: LucideIcon }[];
  stats: { key: WhyChooseStatKey; icon: LucideIcon }[];
} = {
  features: [
    { key: "emergency", icon: PhoneCall },
    { key: "proactive", icon: Lightbulb },
    { key: "reliable", icon: ShieldCheck },
    { key: "experience", icon: Award },
  ],
  stats: [
    { key: "years", icon: Award },
    { key: "projects", icon: Hammer },
    { key: "roofers", icon: Wrench },
  ],
};

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
  plans: { key: PricingPlanKey; icon: LucideIcon; highlighted?: boolean }[];
} = {
  plans: [
    { key: "residential", icon: Home },
    { key: "commercial", icon: Building2, highlighted: true },
    { key: "industrial", icon: Factory },
  ],
};
