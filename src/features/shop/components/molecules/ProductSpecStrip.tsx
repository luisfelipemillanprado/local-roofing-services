import { Text } from "@/common/text/components/Text";
import type { ProductSpecStripProps } from "@/features/shop/types";

/* fact row under the price; column count follows the rows the product actually has */
export const ProductSpecStrip = ({ rows }: ProductSpecStripProps) => (
  <dl className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-card border border-line bg-surface-panel px-5 py-4 sm:grid-cols-4">
    {rows.map(({ key, label, value }) => (
      <div key={key} className="grid gap-1">
        <dt>
          <Text as="span" size="note" tone="muted" text={label} />
        </dt>
        <dd>
          <Text as="span" size="caption" weight="semibold" text={value} />
        </dd>
      </div>
    ))}
  </dl>
);
