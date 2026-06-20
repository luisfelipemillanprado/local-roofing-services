import type { IconBadgeKey } from "@/common/icon-badge/types";

/** Keys map to `projects-page.stats.items.<key>` (literal union → type-safe `t()`). */
export type ProjectStatKey = "projects" | "years" | "satisfaction" | "roofers";

export const projectStatsSection: { items: { key: ProjectStatKey; icon: IconBadgeKey }[] } = {
  items: [
    { key: "projects", icon: "hammer" },
    { key: "years", icon: "award" },
    { key: "satisfaction", icon: "star" },
    { key: "roofers", icon: "users" },
  ],
};
