import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCarouselDots } from "@/carousel/hooks/useCarouselDots";
import type { Carousel } from "@/carousel/types";

/* looped autoplay carousel: dot state + load fade */
export const useCarousel = (): Carousel => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
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
    /* resume after a touch; default interaction stops autoplay on pointerdown */
    const resume = () => autoplay?.play();
    /* v9 autoplay needs a manual start; skip when hidden or reduced-motion */
    if (autoplay && !hidden && !reducedMotion) {
      autoplay.play();
      emblaApi.on("pointerup", resume);
    }

    return () => {
      cancelAnimationFrame(raf);
      emblaApi.off("pointerup", resume);
    };
  }, [emblaApi]);

  return { emblaRef, ready, ...dots };
};
