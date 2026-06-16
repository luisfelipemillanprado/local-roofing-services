"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Menu, X, Home, Info, Wrench, Hammer, Tag, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";
import type { MobileMenuProps, NavLinkIcon } from "@/common/navbar/types";

// Exit animation duration (matches the panel's duration-500).
const ANIMATION_MS = 500;

// Semantic icon key → icon component.
const ICONS: Record<NavLinkIcon, LucideIcon> = {
  home: Home,
  about: Info,
  services: Wrench,
  projects: Hammer,
  pricing: Tag,
  contact: Phone,
};

// Mobile-only menu: trigger + full-screen overlay of link buttons.
export function MobileMenu({ navLinks, toggleMenuLabel }: MobileMenuProps) {
  const menuId = "mobile-menu";
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mount, then open next frame so the enter transition runs.
  const handleOpenOptions = () => {
    if (isOpen) return;
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsVisible(true);
    requestAnimationFrame(() => setIsOpen(true));
  };

  // Play exit transition, then unmount after it finishes.
  const handleCloseOptions = () => {
    if (!isOpen) return;
    setIsOpen(false);
    closeTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
      closeTimeoutRef.current = null;
    }, ANIMATION_MS);
  };

  // Clear pending close timeout on unmount.
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  // Keep clicks inside the panel from closing via the overlay.
  const handlePropagateOptions = (e: MouseEvent) => e.stopPropagation();

  return (
    <>
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={toggleMenuLabel}
        onClick={isOpen ? handleCloseOptions : handleOpenOptions}
        className="grid size-11 place-items-center rounded-xl bg-ink text-white lg:hidden"
      >
        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {isVisible && (
        <div
          onClick={handleCloseOptions}
          className={clsx(
            "fixed inset-x-0 top-18 z-50 h-dvh transition-colors duration-150 lg:hidden",
            isOpen ? "bg-ink/70 backdrop-blur-md" : "bg-transparent",
          )}
        >
          <div
            role="dialog"
            id={menuId}
            onClick={handlePropagateOptions}
            className={clsx(
              "bg-surface/95 shadow-lg shadow-ink/40 transition-all duration-500 ease-in-out",
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
            )}
          >
            <nav className="grid grid-cols-3 gap-3 px-4 pb-6 pt-4">
              {navLinks.map((link) => {
                const Icon = ICONS[link.icon];
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleCloseOptions}
                    className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-line bg-surface-2 px-2 py-5 text-center text-sm font-semibold text-fg transition-colors hover:bg-primary hover:text-white"
                  >
                    <Icon className="size-6 text-primary" aria-hidden />
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
