import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { IconCard } from "@/common/icon-card/components/IconCard";
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
    </section>
  );
};
