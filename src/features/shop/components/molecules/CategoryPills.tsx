import { Text } from "@/common/text/components/Text";
import type { CategoryPillsProps } from "@/features/shop/types";

/* top category chips: single-select, horizontally scrollable */
export const CategoryPills = ({ pills, active, onSelect }: CategoryPillsProps) => (
  <div className="flex gap-2.5 overflow-x-auto pb-1">
    {pills.map(({ value, label, icon: Icon }) => {
      const selected = active === value;
      return (
        <button
          key={value}
          type="button"
          aria-pressed={selected}
          onClick={() => onSelect(value)}
          className={`inline-grid grid-flow-col items-center justify-start gap-2 rounded-full border px-4 py-2 whitespace-nowrap transition-colors ${
            selected ? "border-primary bg-primary" : "border-line bg-surface-panel hover:border-primary"
          }`}
        >
          <Icon className={`size-4 ${selected ? "text-white" : "text-primary"}`} />
          <Text as="span" size="body" weight="semibold" tone={selected ? "white" : "default"} text={label} />
        </button>
      );
    })}
  </div>
);
