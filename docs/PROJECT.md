# Roofpro — Roofing Services Website

A professional, high-performance marketing site for a roofing company, built with
the Next.js App Router. Multi-page experience (Home, Services, Projects, About) with
smooth in-page anchor navigation, scroll-reveal animations, a fully responsive
mobile-first layout, and full **English / Spanish internationalisation** via
locale-prefixed routes.

## Tech Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **next-intl** for i18n (locale-prefixed routing, server-rendered translations)
- **next-themes** for class-based light/dark theming, dark by default
  (`src/app/Providers.tsx`); `suppressHydrationWarning` on the root `<html>` lets
  it set the theme class client-side without a hydration mismatch
- **Tailwind CSS v4** with a custom design-token theme (`src/app/globals.css`)
- **Scroll-reveal** via one shared `IntersectionObserver` + CSS keyframes
  (`src/common/reveal/components/Reveal.tsx`) — no JS animation library
- **CTA / status animations** — pulse-ring halos (`PulseRing`) and a live-status
  ping (`LiveDot`) via shared CSS keyframes in `src/common/animations/`
- **lucide-react** + **@icons-pack/react-simple-icons** for icons
- **next/font** (Plus Jakarta Sans + Inter), `next/image` for optimized assets

## Getting Started

This project uses **pnpm** as its package manager.

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

`pnpm dev` runs the i18n builder in watch mode alongside `next dev`, so edits to the
source copy are recompiled automatically.

### Scripts

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `pnpm dev`        | i18n builder (watch) + dev server                      |
| `pnpm build`      | Compile i18n, then production build                    |
| `pnpm start`      | Serve the production build                             |
| `pnpm i18n:build` | Compile the modular copy into `messages/{locale}.json` |
| `pnpm lint`       | Lint the project                                       |
| `pnpm format`     | Format with Prettier                                   |

## Project Structure

```
i118builder/
  index.ts            # Compiles modular per-namespace JSON → messages/{locale}.json
  messages/           # Source copy, split by (global)/(pages)/(sections) + locale
messages/
  en.json             # Generated — all English copy (do not edit by hand)
  es.json             # Generated — all Spanish copy (same shape as en.json)
src/
  proxy.ts            # next-intl middleware (locale routing) — Next.js 16 name
  app/
    layout.tsx        # Root: <html lang>, fonts, theme Providers
    Providers.tsx     # next-themes wrapper (client)
    SyncLocale.tsx    # Syncs <html lang> to the active locale (client)
    globals.css       # Design tokens (colors, fonts, radii) + utilities
    [locale]/
      layout.tsx      # Localized metadata, NextIntlClientProvider, FloatingContact
      page.tsx        # Home page composition (section order)
      about/page.tsx
      services/page.tsx
      projects/page.tsx
  i18n/
    routing.ts        # Locales, default locale, localePrefix config
    request.ts        # getRequestConfig — loads messages per request
    navigation.ts     # Locale-aware Link / useRouter / usePathname
  common/             # Primitives only (atoms + molecules): Button, ActionButton,
                      #   Text, TextNumber, Title, Section, Media, Avatar, Logo,
                      #   IconBadge, IconCard, Eyebrow, Stars, LiveDot, CheckItem,
                      #   Socials, SectionHeading, Reveal, PulseRing
  shared-sections/    # Organisms reused across ≥2 pages: about, services, projects,
                      #   team, testimonials, contact-form, page-header
  layout/             # App-shell chrome: navbar, footer, floating-contact
  features/           # Organisms used by a single page
    home/             #   Hero, Marquee, Pricing, WhyChoose (+ hero molecules)
    about/            #   Values
    services/         #   ProcessSteps, Faq
    projects/         #   StatsBand
  data/               # Locale-independent presentation data (order, icons, images)
    site.ts           #   Company details (name, phone, email, address)
    blurs.ts          #   Base64 blur placeholders per image type
    global/layout.ts  #   Navbar + floating-contact structure
    pages/            #   Per-page data (home, about, services, projects)
    sections/         #   Shared-section data (about, services, projects, team, reviews)
  global.d.ts         # next-intl type augmentation (Locale + Messages)
  types/assets.d.ts   # Asset / CSS module declarations
```

### Architecture

