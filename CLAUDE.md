# CLAUDE.md — Roofpro (Local Roofing Services)

A multi-page, fully localized (EN `/`, ES `/es`), light/dark, statically prerendered
roofing marketing site on the Next.js 16 App Router (React 19, TypeScript, Tailwind v4,
next-intl v4, next-themes). **See `README.md` for the full stack, routes, folder layout,
content-wiring model, theming, and scripts** — this file is the operating rulebook; do not
duplicate the README.

## Source of Truth

- `README.md` — project documentation and architecture (stack, routes, i18n pipeline,
  theming, scripts, quality gates).
- `CLAUDE.md` (this file) — coding conventions and implementation rules.
- `.claude/MEMORY.md` — project decisions, historical context, and pending work.
- `.dependency-cruiser.cjs` — executable authority on architecture/import boundaries,
  verified by `pnpm arch`.

## Architecture & tiers

- Components live in **role-based tiers**; the tier folder (not an inner `organisms/`
  folder) sets the role:
  - `common/` — primitives only (atoms + molecules), no domain data.
  - `shared-sections/` — organisms reused by **two or more** routes.
  - `layout/` — app-shell chrome (navbar, footer, floating-contact).
  - `features/<route>/` — organisms used by a **single** route.
  - `data/` — non-translatable data/metadata; `i18n/` — locale config/helpers;
    `app/` — Next.js routing & page composition.
