import { Check } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/molecules/SectionHeading";
import { Button } from "@/common/button/components/atoms/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { getTranslations } from "next-intl/server";
import { pricingSection } from "@/data/pages/home";

export async function Pricing() {
  const t = await getTranslations("pricing");
  const pricingPlans = pricingSection.plans;

  return (
    <section id="pricing" className="bg-[var(--page-bg)] py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("eyebrow")}
          align="center"
          title={
            <>
              {t("titleLead")}{" "}
              <span className="text-[var(--color-primary)]">{t("titleAccent")}</span>
            </>
          }
          description={t("description")}
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {pricingPlans.map((plan, i) => {
            const Icon = plan.icon;
            const features = t.raw(`plans.${plan.key}.features`) as string[];
            return (
              <Reveal
                key={plan.key}
                delay={i * 0.08}
                className={`relative flex flex-col rounded-[var(--radius-card)] border p-8 transition-all duration-300 ${
                  plan.highlighted
                    ? "border-transparent bg-[var(--color-ink)] text-white shadow-[var(--shadow-card)]"
                    : "border-[var(--border)] bg-[var(--surface-2)]"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute right-6 top-6 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {t("popular")}
                  </span>
                )}

                <span
                  className={`grid size-14 place-items-center rounded-2xl ${
                    plan.highlighted
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-[var(--surface)] text-[var(--color-primary)]"
                  }`}
                >
                  <Icon className="size-7" />
                </span>

                <h3
                  className={`mt-6 text-xl font-bold ${
                    plan.highlighted ? "text-white" : "text-[var(--fg)]"
                  }`}
                >
                  {t(`plans.${plan.key}.name`)}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-white/70" : "text-[var(--fg-muted)]"
                  }`}
                >
                  {t(`plans.${plan.key}.blurb`)}
                </p>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-extrabold">
                    {t(`plans.${plan.key}.price`)}
                  </span>
                  <span
                    className={`mb-1 text-sm ${
                      plan.highlighted ? "text-white/60" : "text-[var(--fg-muted)]"
                    }`}
                  >
                    {t(`plans.${plan.key}.period`)}
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3.5">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <span
                        className={`grid size-5 shrink-0 place-items-center rounded-full ${
                          plan.highlighted
                            ? "bg-[var(--color-primary)] text-white"
                            : "bg-[var(--color-primary)]/10 text-[var(--color-primary)]"
                        }`}
                      >
                        <Check className="size-3" strokeWidth={3.5} />
                      </span>
                      <span
                        className={
                          plan.highlighted ? "text-white/85" : "text-[var(--fg)]/80"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  href="#contact"
                  variant={plan.highlighted ? "primary" : "dark"}
                  withArrow
                  className="mt-8 w-full"
                >
                  {t("choose")}
                </Button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
