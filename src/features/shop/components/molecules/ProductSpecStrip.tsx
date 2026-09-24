import { Text } from "@/common/text/components/Text";
import type { ProductSpecStripProps } from "@/features/shop/types";

/* fact row under the price; same bare panel finish as the about stats row */
export const ProductSpecStrip = ({ rows }: ProductSpecStripProps) => (
  /* rules only once the four facts share a single row, or the second row gets a stray one */
  <dl className="grid grid-cols-2 gap-y-4 rounded-panel border border-line py-4 sm:grid-cols-4 sm:divide-x sm:divide-line lg:py-5.5">
    {rows.map(({ key, label, value }) => (
      <div key={key} className="grid gap-1.5 px-4">
        {/* top and bottom carry the about stat styling: lead line loud, support line quiet */}
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
