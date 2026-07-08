export type MediaShape = "wide" | "feature";

export interface MediaProps {
  src: string;
  alt: string;
  sizes: string;
  shape: MediaShape;
}
