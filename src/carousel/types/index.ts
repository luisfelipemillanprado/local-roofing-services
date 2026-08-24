/* type-only derivations; avoids importing embla-carousel */
export type EmblaApi = NonNullable<ReturnType<typeof import("embla-carousel-react").default>[1]>;
type EmblaRef = ReturnType<typeof import("embla-carousel-react").default>[0];

/* dot indicator state: active snap + snap list */
export interface CarouselDots {
  selectedIndex: number;
  scrollSnaps: number[];
}

/* all a carousel view needs; logic lives in the hook */
export interface Carousel extends CarouselDots {
  emblaRef: EmblaRef;
  ready: boolean;
}
