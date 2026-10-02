"use client";

import { useEffect } from "react";

/* holds the page still while a modal is mounted; restores whatever the page had */
export const useScrollLock = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
};
