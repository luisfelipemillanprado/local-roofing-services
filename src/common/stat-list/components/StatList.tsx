import clsx from "clsx";
import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import type { StatListProps } from "@/common/stat-list/types";

/* stats: 2-col grid; 4-up uses the desktop 2x2 from sm */
export const StatList = ({ stats }: StatListProps) => (
  <div
    className={clsx(
      "grid grid-cols-2 justify-items-center gap-5 sm:gap-y-7 lg:gap-y-5",
      stats.length === 4
        ? "sm:justify-items-start [&>*:first-child]:col-span-2 sm:[&>*:first-child]:col-span-1 [&>*:last-child]:hidden sm:[&>*:last-child]:grid"
        : "lg:justify-items-start [&>*:first-child]:col-span-2 lg:[&>*:first-child]:col-span-1 lg:[&>*:last-child]:col-span-2",
    )}
  >
    {stats.map(({ key, icon, value, label }) => (
      <div key={key} className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
        <IconBadge icon={icon} size="stat" tone="panel" />
        <div className="grid min-w-0">
          <TextNumber as="p" size="stat" text={value} />
          {/* exception: label kept truncating in the narrow mobile columns, by choice */}
          <Text size="caption" tone="muted" text={label} truncate />
        </div>
      </div>
    ))}
  </div>
);
