# Roofpro — Project Memory

Project decisions, historical context, and pending work. Conventions live in
`.claude/rules/`; workflows in `.claude/skills/`.

## Current Project State

- The navbar `Areas` entry is still a placeholder until the `/areas` page exists.
- Footer privacy and terms links are still placeholders until those pages exist.
- `ServiceAreas` currently exists as a section on service detail pages.
- The contact `EmailForm` posts to `src/app/api/contact/route.ts` (Node.js runtime), which
  sends via Amazon SES and is bot-hardened (honeypot, time-trap, origin check, in-memory
  rate limit). It is a dev no-op until `AWS_REGION`/`SES_FROM`/`CONTACT_TO` are set and an
  SES identity is verified; the rate limit should move to Upstash/Vercel KV for production.
- Shop product detail is scaffolding — `src/data/shop/product-detail.ts` shares one set of
  placeholder values across every product (placeholder CTAs, swatch hex, a "was" price),
  and `ProductTabs` renders placeholder bodies.

## Placeholder client data (needs real values before launch)

- Social profile hrefs (`facebook`, `x`, `instagram`, `youtube`), the `builder` credit
  href, and the WhatsApp number (`whatsappHref`) are all `#`/sample placeholders.
- Company facts in `src/data/site.ts` (name, phone, email, address, figures) are template
  sample values. See the README "Customizing for the Client" section for where to edit.

## Pending work

- Known accessibility gaps are tracked in the `accessibility-review` skill: `MobileMenu`
  dialog semantics (`aria-modal`/`aria-label`/`Escape`/focus move), `focus:outline-none`
  without a visible focus ring, no focus trap or focus restore in `ProjectViewer`, no
  `aria-current` on nav, and no skip-to-content link.

## Important Decisions

- `PageHeader` is the shared hero band used across routes.
- Detail routes use fixed slugs from `src/data/` with `generateStaticParams` and
  `dynamicParams = false`.

## Resolved Historical Notes

- The previous Pitch i18n exception is obsolete. Pitch chip values were moved to
  `src/data`; only genuinely translatable content remains in i18n.
