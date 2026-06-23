import Image from "next/image";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { Text } from "@/common/text/components/Text";
import { Title } from "@/common/title/components/Title";
import { AvailabilityBadge } from "@/features/home/components/molecules/AvailabilityBadge";
import { HeroActions } from "@/features/home/components/molecules/HeroActions";
import { CustomerRating } from "@/features/home/components/molecules/CustomerRating";
import { getTranslations } from "next-intl/server";
import { company } from "@/data/site";
import { blurs } from "@/data/blurs";
import { heroSection } from "@/data/pages/home";

const { image, avatars, ctaPrimaryHref, ctaSecondaryHref } = heroSection;

export const Hero = async () => {
  const t = await getTranslations("home.hero");

  return (
    <section id="home" className="theme-dark relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={t("imageAlt")}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={blurs.image}
          className="object-cover"
        />
        <div className="absolute inset-0 overlay-hero-side" />
        <div className="absolute inset-0 overlay-hero-bottom" />
      </div>

      <div className="relative container-x flex min-h-svh flex-col justify-center pt-36 pb-20 lg:min-h-[calc(100svh-3.5rem)]">
        <div className="max-w-3xl">
          <Reveal delay={0.05}>
            <AvailabilityBadge label={t("badge")} />
          </Reveal>

          <Reveal as="div" delay={0.1} className="mt-6">
            <Title
              as="h1"
              size="display"
              tone="white"
              accentTone="faint"
              text={t("titleLead")}
              accent={t("titleAccent")}
            />
          </Reveal>

          <Reveal as="div" delay={0.15} className="mt-6 max-w-xl">
            <Text
              size="lead"
              tone="muted"
              text={t("subtitle", {
                name: company.name,
                years: company.yearsExperience,
              })}
            />
          </Reveal>

          <Reveal delay={0.2} className="mt-9">
            <HeroActions
              primaryHref={ctaPrimaryHref}
              primaryLabel={t("ctaPrimary")}
              secondaryHref={ctaSecondaryHref}
              secondaryLabel={t("ctaSecondary")}
            />
          </Reveal>

          <Reveal delay={0.25} className="mt-12">
            <CustomerRating avatars={avatars} label={t("customers")} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
