import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { IconCard } from "@/common/icon-card/components/IconCard";
import { Button } from "@/common/call-to-actions/components/Button";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { getTranslations } from "next-intl/server";
import { whyChooseSection } from "@/data/pages/home";

export const WhyChoose = async () => {
  const t = await getTranslations("home.why-choose");
  const features = whyChooseSection.features;
  const whyStats = whyChooseSection.stats;

  return (
    <Section>
      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />

          <div className="mt-9 flex flex-wrap items-center justify-center gap-6 md:justify-start">
            {whyStats.map((stat) => {
              return (
                <div key={stat.key} className="flex items-center gap-3">
                  <IconBadge icon={stat.icon} size="stat" tone="muted" />
                  <div>
                    <TextNumber as="p" size="stat" text={t(`stats.${stat.key}.value`)} />
                    <Text size="label" tone="muted" text={t(`stats.${stat.key}.label`)} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex justify-center md:justify-start">
            <Button href="#contact" variant="secondary">
              {t("learnMore")}
            </Button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, i) => (
            <IconCard
              key={feature.key}
              icon={feature.icon}
              title={t(`features.${feature.key}.title`)}
              description={t(`features.${feature.key}.description`)}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
