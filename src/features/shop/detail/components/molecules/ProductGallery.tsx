"use client";

import { useState } from "react";
import { Media } from "@/common/media/components/Media";
import { ViewerProvider, ViewerZoomButton } from "@/common/image-viewer/components/ViewerProvider";
import type { ProductGalleryProps } from "@/features/shop/detail/types";

/* main shot with a zoom control over a thumb strip that swaps it */
export const ProductGallery = ({
  images,
  title,
  description,
  zoomLabel,
  closeLabel,
  previousLabel,
  nextLabel,
}: ProductGalleryProps) => {
  const [active, setActive] = useState(0);
  /* every shot carries the same caption: the viewer only swaps the image */
  const viewerCards = images.map((image) => ({ image, title, description }));

  return (
    /* the provider owns the open index, so opening the viewer leaves the strip untouched */
    <ViewerProvider
      cards={viewerCards}
      closeLabel={closeLabel}
      previousLabel={previousLabel}
      nextLabel={nextLabel}
    >
      <div className="grid content-start gap-4">
        {/* frame owns the form as in about: square, 4:3 on tablet, square again from lg */}
        <div className="group relative aspect-square overflow-hidden rounded-media shadow-lg sm:aspect-4/3 lg:aspect-square">
          <Media src={images[active]!} alt={title} shape="fill" sizes="(max-width: 1024px) 100vw, 45vw" />
          <div className="absolute top-4 right-4">
            <ViewerZoomButton index={active} label={zoomLabel} />
          </div>
        </div>

        {/* five columns for the five shots every product carries: main plus four */}
        <div className="grid grid-cols-5 gap-3">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              aria-pressed={index === active}
              onClick={() => setActive(index)}
              aria-label={`${title} ${index + 1}`}
              className={`overflow-hidden rounded-media border-2 transition-colors ${
                index === active ? "border-primary" : "border-line hover:border-primary"
              }`}
            >
              <Media src={src} alt={title} shape="thumb" sizes="(max-width: 1024px) 18vw, 9vw" />
            </button>
          ))}
        </div>
      </div>
    </ViewerProvider>
  );
};
