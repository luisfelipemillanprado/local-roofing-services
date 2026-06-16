"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";
import { company } from "@/data/site";
import { Button } from "@/common/button/components/atoms/Button";

type NavLink = { label: string; href: string };

type MobileMenuProps = {
  navLinks: NavLink[];
  toggleMenuLabel: string;
  getQuoteLabel: string;
};

/** Mobile-only menu: trigger button + floating panel, with open/close behavior
 *  (toggle, click-outside, Escape). Isolated client island so the navbar shell
 *  can stay a server component. */
export function MobileMenu({ navLinks, toggleMenuLabel, getQuoteLabel }: MobileMenuProps) {
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
          "absolute inset-x-0 top-full z-50 px-5 transition duration-300 lg:hidden",
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <div className="rounded-2xl border border-line bg-surface p-4 shadow-soft">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-fg transition-colors hover:bg-surface-2 hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
            <a
              href={company.phoneHref}
              className="flex items-center gap-2 px-1 text-sm font-semibold text-fg"
            >
              <Phone className="size-4 text-primary" />
              {company.phone}
            </a>
            <Button href="#contact" variant="primary" className="w-full">
              {getQuoteLabel}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
