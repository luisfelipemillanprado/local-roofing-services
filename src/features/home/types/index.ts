import type { IconBadgeKey } from "@/common/icon-badge/types";
import type { IconCardProps } from "@/common/icon-card/types";

export interface AvailabilityBadgeProps {
  label: string;
}

export interface HeroActionsProps {
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}

export interface CustomerRatingProps {
  avatars: readonly string[];
  label: string;
}

/* resolved per-stat data for the list */
export interface WhyStatData {
  key: string;
  icon: IconBadgeKey;
  value: string;
  label: string;
}

export interface WhyStatsProps {
  stats: WhyStatData[];
}

/* resolved per-feature data for the list */
export interface WhyFeatureData extends Pick<IconCardProps, "icon" | "title" | "description" | "delay"> {
  key: string;
}

export interface WhyFeaturesProps {
  features: WhyFeatureData[];
}
