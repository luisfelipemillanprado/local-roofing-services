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

/**
 * App-wide client providers. Mounted in the root layout (above the `[locale]`
 * segment) so next-themes never remounts on a locale change — which is what
 * prevents the brief flash of the opposite theme when switching languages.
 */
export const Providers = ({ children, themeProps }: ProvidersProps) => {
  return <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>;
};
