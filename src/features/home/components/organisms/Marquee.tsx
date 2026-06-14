import { getTranslations } from "next-intl/server";
import { marqueeSection } from "@/data/pages/home";

export async function Marquee() {
  const t = await getTranslations("home.marquee");
  const rotator = marqueeSection.items;
  const items = [...rotator, ...rotator, ...rotator];
  return (
    <div className="overflow-hidden bg-primary py-4">
      <div className="flex w-max animate-marquee items-center">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex items-center gap-3 px-8 text-white">
              <Icon className="size-5 shrink-0 opacity-90" />
              <span className="whitespace-nowrap text-sm font-bold uppercase tracking-[0.2em]">
                {t(`items.${item.key}.label`)}
              </span>
              <span className="ml-8 size-1.5 rounded-full bg-white/50" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
