"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Theme provider built on next-themes (the recommended library). It injects its
 * own anti-flash script and handles persistence + system preference.
 *
 * `disableTransitionOnChange` suppresses CSS transitions during the theme swap,
 * which prevents the repaint/compositing glitches seen on mobile GPUs when every
 * color token changes at once.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
