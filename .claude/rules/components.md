---
paths:
  - "src/**/*.tsx"
---

# Components

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
