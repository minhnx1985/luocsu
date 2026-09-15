# 07 — TASK GRAPH

Execute autonomously:

`TIP-01 → TIP-02 → TIP-03 → TIP-04 → TIP-05 → TIP-06`

No Human checkpoint unless Level-3 blocker.

## TIP-01 — Scan & normalize
- scan workspace/app/assets;
- identify covers/PDFs/text/link files;
- match 12 + 1 titles;
- inspect visual DNA;
- verify seeded product URLs;
- establish exact Art Vietnamese title if local source confirms it;
- choose/reuse stack.

Acceptance:
- all published titles matched to covers;
- available PDFs matched;
- per-book accent known;
- no unresolved critical ambiguity.

## TIP-02 — Scaffold & design system
If greenfield: Vite vanilla + semantic HTML/CSS/minimal JS.
Initialize Git if absent.
Normalize local assets.
Create central data source.
Implement global tokens, header and Hero.

## TIP-03 — Discovery + catalogue
Implement:
- 4-question selector;
- 12 + 1 catalogue;
- accessible filtering;
- detail dialog/drawer;
- verified purchase CTAs.

## TIP-04 — Samples + editorial
Implement:
- on-demand PDF viewer;
- Series Story;
- Why It Works;
- Authors;
- Coming Soon;
- Final CTA.

## TIP-05 — SEO/accessibility/performance
Implement:
- metadata;
- structured data if useful;
- focus/reduced motion/dialog semantics;
- responsive refinements;
- image-loading strategy;
- analytics only if pre-existing.

## TIP-06 — Browser QA & refine
May add Playwright/Lighthouse as dev-only QA tooling.

Required:
- production preview;
- tests at 360×800, 390×844, 768×1024, 1024×768, 1440×1000;
- interaction tests;
- console review;
- screenshots at 390×844 and 1440×1000;
- Lighthouse if available;
- fix and rerun;
- final commit;
- clean repo.
