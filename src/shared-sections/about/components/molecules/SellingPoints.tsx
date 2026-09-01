import { CheckItem } from "@/common/check-item/components/CheckItem";
import type { SellingPointsProps } from "@/shared-sections/about/types";

/* About selling points: left-aligned check-list */
export const SellingPoints = ({ items }: SellingPointsProps) => (
  <ul className="grid justify-start gap-4 sm:ml-5 lg:ml-0">
    {items.map((item) => (
      <CheckItem key={item.key} tone="default" text={item.text} />
    ))}
  </ul>
);
