import clsx from "clsx";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Media } from "@/common/media/components/Media";
import { Text } from "@/common/text/components/Text";
import { ViewerControl } from "@/common/image-viewer/components/ViewerControl";
import { useCarousel } from "@/carousel/hooks/useCarousel";
import type { ImageViewerProps } from "@/common/image-viewer/types";

/* modal image viewer: backdrop, swipeable track, caption; portaled above the app shell */
export const ImageViewer = ({
  cards,
  startIndex,
  onClose,
  closeLabel,
  previousLabel,
  nextLabel,
}: ImageViewerProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  /* a lightbox never advances on its own, and it opens on the tile that was clicked */
  const { emblaRef, selectedIndex, goToPrev, goToNext } = useCarousel({
    autoplay: false,
    startSnap: startIndex,
    align: "center",
  });

  /* on open: lock scroll and move focus into the dialog */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  /* keyboard: escape closes, arrows navigate */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft") goToPrev();
      else if (event.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, goToPrev, goToNext]);

  if (typeof document === "undefined") return null;
  const card = cards[selectedIndex];
  if (!card) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={card.title}
      className="theme-dark fixed inset-0 z-(--z-modal) grid place-items-center p-4"
    >
      {/* backdrop: click to close */}
      <div onClick={onClose} className="absolute inset-0 bg-contrast/70 backdrop-blur-md" />

      <figure className="relative grid w-full max-w-5xl justify-items-center gap-4">
        <div ref={emblaRef} className="w-full overflow-hidden">
          {/* embla's required shape; the gap is slide padding, which its resize observer can measure */}
          <div className="-ml-4 flex [touch-action:pan-y_pinch-zoom]">
            {cards.map((slide, index) => (
              <div
                key={index}
                className={clsx(
                  /* 70% leaves the neighbours peeking at both edges, as the class names example does */
                  "min-w-0 flex-[0_0_70%] pl-4 transition-opacity duration-200",
                  index !== selectedIndex && "opacity-60",
                )}
              >
                <Media
                  src={slide.image}
                  alt={slide.title}
                  shape="showcase"
                  sizes="(max-width: 1024px) 70vw, 717px"
                />
              </div>
            ))}
          </div>
        </div>
        <figcaption className="grid justify-items-center gap-1 text-center">
          <Text as="span" size="body" weight="bold" text={card.title} />
          <Text as="span" size="body" tone="muted" text={card.description} />
        </figcaption>
      </figure>

      {/* controls: paint above the image */}
      <ViewerControl
        ref={closeRef}
        placement="close"
        label={closeLabel}
        icon={<X className="size-5 text-white" />}
        onClick={onClose}
      />
      <ViewerControl
        placement="prev"
        label={previousLabel}
        icon={<ChevronLeft className="size-6 text-white" />}
        onClick={goToPrev}
      />
      <ViewerControl
        placement="next"
        label={nextLabel}
        icon={<ChevronRight className="size-6 text-white" />}
        onClick={goToNext}
      />
    </div>,
    document.body,
  );
};
