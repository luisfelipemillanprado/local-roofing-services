import { useCallback, useEffect, useState } from "react";
import type { EmblaApi, UsePrevNextButtonsType } from "@/carousel/types";

/* faithful port of the Embla v9 sandbox usePrevNextButtons */
export const usePrevNextButtons = (emblaApi: EmblaApi | undefined): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.goToPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.goToNext();
  }, [emblaApi]);

  const onSelect = useCallback((api: EmblaApi) => {
    setPrevBtnDisabled(!api.canGoToPrev());
    setNextBtnDisabled(!api.canGoToNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    /* deviation: defer the initial sync a frame (project lint forbids sync set-state in effects) */
    requestAnimationFrame(() => onSelect(emblaApi));

    emblaApi.on("reinit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick };
};
