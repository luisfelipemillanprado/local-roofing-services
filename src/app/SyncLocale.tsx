// components/SyncLocale.tsx
"use client";

import { useEffect } from "react";

export const SyncLocale = ({ locale }: { locale: string }) => {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
