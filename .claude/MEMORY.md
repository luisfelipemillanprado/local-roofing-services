# Roofpro — Project Memory

Project decisions, historical context, and pending work. Conventions live in
`.claude/rules/`; workflows in `.claude/skills/`.

## Current Project State

- The navbar `Areas` entry is still a placeholder until the `/areas` page exists.
- Footer privacy and terms links are still placeholders until those pages exist.
- `ServiceAreas` currently exists as a section on service detail pages.

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

- The previous Pitch i18n exception is obsolete. Pitch chip values were moved to
  `src/data`; only genuinely translatable content remains in i18n.
