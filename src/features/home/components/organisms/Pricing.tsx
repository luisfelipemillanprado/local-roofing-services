import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { CheckItem } from "@/common/check-item/components/CheckItem";
import { Button } from "@/common/call-to-actions/components/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Title } from "@/common/title/components/Title";
import { getTranslations } from "next-intl/server";
import { pricingSection } from "@/data/pages/home";

export const Pricing = async () => {
  const t = await getTranslations("home.pricing");
  const pricingPlans = pricingSection.plans;

  return (
    <Section id="pricing">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("eyebrow")}
          align="center"
          title={t("titleLead")}
          accent={t("titleAccent")}
          description={t("description")}
        />

        <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, i) => {
            const features = t.raw(`plans.${plan.key}.features`) as string[];
            return (
              <Reveal
                key={plan.key}
                delay={i * 0.08}
                className={`relative flex flex-col rounded-card border p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "theme-dark border-transparent bg-highlight text-white shadow-lg shadow-shade/40"
                    : "border-line bg-surface-muted"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute top-6 right-6 rounded-full bg-primary px-3 py-1">
                    <Text
                      as="span"
                      size="label"
                      tone="white"
                      weight="semibold"
                      tracking="wide"
                      text={t("popular")}
                    />
                  </span>
                )}

                <IconBadge icon={plan.icon} size="feature" tone={plan.highlighted ? "solid" : "panel"} />

                <div className="mt-6">
                  <Title as="h3" size="feature" weight="bold" text={t(`plans.${plan.key}.name`)} />
                </div>
                <div className="mt-2">
                  <Text size="body" tone="muted" text={t(`plans.${plan.key}.blurb`)} />
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <TextNumber size="display" text={t(`plans.${plan.key}.price`)} />
                  <span className="mb-1">
                    <Text as="span" size="body" tone="muted" text={t(`plans.${plan.key}.period`)} />
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3.5">
                  {features.map((feature) => (
                    <CheckItem key={feature} tone="muted" text={feature} />
                  ))}
                </ul>

                <div className="mt-8">
                  <Button href="#contact" variant={plan.highlighted ? "primary" : "secondary"} fullWidth>
                    {t("choose")}
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
