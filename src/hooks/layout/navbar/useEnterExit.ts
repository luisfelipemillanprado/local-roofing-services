"use client";

import { useEffect, useRef, useState } from "react";

/* two flags for one panel: isVisible mounts it, isOpen drives the transition */
export const useEnterExit = (durationMs: number) => {
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  /* mount, then open next frame for the enter transition */
  const open = () => {
    if (isOpen) return;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsVisible(true);
    requestAnimationFrame(() => setIsOpen(true));
  };

  /* play exit transition, then unmount */
  const close = () => {
    if (!isOpen) return;
    setIsOpen(false);
    closeTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      closeTimeoutRef.current = null;
    }, durationMs);
  };

  /* clear pending close timeout on unmount */
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return { isOpen, isVisible, open, close };
};
