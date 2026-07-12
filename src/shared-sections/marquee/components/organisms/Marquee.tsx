import { getTranslations } from "next-intl/server";
import { MarqueeList } from "@/shared-sections/marquee/components/molecules/MarqueeList";
import { marqueeData } from "@/data/sections/marquee";

const { items, yearsExperience } = marqueeData;

export const Marquee = async () => {
  const t = await getTranslations("marquee");
  /* data: order + icon; text by key ({years} only used by the years badge) */
  const badges = items.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: t(`items.${item.key}.label`, { years: yearsExperience }),
  }));

  return (
    <div className="overflow-hidden bg-primary py-4">
      <MarqueeList items={badges} />
    </div>
  );
};
