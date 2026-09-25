import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCarouselDots } from "@/carousel/hooks/useCarouselDots";
import type { Carousel, CarouselOptions } from "@/carousel/types";

/* carousel state: dots and manual navigation; looped autoplay by default */
export const useCarousel = ({
  loop = true,
  autoplay = true,
  startSnap = 0,
  align = "start",
}: CarouselOptions = {}): Carousel => {
  /* reduced motion keeps the snapping but drops the travel */
  const instant =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  /* start-aligned by default so multi-card views line up with the page column */
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align, startSnap, ...(instant ? { duration: 0 } : {}) },
    autoplay ? [Autoplay({ delay: 5000 })] : [],
  );

  /* seeded so the caption matches the opening slide on the first frame */
  const dots = useCarouselDots(emblaApi, startSnap);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = emblaApi.plugins().autoplay;
    const hidden = emblaApi.rootNode().offsetParent === null;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    /* v9 autoplay needs a manual start; it throws on a single snap (every slide in view) */
    const play = () => {
      if (emblaApi.snapList().length > 1) autoplay?.play();
    };
    /* skip when hidden or reduced-motion; resume after a touch, retry when a resize adds snaps */
    if (autoplay && !hidden && !reducedMotion) {
      play();
      emblaApi.on("pointerup", play).on("reinit", play);
    }

    return () => {
      emblaApi.off("pointerup", play).off("reinit", play);
    };
  }, [emblaApi]);

  /* manual steps restart the autoplay countdown, so it never jumps right after a click */
  const goToPrev = useCallback(() => {
    emblaApi?.goToPrev();
    emblaApi?.plugins().autoplay?.reset();
  }, [emblaApi]);
  const goToNext = useCallback(() => {
    emblaApi?.goToNext();
    emblaApi?.plugins().autoplay?.reset();
  }, [emblaApi]);

  return { emblaRef, goToPrev, goToNext, ...dots };
};
