import type { IconCardProps } from "@/common/icon-card/types";

/* resolved per-card item for the list */
interface IconCardItem extends Pick<IconCardProps, "icon" | "title" | "description" | "delay"> {
  key: string;
}

export interface IconCardListProps {
  cards: IconCardItem[];
}
