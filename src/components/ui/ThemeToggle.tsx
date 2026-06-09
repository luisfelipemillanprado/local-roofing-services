"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useContent } from "@/i18n/provider";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { ui } = useContent();
  const [mounted, setMounted] = useState(false);

  // Defer theme-dependent rendering until mounted to avoid hydration mismatch.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label={ui.toggleTheme}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`grid size-9 place-items-center rounded-full border border-[var(--border)] bg-[var(--surface-2)] text-[var(--fg)] transition-colors hover:text-[var(--color-primary)] ${className}`}
    >
      {mounted ? (
        isDark ? <Sun className="size-4" /> : <Moon className="size-4" />
      ) : (
        <span className="size-4" />
      )}
    </button>
  );
}
