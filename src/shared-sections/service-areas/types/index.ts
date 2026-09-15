import type { ReactNode } from "react";

type SectionTone = "base" | "muted" /* section surface; keeps page section alternation correct */;

/* branch offices over an interactive Miami map */
export interface ServiceAreasProps {
  tone?: SectionTone;
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
  map: ReactNode; /* full-width cell between the two card groups */
}

export interface OfficeViewerGridProps {
  cards: OfficeCardItem[];
  map: ReactNode;
  actionLabel: string;
  closeLabel: string;
  previousLabel: string;
  nextLabel: string;
}

/* one office pin: [latitude, longitude]; null until real coordinates are approved (no pin drawn) */
interface OfficePin {
  key: string;
  name: string;
  address: string;
  position: readonly [lat: number, lng: number] | null;
}

/* geographic box in degrees */
interface GeoBox {
  west: number;
  south: number;
  east: number;
  north: number;
}

/* map UI strings (MapLibre locale + region label) */
interface OfficeMapLabels {
  region: string;
  zoomIn: string;
  zoomOut: string;
  closePopup: string;
  toggleAttribution: string;
}

/* rendering only: style url (provider), initial view, pan limit, pins; services plug in elsewhere */
export interface OfficeMapProps {
  styleUrl: string;
  view: GeoBox;
  limit: GeoBox;
  offices: readonly OfficePin[];
  labels: OfficeMapLabels;
}
