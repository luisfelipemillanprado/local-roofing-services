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
    const raf = requestAnimationFrame(() => {
      setReady(true);
      /* v9 autoplay needs a manual start; skip when hidden or reduced-motion */
      const hidden = emblaApi.rootNode().offsetParent === null;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!hidden && !reducedMotion) emblaApi.plugins().autoplay?.play();
    });
    return () => cancelAnimationFrame(raf);
  }, [emblaApi]);

  return { emblaRef, ready, ...dots };
};
