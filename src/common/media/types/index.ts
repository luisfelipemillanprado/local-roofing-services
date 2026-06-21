export type MediaShape = "wide" | "gallery" | "portrait" | "feature";
export type MediaOverlay = "soft" | "strong";

export interface MediaProps {
  src: string;
  alt: string;
  sizes: string;
  shape: MediaShape;
  overlay?: MediaOverlay;
}
