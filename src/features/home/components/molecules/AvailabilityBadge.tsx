import { LiveDot } from "@/common/animations/components/LiveDot";
import { Text } from "@/common/text/components/Text";
import type { AvailabilityBadgeProps } from "@/features/home/types";

/* Hero availability badge: dot + service label. */
export const AvailabilityBadge = ({ label }: AvailabilityBadgeProps) => (
  <div className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-1.5 backdrop-blur-md">
    <LiveDot />
    <div className="min-w-0">
      <Text size="note" tone="white" weight="semibold" tracking="wide" truncate text={label} />
    </div>
  </div>
);
