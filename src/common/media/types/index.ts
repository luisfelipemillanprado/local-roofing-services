export type MediaAspect = "portrait" | "landscape";
export type MediaOverlay = "soft" | "strong";

export interface MediaProps {
  src: string;
  alt: string;
  sizes: string;
  aspect?: MediaAspect;
  overlay?: MediaOverlay;
}
