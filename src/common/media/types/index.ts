export type MediaShape = "wide" | "feature" | "showcase" | "thumb";

export interface MediaProps {
  src: string;
  alt: string;
  sizes: string;
  shape: MediaShape;
}
