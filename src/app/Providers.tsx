"use client";

import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export interface ProvidersProps {
  children: ReactNode;
  /* Forwarded to next-themes' ThemeProvider */
  themeProps?: ThemeProviderProps;
}

/* Above [locale]: theme survives locale switch */
export const Providers = ({ children, themeProps }: ProvidersProps) => {
  return <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>;
};
