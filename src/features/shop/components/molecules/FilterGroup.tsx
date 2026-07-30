import { Text } from "@/common/text/components/Text";
import type { FilterGroupProps } from "@/features/shop/types";

/* one filter block: title over a checkbox/radio option list with optional counts */
export const FilterGroup = ({ title, options, selected, onToggle, variant }: FilterGroupProps) => (
  <fieldset className="grid gap-3">
    <legend className="mb-1">
      <Text as="span" size="note" weight="semibold" tone="muted" tracking="wide" text={title} />
    </legend>
    {options.map(({ value, label, count }) => (
      <label key={value} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5">
        <input
          type={variant === "radio" ? "radio" : "checkbox"}
          name={title}
          checked={selected.includes(value)}
          onChange={() => onToggle(value)}
          className="size-4 accent-primary"
        />
        <Text as="span" size="body" tone="default" text={label} />
        {count !== undefined && <Text as="span" size="caption" tone="muted" text={`${count}`} />}
      </label>
    ))}
  </fieldset>
);
