import { Award, HardHat, Handshake, Users, type LucideIcon } from "lucide-react";

/** Keys map to `about-page.values.items.<key>` (literal union → type-safe `t()`). */
export type ValueKey = "quality" | "safety" | "honest" | "community";

export const valuesSection: { items: { key: ValueKey; icon: LucideIcon }[] } = {
  items: [
    { key: "quality", icon: Award },
    { key: "safety", icon: HardHat },
    { key: "honest", icon: Handshake },
    { key: "community", icon: Users },
  ],
};
