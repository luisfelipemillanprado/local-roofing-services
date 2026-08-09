# Roofpro — Project Memory

## Source of Truth

- `README.md` is the source of truth for project documentation and architecture.
- `CLAUDE.md` is the source of truth for coding conventions and implementation rules.
- `.claude/MEMORY.md` stores project decisions, historical context, and pending work.

## Current Project State

- The navbar `Areas` entry is still a placeholder until the `/areas` page exists.
- Footer privacy and terms links are still placeholders until those pages exist.
- `ServiceAreas` currently exists as a section on service detail pages.
- `StatsBand` on `/projects` is scheduled for removal.

## Browser Tooling

- Playwright and Chrome DevTools MCP are development time tools only.
- They are used for browser navigation, interaction, responsive validation, debugging,
  inspection, and performance checks.
- They are not application dependencies.

## Important Decisions

- `PageHeader` is the shared hero band used across routes.
- Detail routes use fixed slugs from `src/data/` with `generateStaticParams` and
  `dynamicParams = false`.

## Resolved Historical Notes

- There is no dedicated Prettier configuration file. Prettier uses its defaults together
  with `prettier-plugin-tailwindcss`.
- The previous Pitch i18n exception is obsolete. Pitch chip values were moved to
  `src/data`; only genuinely translatable content remains in i18n.
