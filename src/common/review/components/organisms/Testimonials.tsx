import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { SectionHeading } from "@/common/section-header/components/molecules/SectionHeading";
import { Button } from "@/common/button/components/atoms/Button";
import { Reveal } from "@/common/reveal/components/atoms/Reveal";
import { getTranslations } from "next-intl/server";
import { reviewsSection } from "@/data/sections/reviews";
import type { TestimonialsProps } from "@/common/review/types";

function GoogleMark() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.7-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.5 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.4 7.4 24 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.4c-.2-.7-.4-1.4-.4-2.4s.1-1.7.4-2.4V6.5H1.4C.5 8.2 0 10 0 12s.5 3.8 1.4 5.5l4-3.1Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4C17.9 1.2 15.2 0 12 0 7.4 0 3.4 2.6 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8Z"
      />
    </svg>
  );
}

export const Testimonials = async ({ limit }: TestimonialsProps = {}) => {
  const t = await getTranslations("review");
  // `limit` lets the home show a subset while /projects shows them all.
  const testimonials = reviewsSection.items.slice(0, limit);

  return (
    <section className="bg-surface-muted py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-center gap-6">
          <SectionHeading
            eyebrow={t("eyebrow")}
            align="center"
            title={
              <>
                {t("titleLead")}
                <span className="block text-primary">
                  {t("titleAccent")}
                </span>
              </>
            }
            description={t("description")}
          />
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-2xl border border-line bg-surface-panel px-4 py-3">
              <GoogleMark />
              <div>
                <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                  4.9
                  <span className="flex text-primary">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </span>
                </div>
                <p className="text-xs text-foreground-muted">{t("reviews")}</p>
              </div>
            </div>
            <Button href="#contact" variant="dark" className="hidden sm:inline-flex">
              {t("viewAll")}
            </Button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => {
            const name = t(`items.${item.key}.name`);
            return (
            <Reveal
              as="figure"
              key={item.key}
              delay={i * 0.08}
              className="flex flex-col rounded-card border border-line bg-surface-panel p-7 shadow-md shadow-ink/40"
            >
              <div className="flex items-center justify-between">
                <span className="flex text-primary">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                </span>
                <Quote className="size-8 text-surface-muted" fill="currentColor" />
              </div>
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/80">
                &ldquo;{t(`items.${item.key}.quote`)}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-line pt-5">
                <span className="relative size-11 overflow-hidden rounded-full">
                  <Image
                    src={item.avatar}
                    alt={name}
                    placeholder="blur"
                    blurDataURL={item.blur}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-foreground">{name}</div>
                  <div className="text-xs text-foreground-muted">
                    {t(`items.${item.key}.location`)}
                  </div>
                </div>
                <GoogleMark />
              </figcaption>
            </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
