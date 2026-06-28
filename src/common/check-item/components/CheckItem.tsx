import { Check } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { CheckItemProps } from "@/common/check-item/types";

/* Check-list item: check icon + text. */
export const CheckItem = ({ text, tone, as: Tag = "li" }: CheckItemProps) => (
  <Tag className="grid grid-cols-[auto_1fr] items-center gap-3 text-left">
    <span className="grid place-items-center rounded-full bg-primary p-1">
      <Check className="size-3 text-white" strokeWidth={3} />
    </span>
    <Text as="span" size="body" tone={tone} text={text} truncate />
  </Tag>
);
