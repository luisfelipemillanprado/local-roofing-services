---
name: responsive-review
description: Use when Roofpro pages need on-screen review in the browser - responsive layout across viewports, light/dark themes, EN/ES locales, or visual confirmation after UI changes.
---

# Responsive Review

Browser-based visual review using the MCP tooling (Playwright MCP for navigation,
interaction and screenshots; Chrome DevTools MCP for debugging and performance). These are
development-time tools, never project dependencies.

## Setup

- Review against the dev server on `http://localhost:3000` (`pnpm dev` if not running).
- The site is EN at `/` and ES at `/es`; dark is the **default** theme, light is opt-in
  via the navbar toggle.

## Review matrix

Cover every combination relevant to the change:

| Axis     | Values                                         |
| -------- | ---------------------------------------------- |
| Viewport | 1280×800 (desktop) · 412×915 (Pixel 7, mobile) |
| Theme    | dark (default) · light                         |
| Locale   | `/` (EN) · `/es` (ES)                          |

Scroll each reviewed page top to bottom so lazy `next/image` loads and reveal animations
fire before screenshots.

## What to check

- **Layout:** no horizontal overflow, grid columns align, mobile single column stays
  content-width, spacing consistent between sections.
- **Theme:** both themes render with the semantic tokens — no hardcoded colors that only
  work in one theme; navbar subtree stays pinned dark (`.theme-dark`).
- **Locale:** ES copy fits the same layout (Spanish runs longer); no clipped or wrapped
  CTAs; `<html lang>` matches the locale.
- **Images:** blur placeholder appears, then the real `.webp` loads; `object-cover`
  photos are not distorted.
- **Animation:** no flicker on animated pages — especially anything reintroducing
  `backdrop-blur` on in-page content (forbidden by the styling rule).

## Reporting

Report findings per page as viewport × theme × locale, with a screenshot per issue and the
affected component slice (`src/<tier>/<slice>/`). Fixes follow the styling and components
rules; rerun the matrix on the touched pages after fixing.
