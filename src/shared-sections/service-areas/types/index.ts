import type { ReactNode } from "react";

type SectionTone = "base" | "muted" /* section surface; keeps page section alternation correct */;

/* shared section: coverage list everywhere; full adds branch offices + map on /areas */
export interface ServiceAreasProps {
  tone?: SectionTone;
  variant?: "coverage" | "full";
}

/* one branch office: full-bleed tile with city over address and a zoom control */
export interface OfficeCardProps {
  image: string;
  title: string; /* city */
  description: string; /* address */
  action: ReactNode; /* trailing zoom button */
  sizes: string; /* next/image sizes; large vs small cells differ from lg up */
}

/* resolved per-card item for the list */
interface OfficeCardItem extends Pick<OfficeCardProps, "image" | "title" | "description"> {
  key: string;
}

export interface OfficeListProps {
  cards: OfficeCardItem[];
  renderAction: (card: OfficeCardItem, index: number) => ReactNode; /* per-card trailing control */
}

export interface OfficeViewerGridProps {
  cards: OfficeCardItem[];
  actionLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

/* one covered place: city over county, both literal data */
export interface AreaCardProps {
  name: string;
  county: string;
}

/* resolved list item: card fields plus the React key */
interface AreaItem extends AreaCardProps {
  key: string;
}

export interface AreaListProps {
  areas: readonly AreaItem[];
}
