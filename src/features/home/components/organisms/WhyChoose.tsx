import { SectionHeading } from "@/common/section-header/components/molecules/SectionHeading";
import { Button } from "@/common/button/components/atoms/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { getTranslations } from "next-intl/server";
import { whyChooseSection } from "@/data/pages/home";

export async function WhyChoose() {
  const t = await getTranslations("home.why-choose");
  const tc = await getTranslations("common");
  const features = whyChooseSection.features;
  const whyStats = whyChooseSection.stats;

  return (
    <section className="bg-[var(--page-bg)] py-20 lg:py-28">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={
              <>
                {t("titleLead")}
                <span className="block text-[var(--color-primary)]">
                  {t("titleAccent")}
                </span>
              </>
            }
            description={t("description")}
          />

          <div className="mt-9 flex flex-wrap items-center gap-6">
            {whyStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.key} className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-[var(--surface-2)] text-[var(--color-primary)]">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <div className="text-xl font-extrabold text-[var(--fg)]">
                      {t(`stats.${stat.key}.value`)}
                    </div>
                    <div className="text-xs text-[var(--fg-muted)]">
                      {t(`stats.${stat.key}.label`)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-9">
            <Button href="#contact" variant="primary" withArrow>
              {tc("learnMore")}
            </Button>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal
                key={feature.key}
                delay={i * 0.08}
                className={`group rounded-[var(--radius-card)] border p-7 transition-all duration-300 hover:-translate-y-1.5 ${
                  i === 1
                    ? "border-transparent bg-[var(--color-ink)] text-white shadow-[var(--shadow-card)]"
                    : "border-[var(--border)] bg-[var(--surface-2)] hover:shadow-[var(--shadow-soft)]"
                }`}
              >
                <span
                  className={`grid size-14 place-items-center rounded-2xl transition-colors ${
                    i === 1
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[var(--surface)] text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-white"
                  }`}
                >
                  <Icon className="size-7" />
                </span>
                <h3
                  className={`mt-6 text-lg font-bold ${
                    i === 1 ? "text-white" : "text-[var(--fg)]"
                  }`}
                >
                  {t(`features.${feature.key}.title`)}
                </h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    i === 1 ? "text-white/70" : "text-[var(--fg-muted)]"
                  }`}
                >
                  {t(`features.${feature.key}.description`)}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
