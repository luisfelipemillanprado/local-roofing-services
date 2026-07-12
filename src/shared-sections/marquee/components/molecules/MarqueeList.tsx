import { CloudRain, ShieldCheck, Award, Hammer, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { MarqueeIconKey, MarqueeListProps } from "@/shared-sections/marquee/types";

/* semantic key → icon component */
const ICONS: Record<MarqueeIconKey, LucideIcon> = {
  storm: CloudRain,
  shield: ShieldCheck,
  award: Award,
  hammer: Hammer,
  wrench: Wrench,
};

/* four copies: the -50% loop only restarts on a copy boundary with an even count */
export const MarqueeList = ({ items }: MarqueeListProps) => (
  <div className="grid w-max animate-marquee grid-flow-col items-center justify-start">
    {[0, 1, 2, 3].map((copy) => (
      /* only the first copy is exposed to screen readers */
      <div
        key={copy}
        aria-hidden={copy > 0 || undefined}
        className="grid grid-flow-col items-center justify-start"
      >
        {items.map(({ key, icon, label }) => {
          const Icon = ICONS[icon];
          return (
            <div key={key} className="grid grid-flow-col items-center justify-start gap-3 px-8">
              <Icon className="size-5 text-white opacity-90" />
              <span className="whitespace-nowrap">
                <Text as="span" size="caption" tone="white" weight="bold" tracking="wide" text={label} />
              </span>
              <span className="ml-8 size-1.5 rounded-full bg-white/50" />
            </div>
          );
        })}
      </div>
    ))}
  </div>
);
