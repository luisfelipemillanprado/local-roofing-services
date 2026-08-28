# Architecture & tiers

- Components live in **role-based tiers**; the tier folder (not an inner `organisms/`
  folder) sets the role:
  - `common/` — primitives only (atoms + molecules), no domain data.
  - `shared-sections/` — organisms reused by **two or more** routes.
  - `layout/` — app-shell chrome (navbar, footer, floating-contact).
  - `features/<route>/` — organisms used by a **single** route.
  - `carousel/` — self-contained carousel engine (hooks + types), no app-tier imports.
  - `data/` — non-translatable data/metadata; `i18n/` — locale config/helpers;
    `app/` — Next.js routing & page composition.
- **Enforced import boundaries.** The source of truth is `.dependency-cruiser.cjs`, verified
  by `pnpm arch` (do not infer a boundary that isn't there):
  - `common/` must not import from `shared-sections/`, `layout/`, `features/`, or `app/`.
  - `carousel/` must not import from any app tier (`common/`, `shared-sections/`,
    `features/`, `layout/`, `app/`, `data/`, `i18n/`).
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
