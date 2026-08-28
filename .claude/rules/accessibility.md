---
paths:
  - "src/**/*.tsx"
  - "src/app/globals.css"
---

# Accessibility

These are the established, non-negotiable a11y conventions already applied across the
codebase. New or edited components must keep them; auditing existing ones is the
`accessibility-review` skill.

- **Icon-only interactive controls carry an `aria-label`** sourced from i18n (never a
  hardcoded string). Applies to every button/link without visible text — theme and language
  toggles, mobile-menu trigger, viewer controls, floating contact actions, arrow links,
  quantity steppers, search box, gallery thumbnails, product swatches, logo (`"… home"`),
  socials.
- **Decorative graphics are `aria-hidden`.** Every lucide icon inside an already-labeled
  control, and purely visual atoms (`Stars`, `LiveDot`, `PulseRing`, the `Quote` glyph,
  `Button`'s icon). Repeated/duplicated content (e.g. marquee copies) marks all but the
  first `aria-hidden`.
- **Use semantic landmarks, not `div` soup.** `<header>` for the navbar, `<nav>` for
  navigation, `<main>` for page content, `<footer>`, `<section>` for section wrappers,
  `<article>` for cards (service, product, project, icon), and `<figure>`/`<figcaption>`/
  `<blockquote>` for testimonials and the image viewer.
- **Headings go through `Title`'s `as` prop with a correct hierarchy:** one `h1` per page
  (`PageHeader` hero, product detail), `h2` for section headings (`SectionHeading` default),
  `h3` for card and panel titles. Never skip a level or set a heading level for visual size
  alone — size is a separate `size` prop.
- **Every animation must degrade under reduced motion.** Any new animated element is
  disabled in the `@media (prefers-reduced-motion: reduce)` block in `globals.css` (opacity
  reset + `animation: none`), and any JS-driven autoplay guards on
  `matchMedia("(prefers-reduced-motion: reduce)")` before starting.
- **Form fields have a programmatic label.** A `<label htmlFor>` tied to the input `id`
  (visually hidden with `sr-only` when the design has no visible label), plus the correct
  input `type` and `required` where applicable.
- **Dialogs follow the viewer pattern:** `role="dialog"` + `aria-modal="true"` +
  `aria-label`, move focus into the dialog on open, lock body scroll, and close on `Escape`.
- **`<html lang>` tracks the active locale** (kept in sync by `SyncLocale`); do not hardcode
  a language.
- **Images** follow the images rule (meaningful `alt`, or the parent conveys the meaning) —
  see `.claude/rules/images.md`.
