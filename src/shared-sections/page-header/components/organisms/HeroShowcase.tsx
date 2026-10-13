import { getTranslations } from "next-intl/server";
import { ShoppingBag } from "lucide-react";
import { Text } from "@/common/text/components/Text";
import { Button } from "@/common/call-to-actions/components/Button";
import { pageHeaderData } from "@/data/shared-sections/page-header";
import { HeroMaterialCards } from "@/shared-sections/page-header/components/molecules/HeroMaterialCards";
import type { HeroShowcaseProps } from "@/shared-sections/page-header/types";

const { showcase } = pageHeaderData;

/* hero side panel: fanned material cards + a materials banner (desktop only) */
export const HeroShowcase = async ({ cta }: HeroShowcaseProps) => {
  const t = await getTranslations("page-header");
  const items = showcase.materials.map((material) => ({
    key: material.key,
    image: material.image,
    linked: "linked" in material ? material.linked : false,
    eyebrow: t(`${material.key}.eyebrow`),
    imageAlt: t(`${material.key}.imageAlt`),
    specs: t(`${material.key}.specs`),
  }));

  return (
    <div className="grid gap-11 justify-self-end">
      {/* card link shares the banner CTA destination, so it shares its label too */}
      <HeroMaterialCards items={items} href={cta.href} linkAria={cta.label} />
      <div className="grid grid-cols-[auto_auto_auto_auto] items-center gap-5 justify-self-center rounded-badge border border-white/10 bg-white/5 px-6 py-5">
        <ShoppingBag aria-hidden className="size-7 text-primary" />
        {/* divider stays from lg even while the label is hidden */}
        <div className="h-9 w-px bg-white/15" />
        {/* label hides while the banner is too narrow, returns when it fits */}
        <div className="hidden gap-1 xl:grid">
          <Text as="p" size="body" weight="semibold" tone="white" text={t(`${showcase.bannerKey}.title`)} />
          <Text as="p" size="caption" tone="muted" text={t(`${showcase.bannerKey}.description`)} />
        </div>
        <Button href={cta.href} variant="primary" pulse>
          {cta.label}
        </Button>
      </div>
    </div>
  );
};
