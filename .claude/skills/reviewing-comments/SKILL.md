---
name: reviewing-comments
description: Use when auditing or cleaning up code comments in a file, slice, or section for compliance with the project comment conventions - language, syntax, length, or comments that only narrate the code.
model: sonnet
---

# Reviewing Comments

Audit the code comments in a target scope against the project's comment conventions and
normalize any that drift. The authoritative rule is `.claude/rules/code-style.md`; this
skill is the repeatable review workflow for it.

## Conventions to enforce

- **English only** — never Spanish.
- **`/* */` block syntax**, never `//`, even inline.
- **One terse line** — a phrase, not a sentence; no multi-line blocks, no verbose JSDoc.
- **Explain intent, not the obvious** — a comment must add non-obvious context (a trade-off,
  a constraint, a gotcha). Delete comments that only restate what the code plainly does.

## Workflow

1. **Scope** — list the files in the target (a single file, a slice like
   `src/shared-sections/testimonials/`, or a data file).
2. **Scan** — read each file and collect every comment with its line.
3. **Classify** each comment:
   - **Keep** — English, `/* */`, one terse line, adds real intent.
   - **Fix** — right idea but wrong form (`//`, Spanish, multi-line, a full sentence,
     trailing period on a phrase): rewrite to a single terse English `/* */` phrase.
   - **Delete** — pure narration of what the code already says.
4. **Apply** the fixes; do not touch code logic.
5. **Report** what changed per file (kept / fixed / deleted), or state that everything was
   already compliant — never invent cosmetic edits just to show output.

## Common fixes

| Problem                                    | Fix                                                |
| ------------------------------------------ | -------------------------------------------------- |
| `// note` inline                           | `/* note */`                                       |
| Spanish comment                            | translate to English                               |
| Two-sentence explanation                   | compress to one phrase                             |
| `/* Returns the total. */` (narrates code) | delete                                             |
| Multi-line JSDoc block                     | collapse to one `/* */` line, or delete if obvious |

## Verify

Run Prettier on the touched files so nothing reformats at commit:

```bash
pnpm exec prettier --check <files>
```
