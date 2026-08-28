---
paths:
  - "src/**/*.tsx"
  - "src/app/globals.css"
---

# Styling & Tailwind v4

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
