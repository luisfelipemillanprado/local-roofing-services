import { Text } from "@/common/text/components/Text";
import type { ProductSpecTableProps } from "@/features/shop/types";

/* spec sheet rows; label left, value right, ruled between rows */
export const ProductSpecTable = ({ rows }: ProductSpecTableProps) => (
  <dl className="grid">
    {rows.map(({ key, label, value }) => (
      <div key={key} className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-line py-3">
        <dt>
          <Text as="span" size="body" tone="muted" text={label} />
        </dt>
        <dd>
          <Text as="span" size="body" weight="semibold" text={value} />
        </dd>
      </div>
    ))}
  </dl>
);
