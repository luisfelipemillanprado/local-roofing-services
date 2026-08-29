export type MediaShape = "wide" | "feature" | "showcase" | "thumb" | "fill";

export interface MediaProps {
  src: string;
  alt: string;
  sizes: string;
  shape: MediaShape;
}
