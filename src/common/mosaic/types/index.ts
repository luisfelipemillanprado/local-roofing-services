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

export interface MosaicListProps {
  cards: MosaicCardItem[];
  renderAction: (card: MosaicCardItem, index: number) => ReactNode; /* per-card trailing control */
}

export interface MosaicViewerGridProps {
  cards: MosaicCardItem[];
  actionLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}
