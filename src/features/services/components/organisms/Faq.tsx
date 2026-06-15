import { getTranslations } from "next-intl/server";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/molecules/SectionHeading";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";

export async function Faq() {
  const t = await getTranslations("services-page.faq");
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <section className="bg-surface-2 py-20 lg:py-28">
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

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="group rounded-card border border-line bg-surface p-6 transition-colors open:border-primary/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-fg">
                  {item.q}
                  <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-fg-muted">
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
