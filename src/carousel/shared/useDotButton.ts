import { useCallback, useEffect, useState } from "react";
import type { EmblaApi, UseDotButtonType } from "@/carousel/types";

/* faithful port of the Embla v9 sandbox useDotButton */
export const useDotButton = (emblaApi: EmblaApi | undefined): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.goTo(index);
    },
    [emblaApi],
  );

  const onInit = useCallback((api: EmblaApi) => {
    setScrollSnaps(api.snapList());
  }, []);

  const onSelect = useCallback((api: EmblaApi) => {
    setSelectedIndex(api.selectedSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    /* deviation: defer the initial sync a frame (project lint forbids sync set-state in effects) */
    requestAnimationFrame(() => {
      onInit(emblaApi);
      onSelect(emblaApi);
    });

    emblaApi.on("reinit", onInit).on("reinit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return { selectedIndex, scrollSnaps, onDotButtonClick };
};
