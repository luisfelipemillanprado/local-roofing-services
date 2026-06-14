import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { processMeta } from "@/config/content";

export default async function ProcessSteps() {
  const t = await getTranslations("services-page.process");
  const steps = t.raw("steps") as { title: string; description: string }[];
  const items = steps.map((step, i) => ({ ...step, ...processMeta[i] }));

  return (
    <section className="bg-[var(--page-bg)] py-20 lg:py-28">
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
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((step, i) => {
            const Icon = step.icon;
            return (
              <Reveal
                as="article"
                key={step.title}
                delay={i * 0.08}
                className="rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-7"
              >
                <span className="text-sm font-extrabold text-[var(--color-primary)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 grid size-14 place-items-center rounded-2xl bg-[var(--surface-2)] text-[var(--color-primary)]">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[var(--fg)]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {step.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
