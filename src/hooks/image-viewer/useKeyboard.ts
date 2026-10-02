"use client";

import { useEffect } from "react";
import type { ViewerKeys } from "@/common/image-viewer/types";

/* viewer keys on the window: escape closes, arrows step the track */
export const useKeyboard = ({ onClose, onPrev, onNext }: ViewerKeys) => {
  /* named options, so the three identical signatures cannot be passed in the wrong order */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowLeft") onPrev();
      else if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);
};
