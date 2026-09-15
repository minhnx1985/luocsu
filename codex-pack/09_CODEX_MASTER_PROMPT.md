# 09 — CODEX MASTER PROMPT

You are the Builder for the Nhã Nam Little Histories minisite.

The Human has already approved the scope and Blueprint.

## Governing files
Read all project instructions in root `AGENTS.md`, then read:
- `codex-pack/00_START_HERE.md`
- `codex-pack/01_RRI_AND_DECISIONS.md`
- `codex-pack/02_VISION.md`
- `codex-pack/03_BLUEPRINT.md`
- `codex-pack/04_CONTENT_DECK.md`
- `codex-pack/05_ASSET_SCAN_PROTOCOL.md`
- `codex-pack/06_SOURCE_AND_RESEARCH_NOTES.md`
- `codex-pack/07_TASK_GRAPH.md`
- `codex-pack/08_VERIFY_CHECKLIST.md`
- `codex-pack/10_COMPLETION_REPORT_TEMPLATE.md`

Blueprint is PRE-APPROVED.

## Execution
Run autonomously:
SCAN → validate Vision → normalize assets/data → BUILD → VERIFY → REFINE → DONE.

Do not stop at TIP boundaries.

Make reversible Level-1/2 decisions yourself.

Stop only for Level-3 blockers:
- scope/business change;
- meaningful architecture change;
- unresolved official-content conflict;
- critical missing asset with no safe fallback;
- security/destructive issue.

## Asset discovery
The Human confirms required assets already exist somewhere in the working folder.

Discover before asking for upload.

Match assets by evidence, not file ordering.

Inspect real Vietnamese covers for:
- ratio;
- common ivory field;
- typography;
- illustration style;
- per-book accent.

## Stack
Reuse an existing suitable app.

If greenfield:
- Vite vanilla;
- semantic HTML;
- CSS;
- minimal JavaScript.

Do not default to React/Next/Vue/Tailwind.
Initialize Git before substantive work if absent.

## Build data-first
Create one central books data source.
All cards/details render from it.

Required published titles:
- Lược sử thế giới — E. H. Gombrich
- Lược sử kinh tế học — Niall Kishtainy
- Lược sử khảo cổ học — Brian Fagan
- Lược sử tâm lý học — Nicky Hayes
- Lược sử khoa học — William Bynum
- Lược sử triết học — Nigel Warburton
- Lược sử Hoa Kỳ — James West Davidson
- Lược sử tôn giáo — Richard Holloway
- Lược sử âm nhạc — Robert Philip
- Câu chuyện ngôn ngữ — David Crystal
- Lược sử văn chương — John Sutherland
- Lược sử toán học — Snezana Lawrence

Coming soon:
- A Little History of Art — Charlotte Mullins

Do not include Poetry or Earth.

Use official Vietnamese Art title only if verified locally.

## Visual contract
Vietnamese Nhã Nam covers define art direction.

Preserve:
- warm ivory canvas;
- ink/black typography;
- one accent per book;
- line-art/woodcut feel;
- editorial whitespace.

Avoid:
- generic SaaS/ecommerce styling;
- glass/gradients;
- giant pills;
- stock academic imagery;
- Yale rebrand cloning;
- decorative fonts imitating cover lettering.

## Experience contract
Implement:
- Hero;
- 4-way selector;
- 12 + 1 catalogue;
- accessible detail dialog/drawer;
- on-demand samples;
- Nhã Nam CTA;
- Shopee only if verified;
- Series Story;
- Why It Works;
- Authors;
- Coming Soon;
- Final CTA.

Selector must genuinely help users choose.

## Commerce
Verify Nhã Nam URLs.
Use Shopee only when exact verified URL exists.
Do not freeze stock/price/discount.
No combo.

## Samples
PDFs load only on request.
Native same-origin iframe/object first.
Always provide open-new-tab fallback.
Only add PDF.js if real-browser testing proves necessary.

## SEO
Separate `siteUrl` from commerce URLs.
If deploy URL unknown, leave `siteUrl` configurable and omit fake canonical.
Never fabricate ISBN/price/availability.

## QA authority
You may add Playwright/Lighthouse as development-only QA tooling.

Verify:
- 360×800
- 390×844
- 768×1024
- 1024×768
- 1440×1000

Capture:
- 390×844
- 1440×1000

Test:
- topic filters;
- all book details;
- keyboard/Escape/focus;
- PDF;
- purchase links;
- coming-soon state;
- console;
- overflow;
- reduced motion.

Fix failures and rerun.

## Completion
Before DONE:
- build pass;
- lint pass;
- browser QA complete;
- screenshots complete;
- no dummy links;
- Git clean;
- final commit.

Push only if a Git remote is already configured and permissions allow it.
Do not create a remote without explicit instruction.

Return one Completion Report using the template.
