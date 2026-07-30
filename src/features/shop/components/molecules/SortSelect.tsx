import { Text } from "@/common/text/components/Text";
import type { ShopSort, SortSelectProps } from "@/features/shop/types";

/* results sort: native select styled to the site */
export const SortSelect = ({ label, value, options, onChange }: SortSelectProps) => (
  <label className="inline-grid grid-flow-col items-center justify-start gap-2.5">
    <Text as="span" size="body" tone="muted" text={label} />
    <select
      value={value}
      onChange={(event) => onChange(event.target.value as ShopSort)}
      className="rounded-full border border-line bg-surface-panel px-4 py-2 text-foreground outline-none focus:border-primary"
    >
      {options.map(({ value: optionValue, label: optionLabel }) => (
        <option key={optionValue} value={optionValue}>
          {optionLabel}
        </option>
      ))}
    </select>
  </label>
);
