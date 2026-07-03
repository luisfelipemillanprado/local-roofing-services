import type { IconBadgeKey } from "@/common/icon-badge/types";

export interface IconCardProps {
  icon: IconBadgeKey;
  title: string;
  description: string;
  delay?: number;
  step?: string;
}
