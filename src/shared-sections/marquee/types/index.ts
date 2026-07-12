/* Semantic keys for the badge icons (used for the ICONS lookup). */
export type MarqueeIconKey = "storm" | "shield" | "award" | "hammer" | "wrench";

/* resolved per-badge item for the track */
interface MarqueeItem {
  key: string;
  icon: MarqueeIconKey;
  label: string;
}

export interface MarqueeListProps {
  items: MarqueeItem[];
}
