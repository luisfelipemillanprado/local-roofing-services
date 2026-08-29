# Roofpro — Local Roofing Services Website

A marketing website for a roofing company, built on the Next.js 16 App Router. It is a
multi-page, multi-slug experience (Home, Services, Shop, Gallery, About, plus per-service,
per-product, per-project and per-team-member detail pages), fully localized (English at
`/`, Spanish at `/es`), light/dark themed, statically prerendered, and responsive.

The coding conventions Claude follows in this repo are documented in
[`CLAUDE.md`](CLAUDE.md).

## Tech Stack

- **Next.js 16** — App Router + Turbopack, React 19, TypeScript, SSG.
- **Tailwind CSS v4** — CSS-first config in [`src/app/globals.css`](src/app/globals.css)
  (`@theme`, `@theme inline`, `@layer base`, `@utility`, `@custom-variant`).
- **next-intl v4** — locale routing (`localePrefix: "as-needed"`), server/client
  translations, message keys type-checked via [`src/global.d.ts`](src/global.d.ts).
- **next-themes** — class-based light/dark with **dark as the default** (`enableSystem: false`).
- **lucide-react** + **@icons-pack/react-simple-icons** for icons, **next/font**
  (Plus Jakarta Sans + Inter), **next/image** (AVIF/WebP), **clsx** for class composition.
- **Tooling** — **Knip** (dead code), **dependency-cruiser** (architecture), **ESLint**
  (flat config), **Prettier** (+ `prettier-plugin-tailwindcss`), **Husky** + **lint-staged**,
  **commitlint** (conventional commits).
- **pnpm** (`packageManager: pnpm@10.33.0`) as the package manager; a custom i18n builder
  (`i118builder`) runs on `tsx`.

## Architecture

The codebase follows **Feature-Sliced** + **Atomic Design**, organized into role-based
tiers. A slice's **tier folder** (not an inner `organisms/` folder) determines the role:

- `common/` — reusable primitives (atoms + molecules); no domain data.
- `shared-sections/` — organisms reused by **two or more** routes.
- `layout/` — app-shell chrome (navbar, footer, floating-contact).
- `features/<route>/` — organisms specific to a **single** route.
- `carousel/` — self-contained carousel engine (hooks + types).
- `data/` — non-translatable data and metadata (company facts, image paths, icons, keys).
- `i18n/` — internationalization config and helpers.
- `app/` — Next.js routing and page composition.

### Enforced boundaries

Architectural boundaries are defined and verified by
[`.dependency-cruiser.cjs`](.dependency-cruiser.cjs) and checked with `pnpm arch`
(which cruises `src` and `i118builder`). The rules currently enforced are:

- `common/` must not import from `shared-sections/`, `layout/`, `features/`, or `app/`.
- `carousel/` must not import from any app tier (`common/`, `shared-sections/`,
  `features/`, `layout/`, `app/`, `data/`, `i18n/`).
- `shared-sections/` must not import from `features/` or `app/`.
- `layout/` must not import from `features/` or `app/`.
- A `features/<a>/` slice must not import from another `features/<b>/`.
- `features/` must not import from `app/`.
- `data/` must not import component runtime from any tier; **`type-only`** imports into
  those layers are allowed (e.g. importing a `*Props`/`*Data` type).
- No circular dependencies.
- No unresolvable modules.

`.dependency-cruiser.cjs` resolves the `@/*` alias through `tsconfig.json` and follows
type-only imports so the `data/` exception can be judged. When a boundary is in doubt,
that file and `pnpm arch` are the source of truth — do not infer a rule that isn't there.

### Component organization

- Do **not** create `atoms/`/`molecules/`/`organisms/` subfolders by default. They appear
  only when a slice genuinely spans multiple tiers; a single-component slice stays flat at
  `<slice>/components/X.tsx`.
- Promote a component from `features/` to `shared-sections/` only when a **real** second
  route consumes it. Do not create shared abstractions preemptively.

