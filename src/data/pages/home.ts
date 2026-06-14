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
  type LucideIcon,
} from "lucide-react";
import { blurs } from "@/data/blurs";

/* Keys map to the home-only message namespaces (literal unions → type-safe `t()`). */
export type WhyChooseFeatureKey = "emergency" | "proactive" | "reliable" | "experience";
export type WhyChooseStatKey = "years" | "projects" | "roofers";
export type MarqueeKey = "stormReady" | "licensed" | "years" | "builtStrong" | "fullService";
export type PricingPlanKey = "residential" | "commercial";
export type BlogPostKey = "defenseSystem" | "underAttack";

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
  ],
};

export const blogSection: { posts: { key: BlogPostKey; image: string; blur: string }[] } = {
  posts: [
    {
      key: "defenseSystem",
      image: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?auto=format&fit=crop&w=800&q=80",
      blur: blurs.image,
    },
    {
      key: "underAttack",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
      blur: blurs.image,
    },
  ],
};
