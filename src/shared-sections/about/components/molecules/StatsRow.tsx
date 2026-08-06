import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import type { StatsRowProps } from "@/shared-sections/about/types";

/* About stats row: number + label per item, framed with column dividers. */
export const StatsRow = ({ items }: StatsRowProps) => (
  <div className="grid grid-cols-3 divide-x divide-line rounded-[1.25rem] border border-line py-4 lg:py-6">
    {items.map((item) => (
      <div key={item.key} className="grid gap-1.5 px-4">
        <TextNumber as="p" size="headline" text={item.value} />
        <Text size="note" tone="muted" weight="bold" text={item.label} />
      </div>
    ))}
  </div>
);