```
i118builder/
  index.ts                       # builder: compiles split sources → messages/{en,es}.json
  messages/
    (global)/                    # navbar, footer, metadata, floating-contact
    (sections)/                  # about, contact, faq, marquee, page-header, pitch,
                                 #   pricing, product, project, service, service-area,
                                 #   team, testimonial
    (pages)/                     # about-page, projects-page, service-detail,
                                 #   services-page, shop-page
messages/{en,es}.json            # GENERATED (gitignored) — never edit by hand

src/
  app/
    layout.tsx                   # <html>, fonts, viewport, <Providers> (theme)
    Providers.tsx                # next-themes provider, above [locale]
    SyncLocale.tsx               # syncs <html lang> on the client
    globals.css                  # design tokens + base layer + custom utilities
    [locale]/
      layout.tsx                 # locale guard, metadata, floating contact
      page.tsx                   # Home                → /            (and /es)
      services/page.tsx          # Services            → /services
      services/[slug]/page.tsx   # Service detail      → /services/:slug   (SSG)
      shop/page.tsx              # Shop catalog        → /shop
      shop/[slug]/page.tsx       # Product detail      → /shop/:slug       (SSG)
      gallery/page.tsx           # Project gallery     → /gallery
      gallery/[slug]/page.tsx    # Project detail      → /gallery/:slug    (SSG)
      about/page.tsx             # About               → /about
      team/[slug]/page.tsx       # Team member detail  → /team/:slug       (SSG)
  common/<slice>/components/            # primitives (Button, ActionButton, Media, …)
  shared-sections/<slice>/components/   # organisms reused by ≥2 routes (services, pitch, …)
  layout/<slice>/components/            # app-shell chrome (navbar, footer, floating-contact)
  features/<route>/components/          # route-only organisms (shop, service-detail, projects)
  carousel/                      # self-contained carousel engine (hooks + types)
  data/
    site.ts                      # company facts (company)
    blurs.ts                     # blur placeholders for next/image
    global/layout.ts             # navbar / footer / floating-contact shell data
    shared-sections/<section>.ts # per-section metadata (icons, image paths, keys)
    pages/<route>.ts             # route-specific section data (service-detail)
    shop/<file>.ts               # shop catalog + product-detail data
  i18n/
    routing.ts                   # locales, defaultLocale, localePrefix: "as-needed"
    request.ts                   # getRequestConfig (loads the generated messages)
    navigation.ts                # locale-aware Link / usePathname / useRouter
    metadata.ts                  # locale-aware page metadata helpers
  proxy.ts                       # Next.js 16 middleware (next-intl routing)
  global.d.ts                    # augments next-intl with the generated en.json shape
```

## Content model & i18n

Non-translatable data lives in `src/data/`; translatable copy lives in `i118builder/`.
The two are linked by **semantic keys**, never by array index.

- `key` and `slug` are data identity — they belong to `src/data/`.
- **i18n holds only translatable text.** Numbers, prices, hrefs/URLs, paths, icons, images
  and other non-translatable metadata never live in i18n; they stay in `src/data/`.
- Components resolve copy with ``t(`${item.key}.title`)``.
- `t.raw(...)` is reserved for translation entries that are genuinely structured (arrays /
  nested objects consumed as data), not for plain strings.
- ICU placeholders are passed as arguments: `t("key", { name, years })`.
- [`src/global.d.ts`](src/global.d.ts) augments next-intl with the generated `en.json`
  shape, so message keys are type-checked at build time.

### The i18n build pipeline

```
i118builder/messages/  →  i118builder/index.ts  →  messages/{en,es}.json  →  next-intl
```

- **Sources** are the split JSON under `i118builder/messages/`, one file per locale
  (`en.json`, `es.json`) inside each namespace folder — these are what you edit.
- [`i118builder/index.ts`](i118builder/index.ts) collects every `*.json`, **strips folder
  segments wrapped in parentheses** (`(global)`, `(sections)`, `(pages)` are organizational
  groups and do **not** appear in the namespace), nests the remaining segments, deep-merges
  per locale, and writes `messages/<locale>.json`. So `(sections)/service/en.json` →
  namespace `service`; `(pages)/shop-page/en.json` → namespace `shop-page`.
- `messages/en.json` and `messages/es.json` are **generated and gitignored** (also in
  `.prettierignore`). **Do not edit them by hand** — edit the split sources and rebuild.
- Rebuild with `pnpm i18n:build` (one-shot) or `pnpm dev` (watch mode). The builder is
  wired ahead of `next build`, and next-intl loads the generated file for the active locale
  via [`src/i18n/request.ts`](src/i18n/request.ts).
- **To add a locale:** add the `<locale>.json` sources under `i118builder/messages/`
  (mirroring the existing folder structure) and register the locale in
  [`src/i18n/routing.ts`](src/i18n/routing.ts).

## Routes & pages

Every page renders a fixed **Navbar** and **Footer**; the floating quick-contact
(WhatsApp + call) is mounted once in the locale layout. Shared sections adapt via props
(`variant`, `limit`, `tone`) rather than duplication; `PageHeader` is the hero band on
every route, and `Pitch` renders three variants (`why-choose`, `process`, `values`).

- **Home (`/`):** PageHeader → Marquee → About → Services → Why Choose Us (Pitch) →
  Projects → Team → Testimonials → Pricing → Products → Contact.
- **Services (`/services`):** PageHeader → Marquee → Services → Process (Pitch) →
  Testimonials → FAQ → Products → Contact.
- **Service detail (`/services/[slug]`):** PageHeader → Marquee → ServiceOverview →
  ServiceProcess → FAQ → ServiceAreas → Products → Contact.
