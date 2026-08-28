# CLAUDE.md — Roofpro (Local Roofing Services)

A multi-page, fully localized (EN `/`, ES `/es`), light/dark, statically prerendered
roofing marketing site on the Next.js 16 App Router (React 19, TypeScript, Tailwind v4,
next-intl v4, next-themes). **See `README.md` for the full stack, routes, folder layout,
content-wiring model, theming, and scripts** — do not duplicate the README.

## Source of Truth

- `README.md` — project documentation and architecture (stack, routes, i18n pipeline,
  theming, scripts, quality gates).
- `.claude/rules/` — coding conventions and implementation rules (architecture, code
  style, components, styling, images, data & i18n, copy).
- `.claude/skills/` — repeatable project workflows (verifying-changes, updating-copy,
  responsive-review).
- `.claude/MEMORY.md` — project decisions, historical context, and pending work.
- `.dependency-cruiser.cjs` — executable authority on architecture/import boundaries,
  verified by `pnpm arch`.

## Key commands

- `pnpm dev` — i18n builder (watch) + Next dev server on :3000.
- `pnpm build` — compile messages, then production build (this is also the type check).
- `pnpm i18n:build` — regenerate the gitignored `messages/{en,es}.json`; required before
  running `tsc` directly.
- `pnpm check` — Knip + dependency-cruiser; `pnpm lint` — ESLint; `pnpm format` — Prettier.
- `pnpm exec playwright test` — full-page visual regression (`e2e/`, port 3100,
  production build).

## Tooling & workflow

- Before considering work done, run **`pnpm check`** and keep it green; UI changes also
  need the visual e2e suite. The full gate order lives in the `verifying-changes` skill.
- Formatting is Prettier (`.prettierrc.mjs`, printWidth 110, with
  `prettier-plugin-tailwindcss` class sorting); ESLint uses the flat config; lint-staged
  runs both on staged files at commit. Match the surrounding style so nothing reformats on
  commit. Knip is configured by `knip.json` (ignores `src/carousel/**` and the embla deps).
- Commit messages follow **Conventional Commits**, enforced by **commitlint** via the
  `commit-msg` **Husky** hook. Commit/push only when explicitly asked.

## Assisted development (MCP)

Development uses external MCP servers as tooling — they are **not** Roofpro dependencies,
so never add packages to `package.json` to represent them:

- **Playwright MCP** — navigation, interaction, and responsive checks.
- **Chrome DevTools MCP** — debugging, inspection, and performance.
