import type { IconBadgeKey } from "@/common/icon-badge/types";

/* resolved per-stat item for the list */
interface StatItem {
  key: string;
  icon: IconBadgeKey;
  value: string;
  label: string;
}

export interface StatListProps {
  stats: StatItem[];
  /* chip tone: panel when the section surface is muted */
  tone?: "muted" | "panel";
}
