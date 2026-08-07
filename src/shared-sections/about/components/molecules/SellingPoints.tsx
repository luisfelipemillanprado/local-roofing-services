import { CheckItem } from "@/common/check-item/components/CheckItem";
import type { SellingPointsProps } from "@/shared-sections/about/types";

/* About selling points: left-aligned check-list */
export const SellingPoints = ({ items }: SellingPointsProps) => (
  <div className="grid justify-start gap-3">
    {items.map((item) => (
      <CheckItem key={item.key} as="div" tone="default" text={item.text} />
    ))}
  </div>
);
