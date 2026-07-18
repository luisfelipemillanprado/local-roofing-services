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
  viewDetails: string;
  href: string;
  delay?: number;
}

/* resolved per-card item for the list */
interface ServiceCardItem extends Pick<
  ServiceCardProps,
  "icon" | "image" | "title" | "description" | "href" | "delay"
> {
  key: string;
}

export interface ServiceListProps {
  cards: ServiceCardItem[];
  viewDetails: string;
  /* home: 4 below lg, all at lg */
  collapseBelowLg?: boolean;
}
