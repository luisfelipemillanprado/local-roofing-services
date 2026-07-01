# Roofpro — Local Roofing Services Website

A professional, high-performance marketing site for a roofing company, built on the
Next.js App Router. Multi-page experience (Home, Services, Projects, About) that is
fully localized (English / Spanish), light/dark themed, statically prerendered, and
responsive down to device-specific mobile breakpoints.

## Tech Stack

- **Next.js 16** — App Router + Turbopack, React 19, TypeScript, SSG.
- **Tailwind CSS v4** — CSS-first config in [`src/app/globals.css`](src/app/globals.css)
  (`@theme` tokens, generated utilities, `@layer base`, `@utility`).
- **next-intl v4** — locale routing (`/` for English, `/es` for Spanish),
  server/client translations, type-safe message keys.
- **next-themes** — class-based light/dark with **dark as the default**.
- **lucide-react** + **@icons-pack/react-simple-icons** — icons. **next/font**
  (Plus Jakarta Sans + Inter), **next/image**.
- **pnpm** — package manager. Custom i18n builder (`i118builder`) on `tsx`.

## Architecture

The codebase is organized with **Feature-Sliced** + **Atomic Design** into
role-based tiers. A component's **tier folder** (not an internal `organisms/`
folder) tells you its role, and dependencies point inward
(`features → shared-sections / layout → common`):

- `common/` — primitives only (atoms + molecules), no domain data.
- `shared-sections/` — organisms reused by **two or more** routes.
- `layout/` — app-shell chrome (navbar, footer, floating-contact).
- `features/<route>/` — organisms used by a **single** route.

Atomic subfolders (`atoms/`/`molecules/`/`organisms/`) appear only when a slice
genuinely has multiple tiers; a single-component slice stays flat at
`components/X.tsx`. An organism born in a feature is promoted to `shared-sections/`
the moment a second route needs it.

```
i118builder/
  index.ts                       # builder: compiles split messages → messages/{en,es}.json
  messages/
    (global)/                    # navbar, footer, metadata, floating-contact
    (sections)/                  # shared sections: service, project, review, team, about, form-contact
    (pages)/                     # route-specific: home/*, services-page, projects-page, about-page
messages/{en,es}.json            # GENERATED (gitignored), consumed by next-intl

src/
  app/
    layout.tsx                   # ThemeProvider, fonts
    [locale]/
      layout.tsx                 # locale guard, metadata, SyncLocale, floating contact
      page.tsx                   # Home          → /        (and /es)
      services/page.tsx          # Services      → /services
      projects/page.tsx          # Projects      → /projects
      about/page.tsx             # About         → /about
    globals.css                  # design tokens + base layer + custom utilities
  common/<slice>/components/            # primitives (Button, Text, Media, Reveal, …)
  shared-sections/<slice>/components/   # organisms reused by ≥2 routes (services, team, …)
  layout/<slice>/components/            # app-shell chrome (navbar, footer, floating-contact)
  features/<route>/components/          # route-only organisms (Hero, Pricing, Faq, …)
  data/
    site.ts                      # locale-independent company details
    blurs.ts                     # generic blur placeholders for next/image
    sections/<section>.ts        # metadata (icons, image paths, semantic keys) for shared sections
    pages/<route>.ts             # page composition + route-specific section data
  i18n/
    routing.ts                   # locales, defaultLocale, localePrefix: "as-needed"
    request.ts                   # getRequestConfig (loads generated messages)
    navigation.ts                # locale-aware Link / navigation helpers
  proxy.ts                       # Next.js 16 middleware (next-intl routing)
```

### How content is wired

Data and translations are linked by **semantic keys** (e.g. `metalRoofing`), never by
array index — this removes the positional-alignment fragility:

- Non-translatable metadata (icons, image paths, flags) + a `key` live in `src/data/`.
- Translatable copy lives in split JSON under `i118builder/messages/`, keyed by the
  same names. The builder strips the `(group)` folders and nests the rest, so
  `(pages)/home/hero/` → namespace `home.hero`, `(sections)/service/` → `service`.
- Components iterate the data array and resolve text with `t(\`${item.key}.title\`)`.

### Theming

Brand palette and semantic roles are declared in `globals.css`. Static tokens go in
`@theme` (`--color-primary`, `--radius-card`, `--animate-marquee`, breakpoints); the
theme-aware surface/text roles are aliased in `@theme inline` so the generated
utilities (`bg-surface-panel`, `text-foreground`, `border-line`…) track the active
theme. `:root` (and `.theme-dark`, pinning dark on a subtree) is
the dark theme; `.light` overrides the runtime variables. Components style with the
**generated utilities**, not arbitrary `bg-[var(--…)]` values.

## Getting Started

```bash
pnpm install
pnpm dev      # builds messages in watch mode + next dev → http://localhost:3000
```

### Scripts

| Command           | Description                                            |
| ----------------- | ------------------------------------------------------ |
| `pnpm dev`        | i18n builder (watch) + Next dev server, concurrently   |
| `pnpm build`      | Compile messages, then production build                |
| `pnpm start`      | Serve the production build                             |
| `pnpm lint`       | Lint the project                                       |
| `pnpm i18n:build` | Compile `messages/{en,es}.json` from the split sources |

> Note: `messages/{en,es}.json` are generated and gitignored. The builder must run
> before `next build`/typecheck — this is already wired into `dev` and `build`.

## Customizing for the Client

- **Copy / translations:** edit the split JSON in `i118builder/messages/`. To add a
  locale, extend `locales` in [`src/i18n/routing.ts`](src/i18n/routing.ts) and add the
  matching `{locale}.json` files.
- **Company details:** edit [`src/data/site.ts`](src/data/site.ts) (name, phone,
  WhatsApp, email, address).
- **Section content (icons / images / keys):** edit `src/data/sections/*` and
  `src/data/pages/*`.
- **Brand colors / fonts:** edit the `@theme` block in
  [`src/app/globals.css`](src/app/globals.css) and the fonts in
  [`src/app/layout.tsx`](src/app/layout.tsx).
- **Photography:** drop images into `public/images/` and update the paths in
  `src/data/`. For remote images, add the host to `images.remotePatterns` in
  [`next.config.ts`](next.config.ts).

## Deployment

Optimized for Vercel (zero-config). Any Node host works via `pnpm build` + `pnpm start`.
All routes are statically prerendered (SSG) for both locales.
