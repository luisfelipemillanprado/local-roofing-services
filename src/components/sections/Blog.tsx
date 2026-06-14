import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { getTranslations } from "next-intl/server";
import { postMeta } from "@/config/content";

type Post = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
};

export default async function Blog() {
  const t = await getTranslations("blog");
  const items = t.raw("posts") as Post[];
  const posts = items.map((item, i) => ({ ...item, ...postMeta[i] }));

  return (
    <section id="blog" className="bg-[var(--surface-2)] py-20 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={
              <>
                {t("titleLead")}
                <span className="block text-[var(--color-primary)]">
                  {t("titleAccent")}
                </span>
              </>
            }
          />
          <Button href="#blog" variant="dark" withArrow className="shrink-0">
            {t("explore")}
          </Button>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {posts.map((post, i) => (
            <Reveal
              as="article"
              key={post.title}
              delay={i * 0.08}
              className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--border)] bg-[var(--surface)] shadow-[0_18px_50px_-34px_rgba(15,23,34,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)] sm:flex-row"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden sm:aspect-auto sm:w-2/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-white">
                  {post.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-4 text-xs text-[var(--fg-muted)]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="size-3.5 text-[var(--color-primary)]" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User className="size-3.5 text-[var(--color-primary)]" />
                    {post.author}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-bold leading-snug text-[var(--fg)] transition-colors group-hover:text-[var(--color-primary)]">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {post.excerpt}
                </p>
                <Link
                  href="#blog"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
                >
                  {t("readMore")}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
