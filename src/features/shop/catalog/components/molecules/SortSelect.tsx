import { ChevronDown, Funnel } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { ShopSort, SortSelectProps } from "@/features/shop/catalog/types";

/* results sort: the native select with its picker restyled, the shell drawing the chevron */
export const SortSelect = ({ label, value, options, onChange }: SortSelectProps) => (
  <label className="grid grid-flow-col items-center justify-start gap-3">
    <Text as="span" size="body" tone="muted" text={label} />
    {/* the select is the whole box, so every pixel of it opens the picker */}
    <span className="relative">
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as ShopSort)}
        className="sort-select rounded-xl bg-surface-panel py-4 pr-11 pl-13 leading-6 text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* both ride on top of the control, inert, so they never steal the click */}
      <Funnel className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-foreground-muted" />
      <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-5 -translate-y-1/2 text-foreground-muted" />
    </span>
  </label>
);
