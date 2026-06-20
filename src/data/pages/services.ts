import type { IconBadgeKey } from "@/common/icon-badge/types";

/** Keys map to `services-page.process.steps.<key>` (literal union → type-safe `t()`). */
export type ProcessStepKey = "inspection" | "quote" | "installation" | "warranty";

export const processSection: { steps: { key: ProcessStepKey; icon: IconBadgeKey }[] } = {
  steps: [
    { key: "inspection", icon: "clipboard" },
    { key: "quote", icon: "document" },
    { key: "installation", icon: "hammer" },
    { key: "warranty", icon: "shield" },
  ],
};
