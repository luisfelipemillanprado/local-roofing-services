# Roofpro — Local Roofing Services Website

A professional, high-performance marketing site for a roofing company, built with
the Next.js App Router. Single-page landing experience with smooth scroll
navigation, scroll-reveal animations, and a fully responsive, mobile-first layout.

## Tech Stack

- **Next.js 16** (App Router + Turbopack, React 19, TypeScript)
- **Tailwind CSS v4** with a custom design-token theme (`src/app/globals.css`)
- **Internationalization (i18n)** — English & Spanish, with a one-click language
  switch and `localStorage` persistence (`src/i18n/`)
- **Light / dark theme** via `next-themes`, with a sun/moon toggle and
  theme-aware CSS variables that flip for `.dark`
- **Framer Motion** for scroll-reveal and entrance animations
- **lucide-react** for icons
- **next/font** (Plus Jakarta Sans + Inter), `next/image` for optimized assets
- **pnpm** as the package manager

## Internationalization & Theming

- **All copy** lives in `src/i18n/content.ts`, keyed by locale (`en` / `es`).
  Add a language by extending the `Content` map and the `locales` list.
- Components read localized content through the `useContent()` hook
  (`src/i18n/provider.tsx`); the active locale is persisted in `localStorage`.
- The light/dark palette is defined with semantic CSS variables
  (`--page-bg`, `--surface`, `--fg`, `--border`, …) in `globals.css`; the `.dark`
  block overrides them. Brand colors stay constant across themes.

## Getting Started

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

## First Push To GitHub

```bash
git init
git add -A
git commit -m "Initial commit — Roofpro roofing services website"
git branch -M main
git remote add origin git@github.com:luisfelipemillanprado/local-roofing-services.git
git push -u origin main
```

## Project Structure

```
src/
  app/
    layout.tsx        # Fonts, SEO metadata, global styles
    page.tsx          # Page composition (section order)
    globals.css       # Design tokens (colors, fonts, radii) + utilities
  components/
    layout/           # Navbar, Footer
    sections/         # Hero, About, Services, WhyChoose, Projects, Team,
                      # Testimonials, Coupons, Pricing, Blog, CTA, Marquee
    ui/               # Button, SectionHeading, Reveal, Logo, Socials
  data/
    site.ts           # ALL copy & content (single source of truth)
  lib/
    motion.ts         # Shared Framer Motion variants
```

## Customizing for the Client

- **Content & copy:** edit `src/data/site.ts` — company name, phone, services,
  team, testimonials, pricing, blog posts, footer links all live here.
- **Brand colors / fonts:** edit the `@theme` block in `src/app/globals.css`
  (`--color-primary`, etc.) and the fonts in `src/app/layout.tsx`.
- **Real photography:** drop images into `public/images/` and update the paths in
  `src/data/site.ts`. To use remote images (e.g. a CMS or Unsplash), add the host
  to `images.remotePatterns` in `next.config.ts`.

## Sections

Hero → marquee strip → About → Services → Why Choose Us → Projects →
Team → Testimonials → Coupons → Pricing → Blog → Contact / CTA → Footer.

## Deployment

Optimized for Vercel (zero-config). Any Node host works via `pnpm build` +
`pnpm start`. The page is statically prerendered for fast first load.
