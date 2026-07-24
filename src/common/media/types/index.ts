export type MediaShape = "wide" | "feature" | "showcase";

export interface MediaProps {
  src: string;
  alt: string;
  sizes: string;
  shape: MediaShape;
}
