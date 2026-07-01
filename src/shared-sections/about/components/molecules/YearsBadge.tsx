import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import type { YearsBadgeProps } from "@/shared-sections/about/types";

/* About experience badge: years number + two label lines. */
export const YearsBadge = ({ value, line1, line2 }: YearsBadgeProps) => (
  <div className="theme-dark grid size-29 place-items-center rounded-2xl bg-primary shadow-lg sm:size-32">
    <div className="grid gap-1.5 text-center">
      <TextNumber as="p" size="display" text={value} />
      <Text as="p" size="note" tone="default" weight="bold" text={line1} />
      <Text as="p" size="note" tone="default" weight="bold" text={line2} />
    </div>
  </div>
);
