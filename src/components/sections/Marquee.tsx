"use client";

import { useTranslations } from "next-intl";
import { featureRotatorMeta } from "@/config/content";

export default function Marquee() {
  const t = useTranslations("Marquee");
  const labels = t.raw("items") as { label: string }[];
  const rotator = labels.map((item, i) => ({
    ...item,
    icon: featureRotatorMeta[i].icon,
  }));
  const items = [...rotator, ...rotator, ...rotator];
  return (
    <div className="overflow-hidden bg-[var(--color-primary)] py-4">
      <div className="flex w-max animate-marquee items-center">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-3 px-8 text-white">
              <Icon className="size-5 shrink-0 opacity-90" />
              <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em]">
                {item.label}
              </span>
              <span className="ml-8 size-1.5 rounded-full bg-white/50" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
