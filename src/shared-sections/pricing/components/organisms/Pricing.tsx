import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { SectionWrapper } from "@/common/section-wrapper/components/SectionWrapper";
import { Button } from "@/common/call-to-actions/components/Button";
import { PricingList } from "@/shared-sections/pricing/components/molecules/PricingList";
import { getTranslations } from "next-intl/server";
import { pricingData } from "@/data/sections/pricing";
import type { PricingProps } from "@/shared-sections/pricing/types";
import { Container } from "@/common/container/components/Container";

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
    <SectionWrapper id="pricing">
      <Container>
        <div className="grid gap-13">
          <div className="grid justify-items-center gap-6">
            <SectionHeading
              align="center"
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
      </Container>
    </SectionWrapper>
  );
};
