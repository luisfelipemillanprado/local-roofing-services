import { CloudLightning, ShieldCheck, Award, Factory, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import type { MarqueeIconKey, MarqueeListProps } from "@/shared-sections/marquee/types";

/* semantic key → icon component */
const ICONS: Record<MarqueeIconKey, LucideIcon> = {
  storm: CloudLightning,
  shield: ShieldCheck,
  award: Award,
  strong: Factory,
  wrench: Wrench,
};

/* repeated tracks keep the -50% loop seamless */
export const MarqueeList = ({ items, copies }: MarqueeListProps) => (
  <div className="grid w-max animate-marquee grid-flow-col items-center justify-start">
    {Array.from({ length: copies }, (_, copy) => (
      /* only the first copy is exposed to screen readers */
      <div key={copy} aria-hidden={copy > 0} className="grid grid-flow-col items-center justify-start">
        {items.map(({ key, icon, label }) => {
          const Icon = ICONS[icon];
          return (
            <div key={key} className="grid grid-flow-col items-center justify-start gap-3 px-6">
              <Icon className="size-5 text-white" />
              <span className="whitespace-nowrap">
                <Text as="span" size="caption" tone="white" weight="bold" tracking="wide" text={label} />
              </span>
              <span className="ml-7 size-1.5 rounded-full bg-white/50" />
            </div>
          );
        })}
      </div>
    ))}
  </div>
);
