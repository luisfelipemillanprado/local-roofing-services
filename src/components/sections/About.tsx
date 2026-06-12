import Image from "next/image";
import { Phone, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getTranslations } from "next-intl/server";
import { company } from "@/data/site";

type Stat = { value: string; label: string };

export default async function About() {
  const t = await getTranslations("About");
  const tc = await getTranslations("Common");
  const tHero = await getTranslations("Hero");
  const heroStats = tHero.raw("stats") as Stat[];
  const points = t.raw("points") as string[];

  return (
    <section id="about" className="bg-[var(--page-bg)] py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Image side */}
        <Reveal className="relative">
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
            <Image
              src="/images/boss/boss.webp"
              alt="Roofpro company owner on site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Years badge */}
          <div className="absolute -right-3 top-8 grid size-28 place-items-center rounded-full bg-[var(--color-primary)] text-center text-white shadow-[var(--shadow-card)] sm:size-32">
            <div>
              <div className="text-3xl font-extrabold leading-none sm:text-4xl">
                {company.yearsExperience}+
              </div>
              <div className="mt-1 text-[0.6rem] font-semibold uppercase tracking-widest">
                {t("yearsLine1")}
                <br /> {t("yearsLine2")}
              </div>
            </div>
          </div>

          {/* Floating contact card */}
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-[var(--color-ink)] px-5 py-4 text-white shadow-[var(--shadow-card)]">
            <span className="grid size-11 place-items-center rounded-full bg-[var(--color-primary)]">
              <Phone className="size-5" />
            </span>
            <div>
              <p className="text-[0.65rem] uppercase tracking-widest text-white/60">
                {t("callAnytime")}
              </p>
              <a href={company.phoneHref} className="text-sm font-bold">
                {company.phone}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Copy side */}
        <div>
          <Reveal>
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-[var(--fg)] sm:text-4xl lg:text-[2.75rem]">
              {t("titleLead")}
              <span className="block text-[var(--color-primary)]">
                {t("titleAccent")}
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--fg-muted)]">
              {t("body", { name: company.name })}
            </p>
          </Reveal>

          <Reveal className="mt-7 space-y-3">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-[var(--fg)]">{p}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-9 grid grid-cols-3 gap-4 border-y border-[var(--border)] py-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-[var(--fg)] sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-[var(--fg-muted)]">{stat.label}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8">
            <Button href="/services" variant="dark" withArrow>
              {tc("learnMore")}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
