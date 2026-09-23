"use client";

import { useState } from "react";
import { Media } from "@/common/media/components/Media";
import { ZoomButton } from "@/common/image-viewer/components/ZoomButton";
import { ImageViewer } from "@/common/image-viewer/components/ImageViewer";
import type { ProductGalleryProps } from "@/features/shop/types";

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
  const [open, setOpen] = useState(false);

  return (
    <div className="grid content-start gap-4">
      <div className="group relative overflow-hidden rounded-media border border-line">
        <Media src={images[active]!} alt={title} shape="thumb" sizes="(max-width: 1024px) 100vw, 45vw" />
        <div className="absolute top-4 right-4">
          <ZoomButton label={zoomLabel} onClick={() => setOpen(true)} pulse />
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
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

      {open && (
        <ImageViewer
          cards={images.map((image) => ({ image, title, description }))}
          startIndex={active}
          onClose={() => setOpen(false)}
          closeLabel={closeLabel}
          previousLabel={previousLabel}
          nextLabel={nextLabel}
        />
      )}
    </div>
  );
};
