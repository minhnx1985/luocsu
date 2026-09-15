# 05 — ASSET SCAN PROTOCOL

Human confirms all required assets are already in the working folder.

Discover:
- 12 published Vietnamese high-res covers;
- 1 Art cover if present;
- 12 published sample PDFs;
- Art sample PDF if present/approved;
- Nhã Nam logo/brand asset if present;
- optional interior illustrations;
- DOCX/text/source notes;
- local link files.

For each cover record:
- filename
- matched title
- dimensions
- aspect ratio
- size
- dominant/accent color
- production destination

For each PDF:
- filename
- matched title
- pages
- size
- embed viability
- production destination

Matching priority:
1. filename
2. cover text
3. local approved source files
4. verified product metadata

Do not match solely by ordering.

Copy normalized assets into stable production paths without mutating originals.
Create `public/assets/SOURCE_MANIFEST.md`.

Derive one accent from each real Vietnamese cover.
Do not AI-generate substitute artwork.
