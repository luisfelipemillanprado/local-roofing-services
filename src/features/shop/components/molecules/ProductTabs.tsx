import { Text } from "@/common/text/components/Text";
import type { ProductTabsProps } from "@/features/shop/types";

/* tabbed panel: Details / Reviews / Shipping (placeholder bodies) */
export const ProductTabs = ({ tabs, active, onSelect }: ProductTabsProps) => (
  <div className="grid gap-6">
    <div className="flex flex-wrap gap-8 border-b border-line">
      {tabs.map(({ key, label }) => (
        <button
          key={key}
          type="button"
          onClick={() => onSelect(key)}
          className={`-mb-px border-b-2 pb-3 transition-colors ${
            active === key ? "border-primary" : "border-transparent"
          }`}
        >
          <Text
            as="span"
            size="body"
            weight="semibold"
            tone={active === key ? "default" : "muted"}
            text={label}
          />
        </button>
      ))}
    </div>
    <div className="max-w-3xl">
      <Text size="lead" tone="muted" text={tabs.find((item) => item.key === active)?.body ?? ""} />
    </div>
  </div>
);
