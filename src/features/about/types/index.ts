import type { IconCardProps } from "@/common/icon-card/types";

/* resolved per-value item for the list */
interface ValueItem extends Pick<IconCardProps, "icon" | "title" | "description" | "delay"> {
  key: string;
}

export interface ValuesListProps {
  values: ValueItem[];
}
