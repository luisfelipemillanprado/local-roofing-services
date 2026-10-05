import { ChevronDown, Funnel } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { ShopSort, SortSelectProps } from "@/features/shop/catalog/types";

/* results sort: the native select with its picker restyled, the shell drawing the chevron */
export const SortSelect = ({ label, value, options, onChange }: SortSelectProps) => (
  <label className="grid grid-flow-col items-center justify-start gap-3">
    <Text as="span" size="body" tone="muted" text={label} />
    {/* same shell as the search bar: the icons sit outside the control, all in one box */}
    <span className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-xl bg-surface-panel py-4 pr-4 pl-5">
      <Funnel className="size-5 text-foreground-muted" />
      <select
        value={value}
        onChange={(event) => onChange(event.target.value as ShopSort)}
        className="sort-select w-full bg-transparent text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="size-5 text-foreground-muted" />
    </span>
  </label>
);
