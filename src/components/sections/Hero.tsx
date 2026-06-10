"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, ArrowUpRight, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, stagger } from "@/lib/motion";
import { useTranslations } from "next-intl";
import { company } from "@/data/site";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section id="home" className="relative isolate overflow-hidden bg-[var(--color-ink)]">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
          alt="Modern roofing installation"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-ink)] via-[var(--color-ink)]/85 to-[var(--color-ink)]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)] via-transparent to-transparent" />
      </div>

      <div className="container-x relative flex min-h-[92vh] flex-col justify-center pb-20 pt-36">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90 backdrop-blur"
          >
            <ShieldCheck className="size-4 text-[var(--color-primary-light)]" />
            {t("badge")}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-5xl font-extrabold leading-[0.95] text-white sm:text-7xl lg:text-8xl"
          >
            {t("titleLead")}
            <span className="block text-white/35">{t("titleAccent")}</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            {t("subtitle", {
              name: company.name,
              years: company.yearsExperience,
            })}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#contact" variant="primary" withArrow>
              {t("ctaPrimary")}
            </Button>
            <Button href="#projects" variant="ghost">
              {t("ctaSecondary")}
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-12 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-2 pr-5 backdrop-blur"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-[var(--color-primary)] text-white">
              <ArrowUpRight className="size-6" />
            </span>
            <div>
              <div className="flex items-center gap-1 text-[var(--color-primary-light)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold text-white">{t("customers")}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
