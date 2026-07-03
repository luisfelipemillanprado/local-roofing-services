import type { IconBadgeKey } from "@/common/icon-badge/types";

export interface ServicesProps {
  variant: "viewAll" | "contact";
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
export interface ServiceCardData extends Pick<
  ServiceCardProps,
  "icon" | "image" | "title" | "description" | "href" | "delay"
> {
  key: string;
}

export interface ServiceListProps {
  cards: ServiceCardData[];
  learnMore: string;
  /* home: 4 below lg, all at lg */
  collapseBelowLg?: boolean;
}
