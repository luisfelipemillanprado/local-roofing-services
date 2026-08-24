export type MediaVideoShape = "square";

export interface MediaVideoProps {
  src: string;
  poster: string;
  alt: string;
  shape: MediaVideoShape;
}
