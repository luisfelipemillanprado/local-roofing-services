/* semantic keys for the badge icons (ICONS lookup) */
export type MarqueeIconKey = "storm" | "shield" | "award" | "strong" | "wrench";

/* resolved per-badge item for the track */
interface MarqueeItem {
  key: string;
  icon: MarqueeIconKey;
  label: string;
}

export interface MarqueeListProps {
  items: MarqueeItem[];
  copies: number;
}
