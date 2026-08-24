import { useCallback, useEffect, useState } from "react";
import type { EmblaApi, CarouselDots } from "@/carousel/types";

/* active snap + snap list for the dot indicator */
export const useCarouselDots = (emblaApi: EmblaApi | undefined): CarouselDots => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onInit = useCallback((api: EmblaApi) => setScrollSnaps(api.snapList()), []);
  const onSelect = useCallback((api: EmblaApi) => setSelectedIndex(api.selectedSnap()), []);

  useEffect(() => {
    if (!emblaApi) return;
    /* defer initial sync a frame (lint bans sync set-state) */
    const raf = requestAnimationFrame(() => {
      onInit(emblaApi);
      onSelect(emblaApi);
    });
    emblaApi.on("reinit", onInit).on("reinit", onSelect).on("select", onSelect);
    return () => {
      cancelAnimationFrame(raf);
      emblaApi.off("reinit", onInit).off("reinit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps };
};
