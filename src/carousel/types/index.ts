/* type-only derivations, avoiding an import of the transitive embla-carousel package */
export type EmblaApi = NonNullable<ReturnType<typeof import("embla-carousel-react").default>[1]>;
type EmblaRef = ReturnType<typeof import("embla-carousel-react").default>[0];

export interface UseDotButtonType {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
}

export interface UsePrevNextButtonsType {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
}

/* everything a parallax carousel view needs; all logic lives in the hook */
export interface ParallaxCarousel extends UseDotButtonType, UsePrevNextButtonsType {
  emblaRef: EmblaRef;
  ready: boolean;
}
