import type { ProductSplitProps } from "@/common/product-split/types";

/* product split band: gallery left, heading/points/stats/action right */
export const ProductSplit = ({ media, heading, points, stats, action, footer }: ProductSplitProps) => (
  <div className="grid items-center gap-13 lg:grid-cols-2">
    {/* gallery side */}
    {media}
    {/* copy side */}
    <div className="grid gap-7 text-center lg:text-left">
      {heading}
      {points}
      {/* stats and action take extra top margin beyond the gap for progressive spacing */}
      <div className="mt-2">{stats}</div>
      <div className="mt-2.5">{action}</div>
      {footer}
    </div>
  </div>
);
