import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useParallaxTween } from "@/carousel/parallax/useParallaxTween";
import { useDotButton } from "@/carousel/shared/useDotButton";
import { usePrevNextButtons } from "@/carousel/shared/usePrevNextButtons";
import type { ParallaxCarousel } from "@/carousel/types";

/* composes the parallax carousel: Embla init + autoplay + tween + nav + load fade */
export const useParallaxCarousel = (): ParallaxCarousel => {
  /* dragFree omitted (default false): a drag snaps one slide per gesture, matching the arrow step */
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  /* gate visibility until Embla centers the slides, avoiding the SSR load-time position jump */
  const [ready, setReady] = useState(false);

  useParallaxTween(emblaApi);
  const dotButton = useDotButton(emblaApi);
  const prevNextButtons = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (!emblaApi) return;
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, [emblaApi]);

  return { emblaRef, ready, ...dotButton, ...prevNextButtons };
};
