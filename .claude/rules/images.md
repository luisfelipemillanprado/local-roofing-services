---
paths:
  - "src/**/*.tsx"
  - "src/data/**/*.ts"
---

# Images

- User-provided images are always **`.webp`** — reference paths with `.webp`, never
  `.jpg`/`.png`.
- Every `next/image` uses **`fill`** inside a relatively-positioned, sized container — never
  bare `width`/`height`. Always pass `sizes`; `object-contain` for logos/badges,
  `object-cover` for photos.
- Every `<Image>` sets **`placeholder="blur"` + `blurDataURL`** — no exceptions, including
  the logo. Reference a key from `src/data/blurs.ts`; prefer reusing the `Media` primitive,
  which already bakes the blur.
