"use client";

import Image from "next/image";
import { Phone, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { company } from "@/data/site";
import { useContent } from "@/i18n/provider";
import { interpolate } from "@/i18n/content";

export default function About() {
  const { heroStats, ui } = useContent();

  return (
    <section id="about" className="bg-[var(--page-bg)] py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Image side */}
        <Reveal className="relative">
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
            <Image
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80"
              alt="Roofpro craftsman on site"
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
                {ui.aboutYearsLine1}
                <br /> {ui.aboutYearsLine2}
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
                {ui.aboutCallAnytime}
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
            <span className="eyebrow">{ui.aboutEyebrow}</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] text-[var(--fg)] sm:text-4xl lg:text-[2.75rem]">
              {ui.aboutTitleLead}
              <span className="block text-[var(--color-primary)]">
                {ui.aboutTitleAccent}
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--fg-muted)]">
              {interpolate(ui.aboutBody, { name: company.name })}
            </p>
          </Reveal>

          <Reveal className="mt-7 space-y-3">
            {ui.aboutPoints.map((p) => (
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
            <Button href="#services" variant="dark" withArrow>
              {ui.learnMore}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
