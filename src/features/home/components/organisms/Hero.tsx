import Image from "next/image";
import { Star } from "lucide-react";
import { Button } from "@/common/button/components/atoms/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { getTranslations } from "next-intl/server";
import { company } from "@/data/site";

export async function Hero() {
  const t = await getTranslations("home.hero");

  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero/hero.webp"
          alt="Modern home with a durable standing-seam metal roof"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="container-x relative flex min-h-[92vh] flex-col justify-center pb-20 pt-36">
        <div className="max-w-3xl">
          <Reveal
            delay={0.05}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.135rem] text-white/90 backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {t("badge")}
          </Reveal>

          <Reveal
            as="div"
            delay={0.13}
            className="mt-6"
          >
            <h1 className="text-5xl font-extrabold leading-[0.95] text-white sm:text-7xl lg:text-8xl">
              {t("titleLead")}
              <span className="block text-white/35">{t("titleAccent")}</span>
            </h1>
          </Reveal>

          <Reveal
            as="div"
            delay={0.21}
            className="mt-6 max-w-xl"
          >
            <p className="text-lg leading-relaxed text-white/75">
              {t("subtitle", {
                name: company.name,
                years: company.yearsExperience,
              })}
            </p>
          </Reveal>

          <Reveal delay={0.29} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" withArrow>
              {t("ctaPrimary")}
            </Button>
            <Button href="#projects" variant="ghost">
              {t("ctaSecondary")}
            </Button>
          </Reveal>

          <Reveal
            delay={0.37}
            className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-2 pr-5 backdrop-blur"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((n) => (
                <Image
                  key={n}
                  src={`/images/avatars/avatar${n}.webp`}
                  alt=""
                  width={40}
                  height={40}
                  className="size-10 rounded-full border-2 border-ink object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-primary-light">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold text-white">{t("customers")}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
