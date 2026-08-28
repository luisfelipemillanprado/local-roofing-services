---
name: verifying-changes
description: Use when a Roofpro change is about to be declared done, before committing, when quality gates or the build need to run, or when visual snapshots must be checked or updated after UI changes.
---

# Verifying Changes

Run the project quality gates in order. A change is not done until every applicable gate
is green.

## Gates (in order)

1. **`pnpm i18n:build`** — regenerates `messages/{en,es}.json`. Required before any
   type-sensitive step: `src/global.d.ts` and `src/i18n/request.ts` reference the generated
   files, so `tsc`/`next build` fail without them.
2. **`pnpm lint`** — ESLint flat config (`eslint-config-next` + `eslint-config-prettier`).
3. **`pnpm check`** — Knip (dead files/exports/deps) + dependency-cruiser (tier
   boundaries, no cycles, no unresolvable). Both must stay green. `knip.json` intentionally
   ignores `src/carousel/**` and the embla dependencies.
4. **`pnpm build`** — compiles messages, then the production build (this is also the
   TypeScript check; there is no standalone typecheck script).
5. **Visual e2e** — only when UI/styling/copy changed:

   ```bash
   pnpm exec playwright test
   ```

   Runs full-page screenshot regression (5 routes × EN/ES × desktop 1280×800 + Pixel 7)
   against a production build on **port 3100**. Baselines live in
   `e2e/__screenshots__/{desktop,mobile}/`.

6. **Smoke check** — with a server running, `/` and `/es` must return 200:

   ```bash
   curl -s -o /dev/null -w "/ → %{http_code}\n" http://localhost:3000/
   curl -s -o /dev/null -w "/es → %{http_code}\n" http://localhost:3000/es
   ```

## Updating visual baselines

Only when a visual change is intentional and already reviewed on screen:

```bash
pnpm exec playwright test --update-snapshots
```

Then inspect the changed PNGs in `e2e/__screenshots__/` before committing them. Never
update baselines to silence a diff you have not explained.

## Gotchas

- The dev server on **:3000** is used by MCP browser tooling; e2e uses **:3100** so they
  never collide. Do not kill :3000 to run tests.
- `messages/*.json` are generated and gitignored — a red `tsc` complaining about them
  means step 1 was skipped, not a real type error.
- Commit/push only when explicitly asked; commitlint enforces Conventional Commits.
