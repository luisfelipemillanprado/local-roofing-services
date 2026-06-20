import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { projectStatsSection } from "@/data/pages/projects";

export const StatsBand = async () => {
  const t = await getTranslations("projects-page.stats");
  const items = projectStatsSection.items;

  return (
    <section className="theme-dark bg-contrast py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("eyebrow")}
          align="center"
          title={t("titleLead")}
          accent={t("titleAccent")}
          description={t("description")}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((stat, i) => {
            return (
              <Reveal
                key={stat.key}
                delay={i * 0.08}
                className="rounded-card border border-white/10 bg-white/5 p-7 text-center"
              >
                <div className="flex justify-center">
                  <IconBadge icon={stat.icon} size="feature" tone="solid" />
                </div>
                <div className="mt-5">
                  <TextNumber as="p" size="display" text={t(`items.${stat.key}.value`)} />
                </div>
                <div className="mt-1">
                  <Text size="caption" tone="muted" text={t(`items.${stat.key}.label`)} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
