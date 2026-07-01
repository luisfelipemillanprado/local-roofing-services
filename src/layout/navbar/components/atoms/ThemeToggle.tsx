"use client";

import { Moon, Sun } from "lucide-react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("navbar");

  /* Default is dark → treat unknown/pre-mount as dark (show Sun). */
  const isDark = resolvedTheme !== "light";

  return (
    <button
      type="button"
      aria-label={t("toggleTheme")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="group grid size-10 place-items-center rounded-2xl border border-line bg-surface-muted"
    >
      {isDark ? (
        <Sun className="size-4.5 text-foreground transition-colors group-hover:text-primary" />
      ) : (
        <Moon className="size-4.5 text-foreground transition-colors group-hover:text-primary" />
      )}
    </button>
  );
};
