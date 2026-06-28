import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import type { StatsRowProps } from "@/common/about/types";

/* About stats row: number + label per item, bordered grid. */
export const StatsRow = ({ items }: StatsRowProps) => (
  <div className="grid grid-cols-3 gap-4 border-y border-line py-6">
    {items.map((item) => (
      <div key={item.key}>
        <TextNumber as="p" size="headline" text={item.value} />
        <div className="mt-1">
          <Text size="label" tone="muted" text={item.label} />
        </div>
      </div>
    ))}
  </div>
);
