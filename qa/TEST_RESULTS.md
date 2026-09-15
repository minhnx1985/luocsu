# Verification — 2026-09-15

Production preview: Vite on 127.0.0.1:4173; Codex in-app browser.

## Passed

- `npm run build`, `npm run lint`, `node scripts/check-data.mjs`.
- 12 published + 1 forthcoming; excluded titles absent; no price/stock/cart/combo fields.
- All 13 detail dialogs open, display correct title/author/assets and close.
- All 12 Nhã Nam links: HTTP 200, exact expected product H1, no redirect mismatch.
- Filters return matching 3 thinking/belief, 3 world/systems, 4 expression and 3 history titles; reset = 13. Keyboard Enter activation and pressed state checked.
- Keyboard: Enter opens card; Shift+Tab wraps from close to last commerce link; Escape closes; focus returns to triggering card. Nested PDF Escape restores sample trigger first. Focus ring visible.
- Art deep link `/#sach/art` opens its detail; no purchase/sample CTA.
- All ten local PDF opening pages rendered with Poppler, visually matched to subjects, then individually opened with PDF.js in browser. Page counts 12/10/11/14/9/13/13/11/11/10 by corresponding catalogue order.
- Page next/previous availability, next page, zoom, direct PDF href, viewer cleanup. Canvas removed on close. Original PDFs preserved byte-for-byte.
- 360×800, 390×844, 768×1024, 1024×768, 1440×1000: no page horizontal overflow; no broken images. 360 px detail has equal client/scroll widths; zoom overflow remains within PDF pane.
- Console final: zero warnings/errors (`console.json`).
- All per-book text accents have calculated WCAG contrast >=4.5:1 against paper. Main ink, muted text and selected filter colors reviewed.
- Reduced motion: source review confirms global no-animation/no-transition rule and non-smooth anchors. OS preference emulation not performed.
- Metadata, Vietnamese language, unique H1, semantic landmarks, image dimensions, lazy covers, on-demand PDF module, JSON-LD ItemList, absent fake canonical reviewed.

## Refined from observed failures

- Native PDF reader stayed blank: replaced by lazy PDF.js with fallback link.
- Native Shift+Tab allowed focus to escape at the first control: added explicit wrap handling.
- Several cover accents had contrast 4.1–4.48:1: darkened derived colors to >=4.5:1.
- Logo and English Art cover added during execution: integrated without inventing Vietnamese title.

## Limits

- Lighthouse/axe not installed or run. No scores claimed.
- No real iOS/Android device test; browser viewports are emulated dimensions.
- Ten PDFs include scanned text and some malformed cross-reference entries tolerated by readers. Opening-page render and reader navigation passed. No source content repair performed.
- Shopee returns application shells without verifiable product titles; all Shopee CTAs omitted. Mathematics source URL points to psychology; US source is a series listing.
