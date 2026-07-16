import type { IconBadgeKey } from "@/common/icon-badge/types";
import type { IconCardProps } from "@/common/icon-card/types";

/* resolved per-stat item for the list */
interface WhyStatItem {
  key: string;
  icon: IconBadgeKey;
  value: string;
  label: string;
}

export interface WhyStatsProps {
  stats: WhyStatItem[];
}

/* resolved per-feature item for the list */
interface WhyFeatureItem extends Pick<IconCardProps, "icon" | "title" | "description" | "delay"> {
  key: string;
}

export interface WhyFeaturesProps {
  features: WhyFeatureItem[];
}
