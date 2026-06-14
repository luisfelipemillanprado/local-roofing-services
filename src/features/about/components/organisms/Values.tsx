import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/common/section-header/components/molecules/SectionHeading";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { valuesMeta } from "@/config/content";

export async function Values() {
  const t = await getTranslations("about-page.values");
  const list = t.raw("items") as { title: string; description: string }[];
  const items = list.map((item, i) => ({ ...item, ...valuesMeta[i] }));

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

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((value, i) => {
            const Icon = value.icon;
            return (
              <Reveal
                as="article"
                key={value.title}
                delay={i * 0.08}
                className="group rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-[var(--surface-2)] text-[var(--color-primary)] transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  <Icon className="size-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-[var(--fg)]">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {value.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
