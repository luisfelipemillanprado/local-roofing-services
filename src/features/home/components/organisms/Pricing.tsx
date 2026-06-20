import { Check } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Button } from "@/common/button/components/atoms/Button";
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
    <section id="pricing" className="bg-surface-base py-20 lg:py-28">
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
            const Icon = plan.icon;
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
                      tracking
                      text={t("popular")}
                    />
                  </span>
                )}

                <span
                  className={`grid size-14 place-items-center rounded-2xl ${
                    plan.highlighted ? "bg-primary text-white" : "bg-surface-panel text-primary"
                  }`}
                >
                  <Icon className="size-7" />
                </span>

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
                    <li key={feature} className="flex items-center gap-3">
                      <span
                        className={`grid size-5 shrink-0 place-items-center rounded-full ${
                          plan.highlighted ? "bg-primary text-white" : "bg-primary/10 text-primary"
                        }`}
                      >
                        <Check className="size-3" strokeWidth={3.5} />
                      </span>
                      <Text as="span" size="body" tone="muted" text={feature} />
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={plan.highlighted ? "primary" : "dark"}
                  withArrow
                  className="mt-8 w-full"
                >
                  {t("choose")}
                </Button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
