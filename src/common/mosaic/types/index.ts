import type { ReactNode } from "react";

export interface MosaicCardProps {
  image: string;
  title: string;
  description: string;
  action: ReactNode; /* trailing control: arrow link (summary) or zoom button (viewer grid) */
  sizes: string; /* next/image sizes; featured vs stacked cells differ from lg up */
}

/* resolved per-card item for the list */
interface MosaicCardItem extends Pick<MosaicCardProps, "image" | "title" | "description"> {
  key: string;
}

/* where the cycle of six starts: leading opens with the large tile, centered half way in */
type MosaicPattern = "leading" | "centered";

export interface MosaicListProps {
  cards: MosaicCardItem[];
  renderAction: (card: MosaicCardItem, index: number) => ReactNode; /* per-card trailing control */
  pattern?: MosaicPattern;
  insert?: ReactNode; /* full width cell dropped between the first and second group */
}
