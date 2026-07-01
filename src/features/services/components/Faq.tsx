import { getTranslations } from "next-intl/server";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/SectionHeading";
import { Section } from "@/common/section/components/Section";
import { Reveal } from "@/common/reveal/components/Reveal";
import { Text } from "@/common/text/components/Text";

export const Faq = async () => {
  const t = await getTranslations("services-page.faq");
  const items = t.raw("items") as { q: string; a: string }[];

  return (
    <Section tone="muted">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("titleLead")}
          accent={t("titleAccent")}
          description={t("description")}
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {items.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <details className="group rounded-card border border-line bg-surface-panel p-6 transition-colors open:border-primary/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-foreground">
                  {item.q}
                  <ChevronDown className="size-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="mt-4">
                  <Text size="body" tone="muted" text={item.a} />
                </div>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
};
