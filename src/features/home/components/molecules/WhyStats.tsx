import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import type { WhyStatsProps } from "@/features/home/types";

/* Why-choose stats: centered 2-col grid, first full-width */
export const WhyStats = ({ stats }: WhyStatsProps) => (
  <div className="grid grid-cols-2 justify-items-center gap-6 [&>*:first-child]:col-span-2">
    {stats.map(({ key, icon, value, label }) => (
      <div key={key} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
        <IconBadge icon={icon} size="stat" tone="muted" />
        <div className="grid min-w-0">
          <TextNumber as="p" size="stat" text={value} />
          <Text size="note" tone="muted" text={label} truncate />
        </div>
      </div>
    ))}
  </div>
);