- **Shop (`/shop`):** PageHeader → Marquee → ShopCatalog (search / category / filter /
  sort) → Contact.
- **Product detail (`/shop/[slug]`):** PageHeader → Marquee → ProductDetail →
  RelatedProducts → Contact.
- **Gallery (`/gallery`):** PageHeader → Marquee → Projects → CaseStudy → Testimonials →
  FAQ → Products → Contact.
- **Project detail (`/gallery/[slug]`):** PageHeader → project image + back link.
- **About (`/about`):** PageHeader → Marquee → About → Values (Pitch) → Team →
  Testimonials → FAQ → Products → Contact.
- **Team detail (`/team/[slug]`):** PageHeader → member image + back link.

The dynamic routes — `services/[slug]`, `shop/[slug]`, `gallery/[slug]`, `team/[slug]` —
enumerate a **fixed** set of valid slugs from `src/data/` via `generateStaticParams` and set
`dynamicParams = false`, so any unknown slug 404s. There is no free-form slug generation.

> The navbar's **Areas** entry (`/areas`) and the footer's legal links (privacy / terms) are
> placeholders pending their pages. `ServiceAreas` currently ships as a section on
> service-detail pages.

## Theming

Theming is CSS-first in [`src/app/globals.css`](src/app/globals.css):

- Brand colors are **primitives** declared as `--color-<name>` under `@theme`.
- Runtime semantic roles (`--surface-base`, `--surface-panel`, `--surface-muted`,
  `--foreground`, `--foreground-muted`, `--line`) reference those primitives; `@theme inline`
  aliases them to generated color utilities (`bg-surface-panel`, `text-foreground`,
  `text-foreground-muted`, `border-line`, `bg-primary`…).
- **Dark is the default** — the roles are defined on `:root` (and `.theme-dark`, which pins
  dark on a subtree such as the navbar); `.light` overrides the runtime variables. The
  `dark:` variant is defined with `@custom-variant`.
- Base resets live in `@layer base`, component classes in `@layer components`, and custom
  utilities (e.g. hero overlays) are declared with `@utility`.

Style components with the existing semantic utilities/tokens; do not hand-roll
`bg-[var(--…)]` / `text-[var(--…)]` when a matching utility already exists.

## Accessibility

The UI follows a consistent set of accessibility conventions (the enforced list lives in
[`.claude/rules/accessibility.md`](.claude/rules/accessibility.md)):

- **Semantic landmarks** throughout — `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`,
  `<article>` for cards, and `<figure>`/`<blockquote>` for testimonials and the viewer.
- **Heading hierarchy** via the `Title` component's `as` prop: one `h1` per page, `h2` for
  section headings, `h3` for card and panel titles (size is a separate prop).
- **Icon-only controls** carry an i18n `aria-label`; purely decorative icons are
  `aria-hidden`.
- **Reduced motion** is honored in both CSS (the `prefers-reduced-motion` block in
  `globals.css`) and JS (carousel autoplay guards on `matchMedia`).
- **`<html lang>`** tracks the active locale, and forms label inputs via `htmlFor`/`id`.

Known gaps still open (focus-visible rings, dialog focus trapping, `aria-current`, a skip
link) are tracked in the `accessibility-review` skill and in `.claude/MEMORY.md`.

## Getting Started

Requires Node.js and pnpm (`corepack enable` picks up the pinned `pnpm@10.33.0`). Manage
dependencies with **pnpm**, not npm or yarn.

```bash
pnpm install
pnpm dev      # i18n builder (watch) + next dev → http://localhost:3000
```

`messages/{en,es}.json` are generated and gitignored; `pnpm dev` and `pnpm build` run the
i18n builder first, so a clean clone works without a separate build step.

### Scripts

| Command             | Description                                               |
| ------------------- | --------------------------------------------------------- |
| `pnpm dev`          | i18n builder (watch) + Next dev server, concurrently      |
| `pnpm build`        | Compile messages, then production build                   |
| `pnpm start`        | Serve the production build                                |
| `pnpm i18n:build`   | Compile `messages/{en,es}.json` from the split sources    |
| `pnpm lint`         | ESLint (flat config)                                      |
| `pnpm format`       | Format the repo with Prettier                             |
| `pnpm format:check` | Check formatting without writing                          |
| `pnpm knip`         | Report unused files, dependencies and exports             |
| `pnpm arch`         | Enforce architecture boundaries + no cycles (dep-cruiser) |
| `pnpm check`        | Run `knip` and `dependency-cruiser` together              |

## Quality gates

- **`pnpm knip`** flags unused files, dependencies and exports. Entry points (Next.js
  pages, `src/proxy.ts`, `src/i18n/request.ts`, the `i118builder`) are auto-detected;
  [`knip.json`](knip.json) only adds ignores for `src/carousel/**`, `.claude/**`
  (Claude Code tooling) and the embla dependencies.
