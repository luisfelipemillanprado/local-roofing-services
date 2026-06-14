import { getTranslations } from "next-intl/server";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { projectStatsMeta } from "@/config/content";

export default async function StatsBand() {
  const t = await getTranslations("projects-page.stats");
  const list = t.raw("items") as { value: string; label: string }[];
  const items = list.map((item, i) => ({ ...item, ...projectStatsMeta[i] }));

  return (
    <section className="bg-[var(--color-ink)] py-20 lg:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow={t("eyebrow")}
          theme="dark"
          align="center"
          title={
            <>
              {t("titleLead")}{" "}
              <span className="text-[var(--color-primary-light)]">{t("titleAccent")}</span>
            </>
          }
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <Reveal
                key={stat.label}
                delay={i * 0.08}
                className="rounded-[var(--radius-card)] border border-white/10 bg-white/5 p-7 text-center"
              >
                <span className="mx-auto grid size-14 place-items-center rounded-2xl bg-[var(--color-primary)] text-white">
                  <Icon className="size-7" />
                </span>
                <div className="mt-5 text-4xl font-extrabold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-white/60">{stat.label}</div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
