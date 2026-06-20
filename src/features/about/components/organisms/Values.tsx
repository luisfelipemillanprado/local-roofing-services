import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { IconBadge } from "@/common/icon-badge/components/IconBadge";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { valuesSection } from "@/data/pages/about";

export const Values = async () => {
  const t = await getTranslations("about-page.values");
  const items = valuesSection.items;

  return (
    <section className="bg-surface-muted py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("eyebrow")}
          align="center"
          title={t("titleLead")}
          accent={t("titleAccent")}
          description={t("description")}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((value, i) => {
            return (
              <Reveal
                as="article"
                key={value.key}
                delay={i * 0.08}
                className="group rounded-card border border-line bg-surface-panel p-7 shadow-shade/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
              >
                <IconBadge icon={value.icon} size="feature" tone="muted" hover />
                <div className="mt-5">
                  <Title as="h3" size="card" weight="bold" text={t(`items.${value.key}.title`)} />
                </div>
                <div className="mt-2">
                  <Text size="body" tone="muted" text={t(`items.${value.key}.description`)} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
