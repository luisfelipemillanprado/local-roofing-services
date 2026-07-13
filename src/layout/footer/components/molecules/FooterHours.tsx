import { Text } from "@/common/text/components/Text";
import type { FooterHoursProps } from "@/layout/footer/types";

/* opening-hours rows: day left, time right; a centered narrow block until lg */
export const FooterHours = ({ rows }: FooterHoursProps) => (
  <div className="mx-auto grid w-full max-w-xs gap-2 lg:mx-0 lg:max-w-none">
    {rows.map((row) => (
      <div key={row.key} className="grid grid-flow-col items-center justify-between gap-4">
        <Text as="span" size="body" tone="muted" text={row.day} />
        <Text as="span" size="body" tone="muted" weight="medium" text={row.time} />
      </div>
    ))}
  </div>
);