Components are organised into **role-based tiers** under `src/`. The **tier
folder** (not an internal `organisms/` folder) tells you a component's role;
dependencies point inward (`features → shared-sections / layout → common`).

- **`common/`** — primitives only (atoms + molecules): pure UI, no domain data.
  `Button`, `ActionButton`, `Text`, `TextNumber`, `Title`, `Section`, `Media`,
  `Avatar`, `Logo`, `IconBadge`, `IconCard`, `Eyebrow`, `Stars`, `LiveDot`,
  `CheckItem`, `Socials`, `SectionHeading`, `Reveal`, `PulseRing`.
- **`shared-sections/`** — organisms reused across ≥2 pages: `about`, `services`,
  `projects`, `team`, `testimonials`, `contact-form`, `page-header`.
- **`layout/`** — app-shell chrome mounted in `[locale]/layout.tsx`: `navbar`,
  `footer`, `floating-contact`.
- **`features/<page>/`** — organisms used by a single page: home (`Hero`,
  `Marquee`, `Pricing`, `WhyChoose`), about (`Values`), services
  (`ProcessSteps`, `Faq`), projects (`StatsBand`).

Two rules keep it consistent:

- **Flatten rule** — a slice uses atomic subfolders (`atoms/`, `molecules/`,
  `organisms/`) **only when it genuinely has multiple tiers** (`about`, `navbar`,
  `features/home`). A single-component slice stays flat at `components/X.tsx` —
  the file _is_ the organism, no folder for its own sake.
- **Promotion rule** — an organism is born in `features/<page>`; the moment a
  **second** page needs it, promote it to `shared-sections/`.

The split follows screaming architecture + feature architecture + atomic design.
Each slice keeps its own `components/` (+ `types/`).

### How i18n works

- Routes are locale-prefixed: English is served at `/` and Spanish at `/es`
  (`localePrefix: "as-needed"` in `src/i18n/routing.ts`). `src/proxy.ts` handles
  locale detection and redirects.
- Source copy is split per namespace under `i118builder/messages/`. The builder
  (`pnpm i18n:build`, also run by `dev`/`build`) deep-merges those files into
  `messages/{locale}.json`. **Do not edit `messages/*.json` by hand** — they are
  generated output.
- Components read copy with `getTranslations` (server) or `useTranslations` (client).
  Ordered lists live in `src/data/` with a literal `key`; the text is resolved by
  that key (e.g. `t(\`items.${key}.title\`)`) rather than merged by index. A few flat
arrays (footer links, FAQ, pricing features) are read with `t.raw(...)`.
- ICU placeholders like `{name}` / `{years}` are passed as `t("key", { name, years })`.
- Type safety: `src/global.d.ts` augments next-intl with the generated `en.json`
  shape, and the data keys are literal unions, so `t()` keys are checked at build time.

## Customizing for the Client

- **Content & copy:** edit the per-namespace files under
  `i118builder/messages/**/{en,es}.json`, then rebuild (`pnpm i18n:build`, or just run
  `pnpm dev`). Keep both locales the same shape.
- **Company details:** edit `src/data/site.ts` (name, phone, email, address).
- **Order / icons / images:** edit the matching file in `src/data/` (e.g.
  `sections/services.ts`). Each item's `key` must match the keys used in the copy.
- **Add a language:** add the locale to `src/i18n/routing.ts`, add the matching
  source JSON files, rebuild, and the route is generated automatically.
- **Brand colors / fonts:** edit the `@theme` block in `src/app/globals.css`
  (`--color-primary`, etc.) and the fonts in `src/app/layout.tsx`.
- **Remote images:** add the host to `images.remotePatterns` in `next.config.ts`.

## Pages & Sections

- **Home (`/`):** Hero → marquee strip → About → Services → Why Choose Us →
  Projects → Team → Testimonials → Pricing → Contact → Footer.
- **Services (`/services`):** PageHeader → Services → Process Steps → FAQ → Contact.
- **Projects (`/projects`):** PageHeader → Projects → StatsBand → Testimonials → Contact.
- **About (`/about`):** PageHeader → About → Values → Team → Contact.

Site-wide: a fixed Navbar, a floating quick-contact (WhatsApp + call), and the Footer.

## Deployment

Optimized for Vercel (zero-config). Any Node host works via `pnpm build` +
`pnpm start`. Pages are statically prerendered per locale for a fast first load.
