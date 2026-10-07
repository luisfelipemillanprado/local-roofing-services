"use client";

import clsx from "clsx";
import { Media } from "@/common/media/components/Media";
import { Text } from "@/common/text/components/Text";
import { useCarousel } from "@/hooks/carousel/useCarousel";
import type { CategoryStripProps } from "@/features/shop/catalog/types";

/* category chips: a plain drag strip; a focused chip is brought into view by the browser */
export const CategoryStrip = ({ categories, active, onSelect }: CategoryStripProps) => {
  const { emblaRef } = useCarousel({ loop: false, autoplay: false });

  return (
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
                {/* decorative: the chip's own label carries the meaning */}
                <Media src={image} alt="" shape="thumb" sizes="(max-width: 640px) 64px, 80px" />
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
  );
};
