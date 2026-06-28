import { Button } from "@/common/call-to-actions/components/Button";
import { CheckItem } from "@/common/check-item/components/CheckItem";
import { Section } from "@/common/section/components/Section";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Media } from "@/common/media/components/Media";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { YearsBadge } from "@/common/about/components/molecules/YearsBadge";
import { ContactCard } from "@/common/about/components/molecules/ContactCard";
import { StatsRow } from "@/common/about/components/molecules/StatsRow";
import { getTranslations } from "next-intl/server";
import { aboutSection } from "@/data/sections/about";

const { name, image, cta, years, call, points, stats } = aboutSection;

export const About = async () => {
  const t = await getTranslations("about");
  const statItems = stats.map((stat) => ({
    key: stat.key,
    value: stat.value,
    label: t(`stats.${stat.key}`),
  }));

  return (
    <Section id="about">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Image side */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-card shadow-lg">
            <Media src={image} alt={t("imageAlt")} shape="feature" sizes="(max-width: 1024px) 100vw, 50vw" />
          </div>

          <div className="absolute top-8 -right-3">
            <YearsBadge
              value={years.value}
              line1={t(`years.${years.key}.line1`)}
              line2={t(`years.${years.key}.line2`)}
            />
          </div>

          <div className="absolute bottom-0 left-6 translate-y-1/2">
            <ContactCard label={t(call.key)} phone={call.number} />
          </div>
        </Reveal>

        {/* Copy side */}
        <div className="text-center md:text-left">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("titleLead")}
            accent={t("titleAccent")}
            description={t("description", { name })}
          />

          <div className="mt-7 flex flex-col items-start gap-3">
            {points.map((point) => (
              <CheckItem key={point.key} as="div" tone="default" text={t(`points.${point.key}`)} />
            ))}
          </div>

          <div className="mt-9">
            <StatsRow items={statItems} />
          </div>

          <div className="mt-8">
            <Button href={cta.href} variant="secondary">
              {t(cta.key)}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};
