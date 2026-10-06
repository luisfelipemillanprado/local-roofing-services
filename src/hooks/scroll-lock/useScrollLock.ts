"use client";

import { useEffect } from "react";

/* holds the page still while a panel covers it; restores whatever the page had */
export const useScrollLock = (enabled = true) => {
  /* a panel that outlives its open state passes the flag; one that mounts on open needs no argument */
  useEffect(() => {
    if (!enabled) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [enabled]);
};
