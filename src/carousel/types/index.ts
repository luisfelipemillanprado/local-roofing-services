/* type-only derivations; avoids importing embla-carousel */
export type EmblaApi = NonNullable<ReturnType<typeof import("embla-carousel-react").default>[1]>;
type EmblaRef = ReturnType<typeof import("embla-carousel-react").default>[0];

/* per-view behaviour; a plain drag strip opts out of both */
export interface CarouselOptions {
  loop?: boolean;
  autoplay?: boolean;
  startSnap?: number; /* opens on a given slide, e.g. the tile that launched a viewer */
  align?: "start" | "center"; /* center lets the neighbouring slides peek at both edges */
}

/* all a carousel view needs; logic lives in the hook */
export interface Carousel {
  emblaRef: EmblaRef;
  selectedIndex: number;
  goToPrev: () => void;
  goToNext: () => void;
}
