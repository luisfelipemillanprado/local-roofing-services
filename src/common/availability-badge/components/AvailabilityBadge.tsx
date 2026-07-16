import { LiveDot } from "@/common/animations/components/LiveDot";
import { Text } from "@/common/text/components/Text";
import type { AvailabilityBadgeProps } from "@/common/availability-badge/types";

/* availability badge: live dot + service label */
export const AvailabilityBadge = ({ label }: AvailabilityBadgeProps) => (
  <div className="inline-grid max-w-full grid-cols-[auto_minmax(0,1fr)] items-center gap-2 rounded-2xl border border-white/20 bg-white/5 px-4 py-2">
    <LiveDot />
    <Text size="note" tone="white" weight="semibold" tracking="wide" truncate text={label} />
  </div>
);
