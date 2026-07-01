import type { IconBadgeKey } from "@/common/icon-badge/types";
import type { ServiceKey } from "@/data/sections/services";

export interface ServicesProps {
  exploreHref?: string;
  limit?: number;
}

export interface ServiceCardProps {
  icon: IconBadgeKey;
  image: string;
  title: string;
  description: string;
  learnMore: string;
  href: string;
  delay?: number;
}

/* per-card resolved data the organism hands to the list */
export interface ServiceCardData extends Omit<ServiceCardProps, "learnMore" | "href"> {
  key: ServiceKey;
}

export interface ServiceListProps {
  cards: ServiceCardData[];
  learnMore: string;
}
