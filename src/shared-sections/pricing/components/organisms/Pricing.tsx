import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { Button } from "@/common/call-to-actions/components/Button";
import { PricingList } from "@/shared-sections/pricing/components/molecules/PricingList";
import { getTranslations } from "next-intl/server";
import { pricingData } from "@/data/sections/pricing";
import type { PricingProps } from "@/shared-sections/pricing/types";

const { items, ctaHref, chooseHref } = pricingData;

export const Pricing = async ({ variant }: PricingProps) => {
  const t = await getTranslations("pricing");
  /* data: order + icon/price; text by key */
  const cards = items.map((plan, i) => ({
    key: plan.key,
    icon: plan.icon,
    price: plan.price,
    /* flag lives only on the featured plan */
    highlighted: "highlighted" in plan && plan.highlighted,
    title: t(`items.${plan.key}.title`),
    description: t(`items.${plan.key}.description`),
    period: t(`items.${plan.key}.period`),
    /* t.raw: features is a list, plain t() only resolves strings */
    features: t.raw(`items.${plan.key}.features`) as string[],
    delay: i * 0.08,
  }));

  return (
    <Section id="pricing">
      <div className="container-x grid gap-13">
        <div className="grid items-center justify-items-center gap-6 md:grid-cols-[1fr_auto] md:justify-items-start">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />
          <div className="mt-2">
            <Button href={ctaHref[variant].href} variant="secondary" pulse>
              {t(ctaHref[variant].key)}
            </Button>
          </div>
        </div>

        <PricingList
          cards={cards}
          chooseLabel={t(chooseHref.key)}
          chooseHref={chooseHref.href}
          popular={t("popular")}
        />
      </div>
    </Section>
  );
};
