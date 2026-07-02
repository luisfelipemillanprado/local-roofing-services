import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { IconCard } from "@/common/icon-card/components/IconCard";
import { valuesData } from "@/data/pages/about";

export const Values = async () => {
  const t = await getTranslations("about-page.values");
  const items = valuesData.items;

  return (
    <Section tone="muted">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("titleLead")}
          accent={t("titleAccent")}
          description={t("description")}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((value, i) => (
            <IconCard
              key={value.key}
              icon={value.icon}
              title={t(`items.${value.key}.title`)}
              description={t(`items.${value.key}.description`)}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
