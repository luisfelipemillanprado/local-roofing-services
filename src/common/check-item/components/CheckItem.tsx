import { Check } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { CheckItemProps } from "@/common/check-item/types";

export const CheckItem = ({ text, tone, as: Tag = "li" }: CheckItemProps) => (
  <Tag className="flex items-center gap-3">
    <span className="grid shrink-0 place-items-center rounded-full bg-primary p-1 text-white">
      <Check className="size-3" strokeWidth={3} />
    </span>
    <Text as="span" size="body" tone={tone} text={text} />
  </Tag>
);
