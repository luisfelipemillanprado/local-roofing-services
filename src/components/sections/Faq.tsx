import { getTranslations } from "next-intl/server";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

export default async function Faq() {
  const t = await getTranslations("ServicesPage.faq");
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <section className="bg-[var(--surface-2)] py-20 lg:py-28">
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

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="group rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-6 transition-colors open:border-[var(--color-primary)]/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[var(--fg)]">
                  {item.q}
                  <ChevronDown className="size-5 shrink-0 text-[var(--color-primary)] transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {item.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
