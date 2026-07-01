"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { Link } from "@/i18n/navigation";
import { Text } from "@/common/text/components/Text";
import type { NavDropdownProps } from "@/layout/navbar/types";

/* Desktop "See More": toggles a dropdown of grouped links. */
export const NavDropdown = ({ label, links }: NavDropdownProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  /* Close on outside click or Escape. */
  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setIsOpen(false);
    };
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [isOpen]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className="grid grid-flow-col items-center gap-1 rounded-full px-3.5 py-2"
      >
        <Text as="span" size="body" tone="muted" weight="medium" text={label} />
        <ChevronDown
          className={clsx("size-4 text-foreground-muted transition-transform", isOpen && "rotate-180")}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 mt-2 min-w-48 -translate-x-1/2 rounded-2xl border border-line bg-surface-panel p-2 shadow-lg shadow-shade/40">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-xl px-4 py-2.5 transition-colors hover:bg-surface-muted"
            >
              <Text as="span" size="body" tone="muted" weight="medium" text={link.label} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
