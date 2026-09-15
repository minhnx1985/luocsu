# AGENTS.md — Nhã Nam Lược sử minisite

## Project role

You are the **Builder** in a Vibe Code Kit workflow.

The Human/Homeowner has already approved the product scope and Blueprint.
The detailed product contract is in `codex-pack/`.

Your job is to:
**SCAN → BUILD → VERIFY → REFINE → DONE**

Do not stop for routine approval.

Make reversible Level-1 and Level-2 implementation decisions yourself.
Stop only for a Level-3 blocker involving:
- scope/business-rule change;
- meaningful architecture change;
- unresolved conflict in official book title/content;
- critical missing asset with no safe fallback;
- security/destructive action.

Do not expose hidden chain-of-thought. Report decisions, evidence, tests and outcomes.

## Read before implementation

Read these files in order:

1. `codex-pack/00_START_HERE.md`
2. `codex-pack/01_RRI_AND_DECISIONS.md`
3. `codex-pack/02_VISION.md`
4. `codex-pack/03_BLUEPRINT.md`
5. `codex-pack/04_CONTENT_DECK.md`
6. `codex-pack/05_ASSET_SCAN_PROTOCOL.md`
7. `codex-pack/06_SOURCE_AND_RESEARCH_NOTES.md`
8. `codex-pack/07_TASK_GRAPH.md`
9. `codex-pack/08_VERIFY_CHECKLIST.md`
10. `codex-pack/09_CODEX_MASTER_PROMPT.md`
11. `codex-pack/10_COMPLETION_REPORT_TEMPLATE.md`

The Blueprint is **PRE-APPROVED**.

## Locked project rules

- 12 published Vietnamese titles.
- 1 forthcoming title: `A Little History of Art — Charlotte Mullins`.
- Exclude `A Little History of Poetry`.
- Exclude `A Little History of the Earth`.
- No combo.
- No cart.
- No static stock/price mirroring.
- Vietnamese UI.
- Audience primarily 16–35 curious general readers.
- Use local high-resolution Vietnamese covers as the main visual source.
- Use local sample PDFs on demand.
- Build data-first so future titles require mainly one data-object addition/update.
- Visual direction comes from Nhã Nam Vietnamese covers, not Yale's current rebrand.
- Do not AI-generate substitute art.
- Do not invent title, translator, quote, award, URL, release data, price or availability.

## Default stack decision

If a suitable application already exists, reuse it.

If the workspace is greenfield, default to a lightweight static-first implementation:
- Vite vanilla;
- semantic HTML;
- CSS;
- minimal JavaScript.

Do not default to React, Next, Vue, Tailwind or a UI framework unless repository evidence clearly justifies it.

## Content quality

Write calm, intelligent Vietnamese marketing copy.

Avoid repeated AI-smell constructions:
- “không chỉ… mà còn…”
- “không… mà…”
- “điều thú vị là”
- “điều đáng chú ý là”
- “có lẽ”
- “thực ra”
- “hóa ra”
- “đó là lý do”
- “mang đến cho độc giả”
- “hành trình khám phá”
- “kho tàng tri thức”
- “tinh hoa nhân loại”
- “chìa khóa tri thức”

Prefer:
- concrete subject questions;
- active voice;
- natural Vietnamese paragraphs;
- specific reader benefit;
- restrained marketing.

## Design quality

- Warm paper/ivory base.
- Ink/black typography.
- One accent color derived from each real Vietnamese cover.
- Preserve cover ratios.
- Let covers dominate.
- Editorial composition rather than ecommerce/SaaS styling.
- Avoid glassmorphism, gradients, giant pills, generic rounded cards, stock academic imagery.
- Do not imitate cover title lettering with a random decorative font.
- Maximum two font families unless source evidence strongly requires more.
- Excellent Vietnamese typography.
- Intentional mobile recomposition.
- Restrained motion with `prefers-reduced-motion`.

## Verification

Before claiming DONE:
- run build;
- run lint if configured;
- run production preview;
- browser QA;
- keyboard QA;
- PDF QA;
- console check;
- responsive QA;
- capture mobile + desktop screenshots;
- verify commerce links;
- ensure no horizontal overflow;
- ensure Git working tree is clean;
- create final commit.

Playwright/Lighthouse may be added as development-only QA tooling when useful.

Never claim a check passed if it was not actually run.
