import Image from "next/image";
import { Phone, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { company, heroStats } from "@/data/site";

const points = [
  "Residential & commercial roofing experts",
  "Premium materials with extended warranties",
  "Transparent, upfront pricing — no surprises",
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
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
                Years of
                <br /> Experience
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
                Call us anytime
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
            <span className="eyebrow">Our Company</span>
            <h2 className="mt-4 text-3xl font-extrabold leading-[1.1] sm:text-4xl lg:text-[2.75rem]">
              Your Partner For Durable
              <span className="block text-[var(--color-primary)]">
                Quality-Reliable Roofing
              </span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-[var(--color-muted)]">
              At {company.name} we are committed to providing top-notch roofing services
              with a focus on quality and reliability. Our seasoned crew delivers
              craftsmanship you can trust on residential and commercial roofs alike.
            </p>
          </Reveal>

          <Reveal className="mt-7 space-y-3">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                <span className="text-sm font-medium text-[var(--color-ink)]">{p}</span>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-9 grid grid-cols-3 gap-4 border-y border-[var(--color-line)] py-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-extrabold text-[var(--color-ink)] sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-[var(--color-muted)]">{stat.label}</div>
              </div>
            ))}
          </Reveal>

          <Reveal className="mt-8">
            <Button href="#services" variant="dark" withArrow>
              Learn More
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
