import { MapPin } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { AreaCardProps } from "@/shared-sections/service-areas/types";

/* informative area tile: location marker beside city over county (not a link) */
export const AreaCard = ({ name, county }: AreaCardProps) => (
  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3.5 rounded-2xl border border-line bg-surface-panel px-5 py-4 shadow-sm">
    <MapPin className="size-5 text-primary" />
    <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-2">
      <Text as="span" size="body" weight="semibold" text={`${name},`} />
      <Text as="span" size="note" tone="muted" truncate text={county} />
    </div>
  </div>
);
