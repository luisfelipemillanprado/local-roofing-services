# Data & i18n

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
