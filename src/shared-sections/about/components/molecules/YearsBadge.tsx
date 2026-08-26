import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import type { YearsBadgeProps } from "@/shared-sections/about/types";

/* About experience badge: years number + two label lines */
export const YearsBadge = ({ value, line1, line2 }: YearsBadgeProps) => (
  <div className="theme-dark grid rounded-2xl bg-primary p-3 shadow-lg sm:p-4">
    <div className="grid gap-1.5 text-center">
      <TextNumber as="p" size="display" text={value} />
      <Text as="p" size="caption" tone="default" weight="bold" tracking="subtle" text={line1} />
      <Text as="p" size="caption" tone="default" weight="bold" tracking="subtle" text={line2} />
    </div>
  </div>
);
