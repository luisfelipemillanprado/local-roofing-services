"use client";

import clsx from "clsx";
import { ServiceCard } from "@/shared-sections/services/components/molecules/ServiceCard";
import { useCarousel } from "@/carousel/hooks/useCarousel";
import type { ServiceListProps } from "@/shared-sections/services/types";

/* mobile-only carousel of the shared ServiceCard */
export const ServicesCarousel = ({ cards, viewDetails }: ServiceListProps) => {
  const { emblaRef, ready, selectedIndex, scrollSnaps } = useCarousel();

  return (
    <div className="grid gap-6">
      {/* stack carousel + skeleton in one cell to crossfade */}
      <div className="grid grid-cols-1">
        <div
          ref={emblaRef}
          className={clsx(
            "col-start-1 row-start-1 overflow-hidden transition-opacity duration-500",
            ready ? "opacity-100" : "opacity-0",
          )}
        >
          {/* one card in view; slide px is the inter-card gap, no negative margins */}
          <div className="flex [touch-action:pan-y_pinch-zoom]">
            {cards.map(({ key, ...card }) => (
              <div key={key} className="min-w-0 flex-[0_0_100%] px-1.5">
                <ServiceCard {...card} viewDetails={viewDetails} />
              </div>
            ))}
          </div>
        </div>

        {/* SSR-visible placeholder until ready; no blank gap */}
        {!ready && (
          <div className="col-start-1 row-start-1 grid px-1.5">
            <div className="grid grid-rows-[1fr_auto] overflow-hidden rounded-2xl border border-line bg-surface-panel shadow-md">
              <div className="min-h-56 animate-pulse bg-foreground-muted/10" />
              <div className="grid gap-2.5 px-5.5 py-4.5">
                <div className="h-5 w-2/3 animate-pulse rounded-full bg-foreground-muted/15" />
                <div className="h-4 w-full animate-pulse rounded-full bg-foreground-muted/10" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* non-interactive progress indicator, centered */}
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
