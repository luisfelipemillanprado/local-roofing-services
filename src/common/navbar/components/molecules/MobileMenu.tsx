"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Home, Info, Wrench, Hammer, Tag, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";
import type { MobileMenuProps } from "@/common/navbar/types";

/** Icon per nav destination (keyed by href, falls back to Home). */
const ICONS: Record<string, LucideIcon> = {
  "/": Home,
  "/about": Info,
  "/services": Wrench,
  "/projects": Hammer,
  "/#pricing": Tag,
  "/#contact": Phone,
};

/** Mobile-only menu: trigger button + full-width floating panel of link
 *  buttons, with open/close behavior (toggle, click-outside, Escape). Isolated
 *  client island so the navbar shell can stay a server component. */
export function MobileMenu({ navLinks, toggleMenuLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Listeners only while open; the opening click finishes before this runs, so
  // it never self-closes.
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (triggerRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-label={toggleMenuLabel}
        onClick={() => setOpen((v) => !v)}
        className="grid size-11 place-items-center rounded-xl bg-ink text-white lg:hidden"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <div
        ref={panelRef}
        className={clsx(
          "absolute inset-x-0 top-full z-50 bg-surface/95 px-4 pb-6 pt-3 shadow-soft transition duration-300 backdrop-blur-lg lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav className="grid grid-cols-3 gap-3">
          {navLinks.map((link) => {
            const Icon = ICONS[link.href] ?? Home;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-surface-2 px-2 py-5 text-center text-sm font-semibold text-fg transition-colors hover:bg-primary hover:text-white"
              >
                <Icon className="size-6 text-primary" aria-hidden />
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
