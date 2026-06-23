import Image from "next/image";
import { Button } from "@/common/button/components/atoms/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { CustomerRating } from "@/features/home/components/molecules/CustomerRating";
import { getTranslations } from "next-intl/server";
import { company } from "@/data/site";
import { blurs } from "@/data/blurs";
import { heroSection } from "@/data/pages/home";

export const Hero = async () => {
  const t = await getTranslations("home.hero");

  return (
    <section id="home" className="theme-dark relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroSection.image}
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurs.image}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-contrast via-contrast/85 to-contrast/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-contrast via-transparent to-transparent" />
      </div>

      <div className="relative container-x flex min-h-svh flex-col justify-center pt-36 pb-20 lg:min-h-[calc(100svh-3.5rem)]">
        <div className="max-w-3xl">
          <Reveal
            delay={0.05}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <Text as="span" size="caption" tone="white" weight="semibold" tracking="wide" text={t("badge")} />
          </Reveal>

          <Reveal as="div" delay={0.13} className="mt-6">
            <Title
              as="h1"
              size="display"
              tone="white"
              accentTone="faint"
              text={t("titleLead")}
              accent={t("titleAccent")}
            />
          </Reveal>

          <Reveal as="div" delay={0.21} className="mt-6 max-w-xl">
            <Text
              size="lead"
              tone="muted"
              text={t("subtitle", {
                name: company.name,
                years: company.yearsExperience,
              })}
            />
          </Reveal>

          <Reveal delay={0.29} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={heroSection.ctaPrimaryHref} variant="primary" withArrow>
              {t("ctaPrimary")}
            </Button>
            <Button href={heroSection.ctaSecondaryHref} variant="ghost">
              {t("ctaSecondary")}
            </Button>
          </Reveal>

          <Reveal delay={0.37} className="mt-12">
            <CustomerRating avatars={heroSection.avatars} label={t("customers")} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