- **`pnpm arch`** ([`.dependency-cruiser.cjs`](.dependency-cruiser.cjs)) validates the tier
  boundaries listed above plus no-circular and no-unresolvable, resolving `@/*` through
  `tsconfig.json`.
- **`pnpm check`** runs Knip and dependency-cruiser together.
- **`pnpm exec playwright test`** runs full-page visual regression
  ([`playwright.config.ts`](playwright.config.ts), specs in `e2e/`): 5 routes × EN/ES ×
  desktop/mobile against a production build on port 3100, with baselines in
  `e2e/__screenshots__/`. Update intentional changes with `--update-snapshots`.
- **`pnpm lint`** uses the ESLint flat config
  ([`eslint.config.mjs`](eslint.config.mjs)): `eslint-config-next` plus
  `eslint-config-prettier` last.
- **`pnpm format` / `format:check`** run Prettier, configured by
  [`.prettierrc.mjs`](.prettierrc.mjs) (printWidth 110, double quotes, semicolons, trailing
  commas) with `prettier-plugin-tailwindcss` sorting class lists against
  `src/app/globals.css`. `.prettierignore` excludes build output, `node_modules`, the
  generated `messages/*.json`, and the lockfile.
- **Git hooks (Husky,** bootstrapped by the `prepare` script**):** `pre-commit` runs
  **lint-staged** (Prettier on `*.{css,json,md}`; Prettier + `eslint --fix` on
  `*.{js,jsx,ts,tsx,mjs,cjs}`); `commit-msg` runs **commitlint**
  (`@commitlint/config-conventional`).

There is no standalone typecheck script; TypeScript is checked as part of `next build`.
If you invoke `tsc` directly, run `pnpm i18n:build` first so the generated `messages/*.json`
(referenced by `src/global.d.ts` and `src/i18n/request.ts`) exist.

## Customizing for the Client

- **Copy / translations:** edit the split JSON in `i118builder/messages/`. Adding a locale:
  see [Content model & i18n](#content-model--i18n).
- **Company details:** edit `company` in [`src/data/site.ts`](src/data/site.ts) (name,
  phone, WhatsApp, email, address, figures).
- **Section content (icons / images / keys):** edit `src/data/shared-sections/*`,
  `src/data/pages/*` and `src/data/shop/*`.
- **Navigation & shell:** edit [`src/data/global/layout.ts`](src/data/global/layout.ts)
  (navbar links, footer columns, floating-contact actions).
- **Brand colors / fonts:** edit the `@theme` block in
  [`src/app/globals.css`](src/app/globals.css) and the fonts in
  [`src/app/layout.tsx`](src/app/layout.tsx).
- **Photography:** drop `.webp` images into `public/images/` and update the paths in
  `src/data/`. Output formats (AVIF/WebP) are configured in
  [`next.config.ts`](next.config.ts).

### Before launch

The template ships with placeholder data that must be replaced with the client's real
values:

- **Placeholder links (`#`) in [`src/data/site.ts`](src/data/site.ts):** social profiles and
  the WhatsApp number (`whatsappHref`).
- **Sample company facts** (name, phone, email, address, figures) in the same file.
- **Builder credit (`#`)** in [`src/data/global/layout.ts`](src/data/global/layout.ts)
  (`footer.builder`).
- **Contact form email:** the form posts to `src/app/api/contact/route.ts` (Node.js
  runtime) which sends through Amazon SES. It works in dev without config; set `AWS_REGION`,
  `SES_FROM`, and `CONTACT_TO` (see [`.env.example`](.env.example)) and verify an SES
  identity to activate real delivery. Hardening: honeypot, time-trap, origin check, and an
  in-memory rate limit (swap for Upstash/Vercel KV in production).
- **Shop product detail** is scaffolding: `src/data/shop/product-detail.ts` shares one set
  of placeholder values across every product, and `ProductTabs` renders placeholder bodies.

## Deployment

Optimized for Vercel (zero-config); any Node host works via `pnpm build` + `pnpm start`.
The known routes and every slug enumerated by `generateStaticParams` are statically
prerendered for the supported locales (`en`, `es`).

## Development notes

Development is assisted by Claude Code. [`CLAUDE.md`](CLAUDE.md) is the entry point; coding
conventions live in [`.claude/rules/`](.claude/rules/) (architecture, code style,
components, styling, images, data & i18n, copy, accessibility) and repeatable workflows in
[`.claude/skills/`](.claude/skills/) (verifying-changes, updating-copy, responsive-review,
accessibility-review). Browser-facing checks use MCP servers as development-time tooling —
Playwright for navigation, interaction and responsive checks, and Chrome DevTools for
debugging, inspection and performance. These are not project dependencies.
