---
paths:
  - "**/*.{ts,tsx}"
---

# Code style

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
