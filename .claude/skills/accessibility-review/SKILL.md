---
name: accessibility-review
description: Use when auditing Roofpro components or pages for accessibility - keyboard operability, focus behavior, ARIA correctness, screen-reader semantics, or before shipping new interactive UI (dialogs, menus, forms, custom controls).
---

# Accessibility Review

Audit a component or page against the project's a11y conventions
(`.claude/rules/accessibility.md`) and the known gaps below. Report findings; fix only
when asked. The conventions in the rule are the baseline — this skill verifies them and
covers what the rule cannot make unconditional (things current code does not yet do
consistently).

## Workflow

1. **Scope** — list the components in the target (tier + slice), and which are interactive
   (`"use client"`, buttons, links, inputs, dialogs).
2. **Static pass** — read the source and check each item in the checklist below.
3. **Runtime pass** — with `pnpm dev` running, use the browser MCP tooling (see the
   `responsive-review` skill for setup) to verify keyboard and focus behavior that source
   review cannot confirm.
4. **Report** per component: issue, severity, the convention or gap it violates, and the
   file/line. Group by severity (blocker / serious / minor).

## Static checklist

- **Semantics:** correct landmark/element (`article` for cards, `nav`, `section`, `figure`)
  and heading level via `Title as` (one `h1`, no skipped levels).
- **Labels:** every icon-only control has an i18n `aria-label`; decorative graphics are
  `aria-hidden`; form inputs have a `<label htmlFor>`/`id` pair.
- **State:** toggles expose `aria-expanded`/`aria-pressed`; `aria-controls` points to a real
  `id`.
- **Reduced motion:** any new animation is in the `prefers-reduced-motion` block in
  `globals.css`, and JS autoplay guards on `matchMedia`.

## Known gaps to check explicitly

These are not yet consistent in the codebase — always verify them on interactive UI:

- **Focus visibility:** flag any `focus:outline-none` that has no visible replacement
  (`SearchBox`, `SortSelect`, `EmailForm` swap only a border color). Keyboard focus must be
  clearly visible; a color-only border change on a dark surface is weak.
- **Dialog keyboard completeness:** `ProjectViewer` moves focus in and handles `Escape` but
  does **not** trap `Tab` inside or restore focus to the trigger on close. `MobileMenu` uses
  `role="dialog"` but has **no** `aria-modal`, no `aria-label`, no focus move, and no
  `Escape` handler — verify these before shipping menu/dialog changes.
- **Overlay close targets:** backdrop close handlers are `div` + `onClick`; confirm a
  keyboard path to close exists (`Escape` or a focusable button).
- **`aria-current`:** navigation links do not mark the active page; check when touching nav.
- **Skip link:** there is no skip-to-content link in the layout; note if in scope.

## Runtime checks (browser MCP)

- Tab through the page: focus order is logical, every interactive element is reachable and
  shows a visible focus indicator.
- Open each dialog/menu with the keyboard, confirm `Escape` closes it and focus returns to
  the trigger.
- Confirm color contrast of text and focus indicators in both themes meets WCAG AA
  (Chrome DevTools MCP).
