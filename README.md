# Lược sử · Nhã Nam

Vietnamese static-first editorial minisite. Vite, semantic HTML, CSS, vanilla JavaScript. No backend, cart, stock or price mirroring.

## Run

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run preview
node scripts/check-data.mjs
```

Production output: `dist/`. Preview: http://127.0.0.1:4173.

## Maintain the catalogue

Edit `src/data/books.js`: one object per title drives catalogue, details, authors, groups, counts and coming-soon content. Add local assets to `public/assets/`; keep source provenance in `public/assets/SOURCE_MANIFEST.md`. `primaryTopic` uses 0 = thinking/belief, 1 = world/systems, 2 = expression, 3 = history. Purchase links must be product-verified. Nullable translator, Shopee and sample fields are intentionally omitted in the UI.

`scan.py` and `build-data.py` document the initial import; do not rerun `build-data.py` after editing the central catalogue because it recreates the initial data.

To publish Art, confirm the official Vietnamese title, change status, and add verified links. The current cover is the supplied English cover, explicitly identified in its feature section. Hero titles can be curated in `src/main.js`.

## PDF reader

The native reader displayed a blank frame in browser QA. PDF.js is dynamically imported only after “Đọc thử”; only one page canvas is rendered at a time. Close destroys the document and clears the viewer. Original PDF can always be opened from the fallback link. Samples are not loaded at initial page render. Their total disk size is not initial transfer size.

## Deployment metadata

No deployment host/URL was supplied. `VITE_SITE_URL` is separate from commerce URLs and can enable a canonical and absolute social image URLs. Before public launch, configure the real URL and verify social previews with the hosting crawler; some crawlers do not execute JavaScript, so publish absolute OG URLs in `index.html` as well. No remote has been created.

## Evidence

- `COMPLETION_REPORT.md`: delivery report.
- `qa/commerce-links.json`: twelve exact HTTP 200/title checks.
- `qa/browser-books-*.json`: all 13 details and ten sample results.
- `qa/responsive.json`: viewport checks.
- `qa/contrast.json`: cover-derived text accents ≥4.5:1.
- `qa/*.png`: screenshots.

No analytics service was added. No Lighthouse score is claimed; browser/manual verification and explicit contrast checks were performed.
