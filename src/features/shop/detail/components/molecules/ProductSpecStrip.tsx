import { Text } from "@/common/text/components/Text";
import type { ProductSpecProps } from "@/features/shop/detail/types";

/* fact row under the price; same bare panel finish as the about stats row */
export const ProductSpecStrip = ({ rows }: ProductSpecProps) => (
  /* rules only once the four facts share one row, or cell two's rule hangs at the edge */
  <dl className="grid grid-cols-2 gap-y-4 rounded-panel border border-line py-4 sm:grid-cols-4 sm:divide-x sm:divide-line lg:py-5.5">
    {rows.map(({ key, label, value }) => (
      <div key={key} className="grid gap-1.5 px-4">
        {/* label loud over the value; the quiet line matches the about stat row */}
        <dt>
          <Text as="span" size="subhead" weight="bold" text={label} />
        </dt>
        <dd>
          <Text as="span" size="caption" tone="muted" weight="bold" text={value} />
        </dd>
      </div>
    ))}
  </dl>
);
