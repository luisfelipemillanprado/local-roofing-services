"use client";

import type { ReactNode } from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export interface ProvidersProps {
  children: ReactNode;
  /** Props forwarded to next-themes' ThemeProvider (attribute, defaultTheme, …). */
  themeProps?: ThemeProviderProps;
}

/** App-wide client providers; mounted above [locale] so the theme survives locale changes. */
export const Providers = ({ children, themeProps }: ProvidersProps) => {
  return <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>;
};
