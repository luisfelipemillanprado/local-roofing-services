import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/molecules/SectionHeading";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
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
          title={
            <>
              {t("titleLead")}{" "}
              <span className="text-primary">{t("titleAccent")}</span>
            </>
          }
          description={t("description")}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal
                as="article"
                key={value.key}
                delay={i * 0.08}
                className="group rounded-card border border-line bg-surface-panel p-7 shadow-ink/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-md"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-surface-muted text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {t(`items.${value.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground-muted">
                  {t(`items.${value.key}.description`)}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
