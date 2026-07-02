import type { IconBadgeKey } from "@/common/icon-badge/types";

/** Keys map to `about-page.values.items.<key>` (literal union → type-safe `t()`). */
export type ValueKey = "quality" | "safety" | "honest" | "community";

export const valuesData: { items: { key: ValueKey; icon: IconBadgeKey }[] } = {
  items: [
    { key: "quality", icon: "award" },
    { key: "safety", icon: "hardhat" },
    { key: "honest", icon: "handshake" },
    { key: "community", icon: "users" },
  ],
};
