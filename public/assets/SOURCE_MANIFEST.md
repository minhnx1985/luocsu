# Source manifest
Originals preserved. Cover matches verified visually, PDF matches by filenames and extracted opening pages. Accents sampled visually from printed cover colors.
| Slug | Original cover | Dimensions / ratio | Bytes | Accent | Production | Sample / pages / bytes |
|---|---|---|---|---|---|---|
| the-gioi | Luoc su the gioi-01.jpg | 906×1135 / 0.798 | 111247 | #307090 | /assets/covers/the-gioi.webp | Luoc su the gioi doc thu.pdf / 12 / 8803404 |
| kinh-te-hoc | luoc su kinh te hoc-01.jpg | 729×1136 / 0.642 | 112311 | #606f25 | /assets/covers/kinh-te-hoc.webp | Luoc su kinh te hoc_docthu.pdf / 10 / 8787348 |
| khao-co-hoc | Luoc su khao co hoc-01.jpg | 649×1163 / 0.558 | 204102 | #49648b | /assets/covers/khao-co-hoc.webp | luoc su khao co hoc.pdf / 11 / 9651332 |
| tam-ly-hoc | Luoc su tam ly hoc-01.jpg | 672×1163 / 0.578 | 224316 | #285979 | /assets/covers/tam-ly-hoc.webp | luoc su tam ly hoc.pdf / 14 / 11490385 |
| khoa-hoc | luoc su khoa hoc-02.jpg | 729×1136 / 0.642 | 110970 | #7a6732 | /assets/covers/khoa-hoc.webp | luoc su khoa hoc-doc thu.pdf / 9 / 178274 |
| triet-hoc | luoc su triet hoc-01.jpg | 730×1128 / 0.647 | 119361 | #087578 | /assets/covers/triet-hoc.webp | Luoc su triet hoc_docthu.pdf / 13 / 10866829 |
| hoa-ky | Luoc su hoa ky-01.jpg | 682×1162 / 0.587 | 220694 | #a44942 | /assets/covers/hoa-ky.webp | luoc su hoa ky.pdf / 13 / 10788039 |
| ton-giao | luoc su ton giao-01.jpg | 734×1133 / 0.648 | 169555 | #9b553a | /assets/covers/ton-giao.webp | Absent / 0 / 0 |
| am-nhac | Luoc su am nhac-01.jpg | 642×1160 / 0.553 | 225918 | #a24144 | /assets/covers/am-nhac.webp | luoc su am nhac.pdf / 11 / 9798553 |
| ngon-ngu | cau chuyen ngon ngu-01.jpg | 737×1133 / 0.650 | 129506 | #147294 | /assets/covers/ngon-ngu.webp | Absent / 0 / 0 |
| van-chuong | Luoc su van chuong-01.jpg | 717×1163 / 0.617 | 212073 | #6e6a47 | /assets/covers/van-chuong.webp | luoc su van chuong - IN.pdf / 11 / 9358552 |
| toan-hoc | LuocSuToanHoc.jpg | 600×969 / 0.619 | 134571 | #974c72 | /assets/covers/toan-hoc.webp | luoc su toan hoc doc thu.pdf / 10 / 8353426 |
| art | Luoc su nghe thuat.jpg | 651×1000 / 0.651 | 137513 | #b52d24 | /assets/covers/art.webp | Absent / 0 / 0 |

Native PDFs retained byte-for-byte; on-demand embed and direct-open fallback.
Art English cover and Nhã Nam JPEG logo appeared during implementation and were visually inspected. Art Vietnamese title and sample remain absent. Logo is normalized to WebP; originals preserved.
Missing published samples: religion and language.
Shopee source: `shopee link .rtf`. Mathematics entry mismatches psychology; US entry is a multi-title listing. Both excluded. Other URLs require live verification.
## Brand and late-arriving assets

`Logo Nha Nam.jpg` (730×709) → `/assets/nhanam.webp`; inspected green official mark on white; blend multiply on paper to avoid a white rectangle. `Luoc su nghe thuat.jpg` is an English-language cover, not evidence of a Vietnamese title. Both originals are retained.

Image optimization: original twelve JPEGs approximately 2.0 MB; WebP copies approximately 1.0 MB at quality 88 with full original pixel dimensions. No AI-generated imagery. Text accent hues were darkened slightly where needed to meet 4.5:1 contrast.

PDF native embed failed in browser QA. Final production uses on-demand PDF.js plus direct-open fallback. All ten PDFs passed opening-page render and browser reader QA.

## Editorial audit — 2026-09-15

Author profiles are centralized in `src/data/editorial.js`. Six supplied author portraits are now normalized into `public/assets/authors/`: E. H. Gombrich, Niall Kishtainy, Brian Fagan, Nicky Hayes, William Bynum and Nigel Warburton. The remaining seven profiles retain an intentional typographic silhouette fallback because the accessible Nhã Nam/Yale pages exposed author names and bios but no stable portrait asset URL. No AI-generated, Pinterest or Goodreads portrait was substituted.

Nhã Nam author-page checks: the official series page includes the author bios for Gombrich, Kishtainy, Fagan, Hayes, Bynum and Warburton; Brian Fagan also has a dedicated author page (`https://nhanam.vn/brian-fagan`). These pages were recorded as provenance, while the local supplied files remain the production image sources.

Author bio source URLs are recorded per author in `src/data/editorial.js`; Yale University Press is the default series source, with institutional and official author links used where available. The fallback keeps the circular portrait treatment without making an unsupported identity claim.

Book copy sources are the approved local assets and the twelve verified Nhã Nam product pages recorded in `qa/commerce-links.json`; descriptions were rewritten into `lede`, `descriptionParagraphs`, `highlights`, and optional `whyRead` fields. The English Art scope is grounded in its Yale book page. No Yale prose is copied verbatim.

Social share image: `public/assets/social/luoc-su-collage.jpg` is a deterministic collage made from eight supplied Vietnamese cover assets, sized 1200×630 for Open Graph/Twitter previews. No substitute or generated artwork was used.
