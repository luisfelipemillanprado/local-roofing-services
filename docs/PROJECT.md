# Roofpro — Roofing Services Website

A professional, high-performance marketing site for a roofing company, built with
the Next.js App Router. Single-page landing experience with smooth scroll
navigation, scroll-reveal animations, a fully responsive mobile-first layout, and
full **English / Spanish internationalisation** via locale-prefixed routes.

> The repository's root `README.md` is the owner's GitHub profile and is left
> untouched. This file documents the Roofpro web project that lives in this branch.

## Tech Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **next-intl** for i18n (locale-prefixed routing, server-rendered translations)
- Custom **light/dark theme** provider (`src/components/ThemeProvider.tsx`) with a
  server-rendered anti-flash script
- **Tailwind CSS v4** with a custom design-token theme (`src/app/globals.css`)
- **Framer Motion** for scroll-reveal and entrance animations
- **lucide-react** for icons
- **next/font** (Plus Jakarta Sans + Inter), `next/image` for optimized assets

## Getting Started

This project uses **pnpm** as its package manager.

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

### Scripts

| Command       | Description                |
| ------------- | ------------------------- |
| `pnpm dev`    | Start the dev server       |
| `pnpm build`  | Production build           |
| `pnpm start`  | Serve the production build |
| `pnpm lint`   | Lint the project           |

## Project Structure

```
messages/
  en.json             # All English copy, by section namespace
  es.json             # All Spanish copy (same shape as en.json)
src/
  proxy.ts            # next-intl middleware (locale routing) — Next.js 16 name
  app/
    [locale]/
      layout.tsx      # <html lang>, fonts, localized metadata, providers
      page.tsx        # Page composition (section order)
    globals.css       # Design tokens (colors, fonts, radii) + utilities
  i18n/
    routing.ts        # Locales, default locale, localePrefix config
    request.ts        # getRequestConfig — loads messages per request
    navigation.ts     # Locale-aware Link / useRouter / usePathname
  components/
    ThemeProvider.tsx # next-themes wrapper
    layout/           # Navbar, Footer
    sections/         # Hero, About, Services, WhyChoose, Projects, Team,
                      # Testimonials, Coupons, Pricing, Blog, CTA, Marquee
    ui/               # Button, SectionHeading, Reveal, Logo, Socials, etc.
  config/
    content.ts        # Non-translatable presentation data: icons, image URLs,
                      # structural flags (merged by index with the translations)
  data/
    site.ts           # Locale-independent company details (name, phone, email)
  lib/
    motion.ts         # Shared Framer Motion variants
  global.d.ts         # next-intl type augmentation (Locale + Messages)
```

### How i18n works

- Routes are locale-prefixed: English is served at `/` and Spanish at `/es`
  (`localePrefix: "as-needed"` in `src/i18n/routing.ts`). `src/proxy.ts` handles
  locale detection and redirects.
- All translatable copy lives in `messages/{locale}.json`. Components read it with
  `useTranslations("Namespace")`; lists use `t.raw("items")` and are merged by index
  with the icons/images in `src/config/content.ts`.
- ICU placeholders like `{name}` / `{years}` are passed as `t("key", { name, years })`.

## Customizing for the Client

- **Content & copy:** edit `messages/en.json` and `messages/es.json` — services,
  team, testimonials, pricing, blog posts, footer links and every UI string live
  here, keyed by section. Keep both files the same shape.
- **Company details:** edit `src/data/site.ts` (name, phone, email, address).
- **Icons / images:** edit `src/config/content.ts` — these are merged by index with
  the translated lists, so the order must match the `messages/*.json` arrays.
- **Add a language:** add the locale to `src/i18n/routing.ts`, create the matching
  `messages/<locale>.json`, and the route is generated automatically.
- **Brand colors / fonts:** edit the `@theme` block in `src/app/globals.css`
  (`--color-primary`, etc.) and the fonts in `src/app/[locale]/layout.tsx`.
- **Remote images:** add the host to `images.remotePatterns` in `next.config.ts`.

## Sections

Hero → marquee strip → About → Services → Why Choose Us → Projects →
Team → Testimonials → Coupons → Pricing → Blog → Contact / CTA → Footer.

## Deployment

Optimized for Vercel (zero-config). Any Node host works via `pnpm build` +
`pnpm start`. The page is statically prerendered for fast first load.
