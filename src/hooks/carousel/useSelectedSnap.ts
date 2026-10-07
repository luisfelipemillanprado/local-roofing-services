import { useCallback, useEffect, useState } from "react";
import type { EmblaApi } from "@/carousel/types";

/* which slide is showing; the viewer reads it for the caption and to dim the neighbours */
export const useSelectedSnap = (emblaApi: EmblaApi | undefined, startSnap = 0) => {
  const [selectedIndex, setSelectedIndex] = useState(startSnap);

  const onSelect = useCallback((api: EmblaApi) => setSelectedIndex(api.selectedSnap()), []);

  useEffect(() => {
    if (!emblaApi) return;
    /* defer initial sync a frame (lint bans sync set-state) */
    const raf = requestAnimationFrame(() => onSelect(emblaApi));
    emblaApi.on("reinit", onSelect).on("select", onSelect);
    return () => {
      cancelAnimationFrame(raf);
      emblaApi.off("reinit", onSelect).off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return selectedIndex;
};
