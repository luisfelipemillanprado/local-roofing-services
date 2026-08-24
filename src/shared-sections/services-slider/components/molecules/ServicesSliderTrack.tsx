"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ServicesSliderCard } from "@/shared-sections/services-slider/components/molecules/ServicesSliderCard";
import { useParallaxCarousel } from "@/carousel/parallax/useParallaxCarousel";
import type { ServicesSliderTrackProps } from "@/shared-sections/services-slider/types";

/* presentation only: the parallax carousel logic lives in @/carousel */
export const ServicesSliderTrack = ({
  cards,
  viewDetails,
  contact,
  previous,
  next,
}: ServicesSliderTrackProps) => {
  const {
    emblaRef,
    ready,
    selectedIndex,
    scrollSnaps,
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useParallaxCarousel();

  return (
    <div className={clsx("grid gap-6 transition-opacity duration-500", ready ? "opacity-100" : "opacity-0")}>
      <div className="relative">
        {/* parent Container(bleed) makes this full-width on mobile; slide px is the gap (positive, no negative margins) */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex [touch-action:pan-y_pinch-zoom]">
            {cards.map(({ key, ...card }) => (
              <div
                key={key}
                className="min-w-0 flex-[0_0_calc(100%-1.75rem)] px-1.5 min-[412px]:flex-[0_0_calc(100%-2rem)] min-[428px]:flex-[0_0_calc(100%-2.25rem)] md:flex-[0_0_72%] md:px-3"
              >
                <ServicesSliderCard {...card} viewDetails={viewDetails} contact={contact} />
              </div>
            ))}
          </div>
        </div>

        {/* arrows: PC only, at the carousel edges, vertically centered over the cards */}
        <button
          type="button"
          aria-label={previous}
          disabled={prevBtnDisabled}
          onClick={onPrevButtonClick}
          className="absolute top-1/2 left-4 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface-panel transition-colors hover:bg-surface-base disabled:opacity-40 md:grid"
        >
          <ChevronLeft className="size-5 text-foreground" />
        </button>
        <button
          type="button"
          aria-label={next}
          disabled={nextBtnDisabled}
          onClick={onNextButtonClick}
          className="absolute top-1/2 right-4 hidden size-10 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface-panel transition-colors hover:bg-surface-base disabled:opacity-40 md:grid"
        >
          <ChevronRight className="size-5 text-foreground" />
        </button>
      </div>

      {/* progress indicator only: non-interactive, always centered */}
      <div aria-hidden="true" className="grid grid-flow-col justify-center gap-2">
        {scrollSnaps.map((_, i) => (
          <span
            key={i}
            className={clsx(
              "h-2 rounded-full transition-all duration-300",
              i === selectedIndex ? "w-6 bg-primary" : "w-2 bg-foreground-muted/40",
            )}
          />
        ))}
      </div>
    </div>
  );
};
