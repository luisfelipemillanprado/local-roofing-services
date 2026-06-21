import Image from "next/image";
import { Phone } from "lucide-react";
import { Button } from "@/common/button/components/atoms/Button";
import { CheckItem } from "@/common/check-item/components/CheckItem";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { TextNumber } from "@/common/text/components/TextNumber";
import { Eyebrow } from "@/common/eyebrow/components/Eyebrow";
import { Title } from "@/common/title/components/Title";
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
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-card shadow-lg shadow-shade/40">
            <Image
              src="/images/boss/boss.webp"
              alt="Roofpro company owner on site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Years badge */}
          <div className="theme-dark absolute top-8 -right-3 grid size-28 place-items-center rounded-full bg-primary text-center text-white shadow-lg shadow-shade/40 sm:size-32">
            <div>
              <TextNumber as="p" size="display" text={`${company.yearsExperience}+`} />
              <div className="mt-1">
                <Text as="p" size="label" tone="default" weight="semibold" tracking text={t("yearsLine1")} />
                <Text as="p" size="label" tone="default" weight="semibold" tracking text={t("yearsLine2")} />
              </div>
            </div>
          </div>

          {/* Floating contact card */}
          <div className="theme-dark absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-contrast px-5 py-4 text-white shadow-lg shadow-shade/40">
            <span className="grid size-11 place-items-center rounded-full bg-primary">
              <Phone className="size-5" />
            </span>
            <div>
              <Text as="p" size="label" tone="muted" tracking text={t("callAnytime")} />
              <a href={company.phoneHref} className="text-sm font-bold">
                {company.phone}
              </a>
            </div>
          </div>
        </Reveal>

        {/* Copy side */}
        <div className="text-center lg:text-left">
          <Reveal>
            <Eyebrow text={t("eyebrow")} />
            <div className="mt-4">
              <Title as="h2" size="section" text={t("titleLead")} accent={t("titleAccent")} />
            </div>
            <div className="mx-auto mt-5 max-w-lg lg:mx-0">
              <Text size="lead" tone="muted" text={t("body", { name: company.name })} />
            </div>
          </Reveal>

          <Reveal className="mt-7 flex flex-col items-start gap-3">
            {points.map((p) => (
              <CheckItem key={p} as="div" tone="default" text={p} />
            ))}
          </Reveal>

          <Reveal className="mt-9 grid grid-cols-3 gap-4 border-y border-line py-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <TextNumber as="p" size="headline" text={stat.value} />
                <div className="mt-1">
                  <Text size="label" tone="muted" text={stat.label} />
                </div>
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
};