- **Enforced import boundaries.** The source of truth is `.dependency-cruiser.cjs`, verified
  by `pnpm arch` (do not infer a boundary that isn't there):
  - `common/` must not import from `shared-sections/`, `layout/`, `features/`, or `app/`.
  - `shared-sections/` and `layout/` must not import from `features/` or `app/`.
  - a `features/<a>/` slice must not import another `features/<b>/`; `features/` must not
    import `app/`.
  - `data/` must not import component runtime from any tier — **`type-only` imports are the
    only allowed exception** (e.g. importing a `*Props`/`*Data` type).
  - no circular dependencies; no unresolvable modules.
- Atomic subfolders (`atoms/`/`molecules/`/`organisms/`) appear **only** when a slice truly
  spans multiple tiers; a single-component slice stays flat at `<slice>/components/X.tsx`.
  Promote an organism from `features/` to `shared-sections/` **only** when a real 2nd route
  consumes it — never create shared abstractions preemptively.
- **i18n build:** `messages/{en,es}.json` are **generated and gitignored**, compiled by
  `i118builder` from the split sources in `i118builder/messages/` (the `(global)`,
  `(sections)`, `(pages)` folders are builder groups, stripped from the namespace). Never
  hand-edit the generated files — edit the split sources and rebuild. The builder is wired
  into `pnpm dev` (watch) and `pnpm build`; run `pnpm i18n:build` before invoking `tsc`
  directly.

## Conventions

### Code style

- **Comments:** English only (never Spanish). Use `/* */` block syntax, never `//` — even
  inline. Keep each to **one terse line** (a phrase, not a sentence); no multi-line blocks,
  no verbose JSDoc.
- **Named exports** are arrow-function consts: `export const X = () => {}` (including
  `async` server components). Keep framework exports idiomatic as declarations:
  `export default function` for page/layout, `export function generateStaticParams` /
  `generateMetadata`.
- Write Tailwind classes **directly on the element**, even when a sibling repeats them;
  don't hoist into a one-off `const`. The only exception is a **variant-map**
  `Record<Key, string>` keyed by a semantic prop (e.g. `Button`'s `variant`).
- **Inline trivial accessors** at the use site (e.g. `ctaHref[variant].href`), even if used
  twice; reserve a `const` for a non-trivial computation (e.g. a `.map` transform).

### Components

- **No `className` / `style` passthrough.** A component owns its styles and exposes
  **semantic props** (`size`, `tone`, `variant`, `weight`) mapped to classes internally.
  Contextual spacing/layout belongs to the parent's markup, never pushed into the child.
- **Types live in a dedicated `types/` folder** (`<slice>/types/index.ts`), imported via
  `@/…/types`. Never inline a component's types; never delete the folder to "simplify".
- **Type-suffix meaning is fixed:** `*Data` is reserved for the `as const` exports in
  `src/data`; component input props are `*Props`; the shape of one **resolved** list-item an
  organism builds is `*Item`. Never put `*Data` on a component interface.
- **Organism vs molecule:** organisms handle positioning, composition, and data resolution
  (including a `.map` that uses `t()` to produce a data array — that's data prep). Any JSX
  **render loop** (`.map` → list/repeated UI) extracts into a molecule that receives the
  already-resolved items.
- **Small fixed set** (e.g. 2 items): discriminate **inline** by an existing `key`/boolean;
  don't add a Record/variant-map or a new data field. Presentation values (colors, bg
  classes) stay in the component, never in the data layer.
- **CTAs:** link-style CTAs use the shared server `Button` (link-only, requires `href`); a
  real action/submit button uses `ActionButton` (`"use client"`). The navbar toggles
  (theme, language, mobile menu, dropdown) stay as their own native `<button>`s — never
  unified.
- **Page composition:** `PageHeader`'s primary CTA targets the `#contact` anchor, and the
  `Contact` section renders `id="contact"`. A full content page that uses `PageHeader` must
  also render `Contact` so the anchor resolves. The two minimal detail routes
  `gallery/[slug]` and `team/[slug]` are the current exception — they render only
  `PageHeader` + media + a back-link and omit `Contact`.

### Styling & Tailwind v4

- Style with the **generated utilities** (`bg-surface-base`, `bg-surface-panel`,
  `text-foreground`, `border-line`, `bg-primary`, `rounded-card`), **not** arbitrary
  `bg-[var(--…)]`. Spacing too: prefer a generated scale unit (`h-104`, not `h-[26rem]`;
  conversion `rem ÷ 0.25 = unit`); reach for `[…]` only when the value is off-scale.
- **Palette colors are primitives:** every color is `--color-<name>` under `@theme`; theme
  blocks and semantic roles **reference** it with `var(--color-x)` — never hardcode an
  `oklch(…)`/hex literal inline.
- **Prefer CSS grid over flex** (`grid place-items-center`, `grid gap-x`,
  `grid-flow-col` / `grid-cols-[auto_1fr]` for icon+text rows). Use flex only when grid
  genuinely doesn't fit; drop now-inert flex-only utils (`shrink-0`) after converting.
- Converting a horizontal flex row to `grid-flow-col`, add **`justify-start`** (grid's
  `justify-content` defaults to stretch and flings the columns apart). Keep
  `justify-items-start` if the mobile single column must stay content-width.
- **Icon color is self-contained:** put the `text-*` on the icon's own className next to its
  size, never inherit it via `currentColor` from a parent. For hover, use `group` on the
  parent + `group-hover:text-*` (with `transition-colors`) on the icon.
- **Conditional-class spacing gotcha:** `prettier-plugin-tailwindcss` trims spaces inside
  quoted class strings, gluing classes together. Put the join space in the **static**
  template text (before `${`) or in an interpolation; prefer `clsx` for multi-part
  composition.
- **No `backdrop-blur` / `backdrop-filter` on in-page content** — it flickers constantly on
  the animated pages. Use an opaque tint (e.g. `bg-white/10`) instead; layer hints
  (`transform-gpu`, `will-change`) make it worse. (The fixed navbar bar and open mobile-menu
  overlay keep theirs — approved exception.)

### Images

- User-provided images are always **`.webp`** — reference paths with `.webp`, never
  `.jpg`/`.png`.
- Every `next/image` uses **`fill`** inside a relatively-positioned, sized container — never
  bare `width`/`height`. Always pass `sizes`; `object-contain` for logos/badges,
  `object-cover` for photos.
- Every `<Image>` sets **`placeholder="blur"` + `blurDataURL`** — no exceptions, including
  the logo. Reference a key from `src/data/blurs.ts`; prefer reusing the `Media` primitive,
  which already bakes the blur.

### Data & i18n

- **LAW — i18n holds only translatable text.** Numbers, values (`"98%"`, `"25+"`), hrefs and
  image paths never live in i18n; they go in `src/data/`. Stats put `{ key, value }` in data
  and keep only the `label` in i18n.
- **LAW — every data entry mapping to i18n carries an explicit `key`** naming the linkage;
  the component **reads** it (`t(item.key)`) and never fabricates it from a prop/variant
  (no ``t(`action.${variant}`)``). Covers CTAs, list items, form input label/placeholder
  keys, and hero-band widget labels. Section headings (`eyebrow`, `titleLead`,
  `description`) and `imageAlt` stay direct `t()` — they belong to no data entity.
- **Data ↔ i18n link by semantic `key`/`slug`, never by array index.** `key` and `slug` are
  data identity and live in `src/data/`.
- **CTA naming:** link CTA data field = **`ctaHref`**, real button = **`cta`**; each bundles
  **`{ key, href }`** (`href` omitted for a non-navigating submit). The i18n group is a
  **synonym** (namespace `action`), never the same word as the data field. Rendered CTA
  texts live in that `action` group, named by the action offered (`action.contact`,
  `action.viewDetails`).
- **Highlight via data flag:** feature/emphasize an item with a boolean named
  **`highlighted`** (same name for the data field, the component prop, and any vars) — never
  by array index. Presentational primitives just receive the flag.
- **`t.raw(...)`** is only for translation entries that are genuinely structured (arrays /
  nested objects consumed as data), not for plain strings. ICU placeholders are passed as
  args: `t("key", { name, years })`.
- **Keep data files simple:** `as const` data plus at most a hand-written literal union
  (e.g. `type ServiceKey = "gutters" | …`). No derived-type gymnastics or compile-time
  guards for accepted risks — data↔i18n key drift is a normal, acceptable risk.

### Copy

- **No hyphens or dashes** (`-`, `–`, `—`) in card or page-header title/description copy —
  reword ("Standing-seam" → "Standing seam").
- **Uniform word counts per field**, matched across every item of a section in **both**
  locales (e.g. team card descriptions 5 words, pitch card descriptions 15, testimonial
  quotes 25 words in 2 sentences, shared-section descriptions 21). Person names use the
  format **`First N. Last`**.
- Section **`eyebrow` copy ends with a period** (both locales); titles do not. It rolls out
  per section as each is reviewed — don't bulk-add it elsewhere or strip it from sections
  that already have it.
- **Translate EN/ES by sense**, not word-for-word — natural per-language adaptation
  (idiom, length, structure) is expected. Flag genuine **sense** divergence, not
  non-literal-but-correct pairs.

## Tooling & workflow

- Before considering work done, run **`pnpm check`** (Knip + dependency-cruiser) and keep
  both green: Knip flags dead files/exports/deps; dependency-cruiser enforces the boundaries
  above. Knip needs no `knip.json` (entry points are auto-detected).
- Code is formatted by **Prettier** (with `prettier-plugin-tailwindcss` class sorting) and
  linted by **ESLint** (flat config); **lint-staged** runs both on staged files at commit.
  Match the surrounding style so nothing reformats on commit.
- Commit messages follow **Conventional Commits**, enforced by **commitlint** via the
  `commit-msg` **Husky** hook. Commit/push only when explicitly asked.

## Assisted development (MCP)

Development uses external MCP servers as tooling — they are **not** Roofpro dependencies, so
never add packages to `package.json` to represent them:

- **Playwright MCP** — navigation, interaction, and responsive checks.
- **Chrome DevTools MCP** — debugging, inspection, and performance.
