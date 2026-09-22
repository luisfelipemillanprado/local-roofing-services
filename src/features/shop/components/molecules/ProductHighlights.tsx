import { CircleCheck } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { ProductHighlightsProps } from "@/features/shop/types";

/* selling points under the description; one ticked line each */
export const ProductHighlights = ({ items }: ProductHighlightsProps) => (
  <ul className="grid gap-3">
    {items.map((item) => (
      <li key={item} className="grid grid-cols-[auto_1fr] items-start gap-2.5">
        <CircleCheck aria-hidden className="mt-0.5 size-4.5 text-primary" />
        <Text as="span" size="caption" text={item} />
      </li>
    ))}
  </ul>
);
