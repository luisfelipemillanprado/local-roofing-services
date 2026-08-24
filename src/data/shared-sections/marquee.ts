import { company } from "@/data/site";

/* Marquee section: ordered badges (semantic icon key); text by key */
export const marqueeData = {
  yearsExperience: company.yearsExperience,
  /* loop track copies; keep even for the -50% restart */
  trackCopies: 4,
  items: [
    { key: "stormReady", icon: "storm" },
    { key: "licensed", icon: "shield" },
    { key: "years", icon: "award" },
    { key: "builtStrong", icon: "strong" },
    { key: "fullService", icon: "wrench" },
  ],
} as const;
