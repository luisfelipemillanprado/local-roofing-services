# Roofpro — Project Memory

Project decisions, historical context, and pending work. Conventions live in
`.claude/rules/`; workflows in `.claude/skills/`.

## Current Project State

- Footer privacy and terms links are still placeholders until those pages exist.
- `ServiceAreas` ships both as the `/areas` page and as a section on service detail pages.
- The contact `EmailForm` posts to `src/app/api/contact/route.ts` (Node.js runtime), which
  sends via Amazon SES and is bot-hardened (honeypot, time-trap, origin check, in-memory
  rate limit). It is a dev no-op until `AWS_REGION`/`SES_FROM`/`CONTACT_TO` are set and an
  SES identity is verified; the rate limit should move to Upstash/Vercel KV for production.
- Shop product detail is scaffolding — `src/data/features/shop/product-detail.ts` shares one set of
  placeholder values across every product (placeholder CTAs, swatch hex, a "was" price),
  and `ProductTabs` renders placeholder bodies.

## Placeholder client data (needs real values before launch)

- Social profile hrefs (`facebook`, `x`, `instagram`, `youtube`), the `builder` credit
  href, and the WhatsApp number (`whatsappHref`) are all `#`/sample placeholders.
- Company facts in `src/data/site.ts` (name, phone, email, address, figures) are template
  sample values. See the README "Customizing for the Client" section for where to edit.

## Pending work

- `next.config.ts` kept redirects for seven renamed paths (`/gallery` and six shop slugs).
  They were dropped because the site has never been published: no domain, sitemap, robots
  or deployment, no internal link pointed at any old path, and a stale redirect shadows a
  future route of the same name, since redirects are matched before the filesystem. **Once
  the site is live, every slug or route rename needs its own 308 in `next.config.ts`**, one
  entry per locale (`/x` and `/es/x`), because the App Router does not localize redirects.
- Known accessibility gaps live in the `accessibility-review` skill's "Known gaps to check"
  section (the source of truth) — MobileMenu dialog semantics, focus-visible rings,
  ProjectViewer focus trap/restore, nav `aria-current`, skip-to-content link. Don't restate
  the detail here; update the skill.

## Important Decisions

- `PageHeader` is the shared hero band used across routes.
- Detail routes use fixed slugs from `src/data/` with `generateStaticParams` and
  `dynamicParams = false`.

## Resolved Historical Notes

- The previous Pitch i18n exception is obsolete. Pitch chip values were moved to
  `src/data`; only genuinely translatable content remains in i18n.
