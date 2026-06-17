import Image from "next/image";
import { Phone, Check } from "lucide-react";
import { Button } from "@/common/button/components/atoms/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { getTranslations } from "next-intl/server";
import { company } from "@/data/site";

type Stat = { value: string; label: string };

export const About = async () => {
  const t = await getTranslations("about");
  const tc = await getTranslations("common");
  const tHero = await getTranslations("home.hero");
  const heroStats = tHero.raw("stats") as Stat[];
  const points = t.raw("points") as string[];

  return (
    <section id="about" className="bg-surface-base py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Image side */}
        <Reveal className="relative">
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-card shadow-lg shadow-ink/40">
            <Image
              src="/images/boss/boss.webp"
              alt="Roofpro company owner on site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Years badge */}
          <div className="absolute -right-3 top-8 grid size-28 place-items-center rounded-full bg-primary text-center text-white shadow-lg shadow-ink/40 sm:size-32">
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
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-ink px-5 py-4 text-white shadow-lg shadow-ink/40">
            <span className="grid size-11 place-items-center rounded-full bg-primary">
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
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="eyebrow">{t("eyebrow")}</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-fg sm:text-4xl lg:text-[2.75rem]">
              {t("titleLead")}
              <span className="block text-primary">
                {t("titleAccent")}
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-fg-muted mx-auto lg:mx-0">
              {t("body", { name: company.name })}
            </p>
          </Reveal>

          <Reveal className="mt-7 space-y-3">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3 justify-center lg:justify-start">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-fg">{p}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-9 grid grid-cols-3 gap-4 border-y border-line py-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-fg sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-fg-muted">{stat.label}</div>
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
