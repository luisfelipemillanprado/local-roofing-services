import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Button } from "@/common/button/components/atoms/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Title } from "@/common/title/components/Title";
import { getTranslations } from "next-intl/server";
import { whyChooseSection } from "@/data/pages/home";

export const WhyChoose = async () => {
  const t = await getTranslations("home.why-choose");
  const tc = await getTranslations("common");
  const features = whyChooseSection.features;
  const whyStats = whyChooseSection.stats;

  return (
    <section className="bg-surface-base py-20 lg:py-28">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={t("eyebrow")}
            align="center-mobile"
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />

          <div className="mt-9 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
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

          <div className="mt-9 flex justify-center lg:justify-start">
            <Button href="#contact" variant="primary" withArrow>
              {tc("learnMore")}
            </Button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, i) => {
            return (
              <Reveal
                key={feature.key}
                delay={i * 0.08}
                className={`group rounded-card border p-7 shadow-shade/40 transition-all duration-300 hover:-translate-y-1.5 ${
                  i === 1
                    ? "border-transparent bg-highlight text-white shadow-lg"
                    : "border-line bg-surface-muted hover:shadow-md"
                }`}
              >
                <IconBadge
                  icon={feature.icon}
                  size="feature"
                  tone={i === 1 ? "solid" : "panel"}
                  hover={i !== 1}
                />
                <div className="mt-6">
                  <Title
                    as="h3"
                    size="card"
                    weight="bold"
                    tone={i === 1 ? "white" : "default"}
                    text={t(`features.${feature.key}.title`)}
                  />
                </div>
                <div className="mt-3">
                  <Text size="body" tone="muted" text={t(`features.${feature.key}.description`)} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
