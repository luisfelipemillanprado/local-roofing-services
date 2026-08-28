---
name: updating-copy
description: Use when adding, editing, translating, or reviewing EN/ES site copy or i18n messages, when wiring new translatable content to data entries, or when checking locale parity.
---

# Updating Copy

All translatable text lives in the split sources under `i118builder/messages/`; the
`messages/{en,es}.json` files are generated and gitignored — never edit them.

## Locating the right source file

Namespaces map to folders; parenthesized group folders are stripped from the namespace:

| Namespace   | Source folder                              |
| ----------- | ------------------------------------------ |
| `navbar`    | `i118builder/messages/(global)/navbar/`    |
| `service`   | `i118builder/messages/(sections)/service/` |
| `shop-page` | `i118builder/messages/(pages)/shop-page/`  |

Each namespace folder holds one `en.json` and one `es.json`.

## Workflow

1. Find the namespace folder for the section/page being edited.
2. Edit **both** `en.json` and `es.json` in the same change — never one locale alone.
3. If the copy belongs to a data entity (CTA, list item, stat label, form field), the
   linking `key` lives in `src/data/` and the message key must match it. Add/update the
   data entry first, then the messages (see the data-and-i18n rule).
4. Apply the copy constraints from `.claude/rules/copy.md`: no hyphens/dashes in
   title/description copy, uniform word counts per field across all items in both locales,
   eyebrow ends with a period, translate by sense.
5. Rebuild and check parity:

   ```bash
   pnpm i18n:build
   node .claude/skills/updating-copy/scripts/check-parity.mjs
   ```

6. `pnpm build` — message keys are type-checked against the generated `en.json` shape via
   `src/global.d.ts`, so a missing/renamed key fails here.

## Reviewing existing copy

When asked to review copy rather than write it, sweep section by section and report:

- word-count drift between items of the same field, in either locale;
- EN/ES **sense** divergence (flag meaning changes, not non-literal phrasing);
- hyphens/dashes in titles or descriptions;
- values, numbers, or hrefs living in i18n that belong in `src/data/`.

## Adding a locale

Add `<locale>.json` files mirroring the existing folder structure under
`i118builder/messages/`, then register the locale in `src/i18n/routing.ts`.
