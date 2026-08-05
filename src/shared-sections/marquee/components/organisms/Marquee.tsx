import { getTranslations } from "next-intl/server";
import { MarqueeList } from "@/shared-sections/marquee/components/molecules/MarqueeList";
import { marqueeData } from "@/data/sections/marquee";

const { items, yearsExperience, trackCopies } = marqueeData;

export const Marquee = async () => {
  const t = await getTranslations("marquee");
  /* resolve each badge: order + icon, label by key */
  const badges = items.map((item) => ({
    key: item.key,
    icon: item.icon,
    label: t(`items.${item.key}.label`, { years: yearsExperience }),
  }));

  return (
    <div className="overflow-hidden bg-primary py-4">
      <MarqueeList items={badges} copies={trackCopies} />
    </div>
  );
};
