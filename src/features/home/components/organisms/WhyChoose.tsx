import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { Button } from "@/common/call-to-actions/components/Button";
import { WhyStats } from "@/features/home/components/molecules/WhyStats";
import { WhyFeatures } from "@/features/home/components/molecules/WhyFeatures";
import { getTranslations } from "next-intl/server";
import { whyChooseData } from "@/data/pages/home";

const { ctaHref, features, stats } = whyChooseData;

export const WhyChoose = async () => {
  const t = await getTranslations("home.why-choose");

  const statItems = stats.map((stat) => ({
    key: stat.key,
    icon: stat.icon,
    value: stat.value,
    label: t(`stats.${stat.key}.label`),
  }));

  const featureCards = features.map((feature, i) => ({
    key: feature.key,
    icon: feature.icon,
    title: t(`features.${feature.key}.title`),
    description: t(`features.${feature.key}.description`),
    delay: i * 0.08,
  }));

  return (
    <Section>
      <div className="container-x grid items-start gap-13 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-9 lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description")}
          />

          <WhyStats stats={statItems} />

          <div className="mt-2 grid justify-center md:justify-start">
            <Button href={ctaHref.href} variant="secondary" pulse>
              {t(ctaHref.key)}
            </Button>
          </div>
        </div>

        <WhyFeatures features={featureCards} />
      </div>
    </Section>
  );
};
