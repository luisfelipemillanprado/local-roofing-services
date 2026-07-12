import { company } from "@/data/site";

/* Marquee section: ordered badges (semantic icon key); text by key */
export const marqueeData = {
  yearsExperience: company.yearsExperience,
  items: [
    { key: "stormReady", icon: "storm" },
    { key: "licensed", icon: "shield" },
    { key: "years", icon: "award" },
    { key: "builtStrong", icon: "hammer" },
    { key: "fullService", icon: "wrench" },
  ],
} as const;
