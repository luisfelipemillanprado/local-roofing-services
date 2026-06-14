import { Hammer, Award, Star, Users, type LucideIcon } from "lucide-react";

/** Keys map to `projects-page.stats.items.<key>` (literal union → type-safe `t()`). */
export type ProjectStatKey = "projects" | "years" | "satisfaction" | "roofers";

export const projectStatsSection: { items: { key: ProjectStatKey; icon: LucideIcon }[] } = {
  items: [
    { key: "projects", icon: Hammer },
    { key: "years", icon: Award },
    { key: "satisfaction", icon: Star },
    { key: "roofers", icon: Users },
  ],
};
