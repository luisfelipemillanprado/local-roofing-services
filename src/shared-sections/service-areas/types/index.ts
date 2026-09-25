type SectionTone = "base" | "muted" /* section surface; keeps page section alternation correct */;

/* branch offices over an interactive Miami map */
export interface ServiceAreasProps {
  tone?: SectionTone;
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
