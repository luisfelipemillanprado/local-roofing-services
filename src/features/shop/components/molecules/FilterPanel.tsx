"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import { FilterGroup } from "@/features/shop/components/molecules/FilterGroup";
import type { FilterPanelProps, ShopFilters } from "@/features/shop/types";

const EMPTY: ShopFilters = { brands: [], price: "all", rating: "0", availability: [] };

/* count of applied filters, for the button badge */
const countActive = (f: ShopFilters) =>
  f.brands.length + f.availability.length + (f.price !== "all" ? 1 : 0) + (f.rating !== "0" ? 1 : 0);

/* Filter button + anchored popover; edits a draft, commits on Apply */
export const FilterPanel = ({
  label,
  clearLabel,
  applyLabel,
  brandTitle,
  brandOptions,
  priceTitle,
  priceOptions,
  ratingTitle,
  ratingOptions,
  availabilityTitle,
  availabilityOptions,
  value,
  onApply,
}: FilterPanelProps) => {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState<ShopFilters>(value);
  const ref = useRef<HTMLDivElement>(null);

  /* close on outside click or Escape */
  useEffect(() => {
    if (!open) return;
    const onDown = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const openPanel = () => {
    setDraft(value) /* sync draft to committed */;
    setOpen(true);
  };

  const toggleArray = (key: "brands" | "availability") => (option: string) =>
    setDraft((d) => ({
      ...d,
      [key]: d[key].includes(option) ? d[key].filter((v) => v !== option) : [...d[key], option],
    }));

  const active = countActive(value);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => (open ? setOpen(false) : openPanel())}
        className="grid grid-flow-col items-center justify-start gap-2 rounded-full border border-line bg-surface-panel px-4 py-2 transition-colors hover:border-primary"
      >
        <SlidersHorizontal className="size-4 text-primary" />
        <Text as="span" size="body" weight="semibold" text={label} />
        {active > 0 && (
          <span className="grid size-5 place-items-center rounded-full bg-primary">
            <Text as="span" size="caption" weight="bold" tone="white" text={`${active}`} />
          </span>
        )}
        <ChevronDown
          className={`size-4 text-foreground-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 z-(--z-dropdown) mt-2 grid w-80 gap-5 rounded-panel border border-line bg-surface-panel p-5 shadow-lg">
          <FilterGroup
            title={brandTitle}
            options={brandOptions}
            selected={draft.brands}
            onToggle={toggleArray("brands")}
            variant="check"
          />
          <FilterGroup
            title={priceTitle}
            options={priceOptions}
            selected={[draft.price]}
            onToggle={(v) => setDraft((d) => ({ ...d, price: v }))}
            variant="radio"
          />
          <FilterGroup
            title={ratingTitle}
            options={ratingOptions}
            selected={[draft.rating]}
            onToggle={(v) => setDraft((d) => ({ ...d, rating: v }))}
            variant="radio"
          />
          <FilterGroup
            title={availabilityTitle}
            options={availabilityOptions}
            selected={draft.availability}
            onToggle={toggleArray("availability")}
            variant="check"
          />

          <div className="grid grid-cols-2 gap-3 border-t border-line pt-4">
            <button
              type="button"
              onClick={() => setDraft(EMPTY)}
              className="rounded-full border border-line py-2.5 transition-colors hover:border-primary"
            >
              <Text as="span" size="body" weight="semibold" tone="muted" text={clearLabel} />
            </button>
            <button
              type="button"
              onClick={() => {
                onApply(draft);
                setOpen(false);
              }}
              className="rounded-full bg-secondary py-2.5"
            >
              <Text as="span" size="body" weight="semibold" tone="white" text={applyLabel} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
