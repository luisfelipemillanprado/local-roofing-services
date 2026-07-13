import { CheckItem } from "@/common/check-item/components/CheckItem";
import type { SellingPointsProps } from "@/shared-sections/about/types";

/* About selling points: check-list, group centered until lg, left-aligned from lg. */
export const SellingPoints = ({ items }: SellingPointsProps) => (
  <div className="grid w-full justify-center gap-3 lg:justify-start">
    {items.map((item) => (
      <CheckItem key={item.key} as="div" tone="default" text={item.text} />
    ))}
  </div>
);
