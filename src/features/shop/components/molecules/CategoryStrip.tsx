"use client";

import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Media } from "@/common/media/components/Media";
import { Text } from "@/common/text/components/Text";
import { useCarousel } from "@/carousel/hooks/useCarousel";
import type { CategoryStripProps } from "@/features/shop/types";

/* category chips: a plain drag strip, arrows only while the row overflows */
export const CategoryStrip = ({
  categories,
  active,
  onSelect,
  previousLabel,
  nextLabel,
}: CategoryStripProps) => {
  const { emblaRef, goToPrev, goToNext, scrollSnaps } = useCarousel({ loop: false, autoplay: false });
  /* every chip in view: embla keeps a single snap, so the arrows have nothing to do */
  const navigable = scrollSnaps.length > 1;

  return (
    <div
      className={clsx(
        "grid items-center gap-3",
        /* arrows only claim a column while the row overflows, so the chips stay on the page column */
        navigable && "grid-cols-[auto_minmax(0,1fr)_auto]",
      )}
    >
      {navigable && (
        <button
          type="button"
          aria-label={previousLabel}
          onClick={goToPrev}
          className="grid size-10 place-items-center rounded-full border border-line bg-surface-panel transition-colors hover:border-primary"
        >
          <ChevronLeft className="size-5 text-primary" />
        </button>
      )}

      <div ref={emblaRef} className="overflow-hidden">
        {/* embla track needs flex; slide padding is the gap (css gap breaks measuring) */}
        <div className="-ml-4 flex [touch-action:pan-y_pinch-zoom] sm:-ml-6">
          {categories.map(({ key, label, image }) => (
            <div key={key} className="flex-[0_0_auto] pl-4 sm:pl-6">
              <button
                type="button"
                aria-pressed={key === active}
                onClick={() => onSelect(key)}
                className="group grid w-20 justify-items-center gap-2 sm:w-24"
              >
                <span
                  className={clsx(
                    "size-16 overflow-hidden rounded-full border-2 transition-colors sm:size-20",
                    key === active ? "border-primary" : "border-line group-hover:border-primary",
                  )}
                >
                  <Media src={image} alt={label} shape="thumb" sizes="(max-width: 640px) 64px, 80px" />
                </span>
                <Text
                  as="span"
                  size="note"
                  weight="semibold"
                  tone={key === active ? "default" : "muted"}
                  text={label}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      {navigable && (
        <button
          type="button"
          aria-label={nextLabel}
          onClick={goToNext}
          className="grid size-10 place-items-center rounded-full border border-line bg-surface-panel transition-colors hover:border-primary"
        >
          <ChevronRight className="size-5 text-primary" />
        </button>
      )}
    </div>
  );
};
