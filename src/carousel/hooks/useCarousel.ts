import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCarouselDots } from "@/carousel/hooks/useCarouselDots";
import type { Carousel, CarouselOptions } from "@/carousel/types";

/* carousel state: dots, load fade, manual navigation; looped autoplay by default */
export const useCarousel = ({ loop = true, autoplay = true }: CarouselOptions = {}): Carousel => {
  /* start-aligned so multi-card views line up with the page column */
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop, align: "start" },
    autoplay ? [Autoplay({ delay: 5000 })] : [],
  );
  /* gate visibility until slides are positioned */
  const [ready, setReady] = useState(false);

  const dots = useCarouselDots(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;
    /* defer ready a frame (lint bans sync set-state in effects) */
    const raf = requestAnimationFrame(() => setReady(true));

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
      cancelAnimationFrame(raf);
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
  const goTo = useCallback(
    (index: number) => {
      emblaApi?.goTo(index);
      emblaApi?.plugins().autoplay?.reset();
    },
    [emblaApi],
  );

  return { emblaRef, ready, goToPrev, goToNext, goTo, ...dots };
};
