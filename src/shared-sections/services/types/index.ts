import type { IconBadgeKey } from "@/common/icon-badge/types";

export interface ServicesProps {
  variant: "summary" | "detail";
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

/* resolved per-card data for the list */
export interface ServiceCardData extends Omit<ServiceCardProps, "learnMore"> {
  key: string;
}

export interface ServiceListProps {
  cards: ServiceCardData[];
  learnMore: string;
  /* home: 4 below lg, all at lg */
  collapseBelowLg?: boolean;
}
