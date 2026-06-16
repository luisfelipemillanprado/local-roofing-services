import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/molecules/SectionHeading";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { processSection } from "@/data/pages/services";

export async function ProcessSteps() {
  const t = await getTranslations("services-page.process");
  const items = processSection.steps;

  return (
    <section className="bg-surface-base py-20 lg:py-28">
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
          {items.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal
                as="article"
                key={step.key}
                delay={i * 0.08}
                className="rounded-card border border-line bg-surface p-7"
              >
                <span className="text-sm font-extrabold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 grid size-14 place-items-center rounded-2xl bg-surface-2 text-primary">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-fg">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {t(`steps.${step.key}.description`)}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
