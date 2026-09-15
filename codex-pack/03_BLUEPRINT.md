# 03 — BLUEPRINT

**STATUS: PRE-APPROVED BY HUMAN**
**EXECUTION: AUTONOMOUS**

## A. Product objective
Build a polished Vietnamese minisite for Nhã Nam's editions of Yale Little Histories.

Primary conversion:
- click through to buy a published title.

Secondary:
- read a sample;
- find a first title;
- explore the series;
- remember the brand.

## B01 Header
Desktop:
- Nhã Nam mark only if a clean local brand asset exists;
- text mark `LƯỢC SỬ`;
- anchors: `Bắt đầu từ đâu?` / `Bộ sách` / `Câu chuyện` / `Sắp ra mắt`;
- CTA `Chọn một cuốn`.

Mobile:
- compact header;
- do not crowd with full nav.

## B02 Hero
Eyebrow:
**LITTLE HISTORIES · YALE UNIVERSITY PRESS × NHÃ NAM**

H1:
# **Một bộ sách nhỏ cho những câu hỏi lớn.**

Body:
> Lịch sử thế giới, triết học, khoa học, kinh tế, ngôn ngữ, âm nhạc… Những lĩnh vực tưởng như quá rộng đều có một điểm bắt đầu. Bản tiếng Việt của series Little Histories dành cho những người muốn hiểu một chủ đề lớn mà không cần bước vào bằng giáo trình.

Facts:
- `12` đầu đã xuất bản
- `1` đầu sắp ra mắt

CTA:
- `Chọn cuốn đầu tiên`
- `Xem toàn bộ bộ sách`

Visual:
- staggered editorial arrangement of 5–7 Vietnamese covers;
- real covers only;
- preserve ratios;
- no fake 3D mockups required.

Mobile:
- 2–3 representative covers or compact horizontal editorial strip;
- H1 remains primary.

## B03 Start selector
Heading:
# **Bạn muốn bắt đầu từ câu hỏi nào?**

Support:
> Chọn một hướng. Những cuốn gần với mối tò mò ấy sẽ hiện lên trước.

Selectors:
1. Con người nghĩ và tin như thế nào?
2. Thế giới vận hành ra sao?
3. Con người kể và biểu đạt bằng gì?
4. Chúng ta đã đi đến đây bằng cách nào?

Behavior:
- filter/prioritize matching books;
- active state;
- `Xem tất cả` reset;
- accessible pressed state;
- no quiz flow.

## B04 Series grid
Heading:
# **Mười hai cuốn đã có mặt trên giá sách**

Subcopy:
> Mỗi cuốn đứng độc lập. Bạn có thể bắt đầu ở bất kỳ đâu.

Render:
- 12 published books;
- 1 forthcoming Art book with `Sắp ra mắt`.

Card:
- cover
- title
- author
- one-line hook
- subtle topic cue
- status

Do not show:
- live price
- discount
- stock
- page count

Click opens detail dialog/drawer.

## B05 Book detail
Desktop: side drawer or large editorial dialog.
Mobile: full-screen/near-full-screen.

Required:
- close
- cover
- Vietnamese title
- English title
- author
- translator if verified
- 2–3 sentence pitch
- 3–5 “Bạn sẽ gặp”
- `Đọc thử`
- `Mua tại Nhã Nam`
- `Mua trên Shopee` only if verified

For Art:
- `Sắp ra mắt`
- no fake purchase CTA
- sample only if approved/available

Accessibility:
- dialog semantics
- Escape
- focus restore
- deep-link/hash preferred if simple

## B06 Sample viewer
Do not instantiate all PDFs at load.

On `Đọc thử`:
- load local sample on demand;
- native iframe/object first;
- direct open-new-tab fallback;
- full-screen if useful.

Only add PDF.js if real-browser verification proves native reader inadequate.

## B07 Series story
Heading:
# **Từ một cuốn sách của Gombrich đến cả một giá sách**

Copy:
> *A Little History of the World* của E. H. Gombrich đặt ra một cách viết hiếm gặp: kiến thức nghiêm túc, nhưng được kể như một câu chuyện cho người đọc không chuyên. Từ điểm khởi đầu ấy, Yale University Press phát triển Little Histories thành một series trải rộng qua triết học, khoa học, kinh tế, tôn giáo, văn chương, âm nhạc và nhiều lĩnh vực khác.
>
> Nhã Nam đưa series này đến độc giả Việt Nam với cùng một lời mời rất đơn giản: chọn một điều bạn vẫn muốn hiểu rõ hơn, rồi bắt đầu từ đó.

Keep compact.

## B08 Why this series works
Heading:
# **Không phải giáo trình. Cũng không phải bản tóm tắt.**

### Người trong ngành viết cho người ngoài ngành
> Mỗi cuốn do một tác giả am hiểu lĩnh vực của mình dẫn dắt, nhưng cách kể hướng đến người đọc phổ thông.

### Lịch sử được kể thành một mạch
> Ý tưởng, nhân vật, tranh luận và bước ngoặt nối với nhau thành câu chuyện, thay vì một danh sách để học thuộc.

### Minh họa cũng tham gia kể chuyện
> Hình ảnh trong series tạo nhịp đọc và giúp những khái niệm lớn bớt xa lạ.

## B09 Authors
Heading:
# **Những người dẫn đường**

Use a typographic/cover-linked list, not long biographies:
- E. H. Gombrich — lịch sử thế giới
- Niall Kishtainy — kinh tế học
- Brian Fagan — khảo cổ học
- Nicky Hayes — tâm lý học
- William Bynum — khoa học
- Nigel Warburton — triết học
- James West Davidson — lịch sử Hoa Kỳ
- Richard Holloway — tôn giáo
- Robert Philip — âm nhạc
- David Crystal — ngôn ngữ
- John Sutherland — văn chương
- Snezana Lawrence — toán học
- Charlotte Mullins — nghệ thuật · sắp ra mắt

## B10 Coming soon
Heading:
# **Sắp ra mắt**

Use exact official Vietnamese Art title from an approved local source if present.
If not verifiable, use:
**A Little History of Art**

Never invent `Lược sử nghệ thuật`.

Verified author:
**Charlotte Mullins**

Pitch:
> Charlotte Mullins đi qua khoảng 100.000 năm nghệ thuật, từ những tác phẩm sớm nhất của con người đến vai trò của nghệ thuật trong đời sống hôm nay, với một bản đồ rộng hơn nhiều so với lịch sử nghệ thuật phương Tây quen thuộc.

## B11 Final CTA
Heading:
# **Bạn muốn bắt đầu từ câu hỏi nào?**

Body:
> Không cần đọc theo thứ tự. Chọn một lĩnh vực bạn vẫn thấy tò mò, mở một cuốn, rồi để câu chuyện dẫn đi.

CTA:
- Chọn cuốn đầu tiên
- Xem toàn bộ bộ sách

## C. Data contract
Create one central source, e.g. `src/data/books.js`.

Book object:
```js
{
  slug,
  titleVi,
  titleEn,
  author,
  translator,
  status,
  primaryTopic,
  topicTags,
  hook,
  description,
  highlights,
  cover,
  accent,
  samplePdf,
  nhanamUrl,
  shopeeUrl,
  sourceNotes
}
```

Rules:
- local asset paths;
- nullable Shopee/sample;
- render CTA only for verified URLs;
- no stock/live-price fields;
- no duplicated hard-coded book data in HTML.

## D. Locked titles
Published:
1. Lược sử thế giới — E. H. Gombrich
2. Lược sử kinh tế học — Niall Kishtainy
3. Lược sử khảo cổ học — Brian Fagan
4. Lược sử tâm lý học — Nicky Hayes
5. Lược sử khoa học — William Bynum
6. Lược sử triết học — Nigel Warburton
7. Lược sử Hoa Kỳ — James West Davidson
8. Lược sử tôn giáo — Richard Holloway
9. Lược sử âm nhạc — Robert Philip
10. Câu chuyện ngôn ngữ — David Crystal
11. Lược sử văn chương — John Sutherland
12. Lược sử toán học — Snezana Lawrence

Coming soon:
13. A Little History of Art — Charlotte Mullins

Use official Vietnamese Art title only if verified locally.

## E. Nhã Nam URL seeds
Verify before final data:
- https://nhanam.vn/luoc-su-the-gioi-nha-nam
- https://nhanam.vn/luoc-su-kinh-te-hoc-nha-nam
- https://nhanam.vn/luoc-su-khao-co-hoc
- https://nhanam.vn/luoc-su-tam-ly-hoc
- https://nhanam.vn/luoc-su-khoa-hoc-01
- https://nhanam.vn/luoc-su-triet-hoc-nha-nam
- https://nhanam.vn/luoc-su-hoa-ky-nha-nam
- https://nhanam.vn/luoc-su-ton-giao-1
- https://nhanam.vn/luoc-su-am-nhac
- https://nhanam.vn/cau-chuyen-ngon-ngu-nha-nam
- https://nhanam.vn/luoc-su-van-chuong
- https://nhanam.vn/luoc-su-toan-hoc

Never scrape static price/stock.

## F. Translator seeds
Verify against local approved source; local source wins:
- Lược sử thế giới — Phan Linh Lan
- Lược sử kinh tế học — Tạ Ngọc Thạch & Nguyễn Trọng Tuấn
- Lược sử khảo cổ học — Quỳnh Chi
- Lược sử tâm lý học — Hoàng Đức Long
- Lược sử khoa học — Đức Long
- Lược sử triết học — Cao Việt
- Lược sử Hoa Kỳ — Hoàng Đức Long
- Lược sử tôn giáo — Loan Vũ
- Lược sử âm nhạc — Mai Đức Hạnh & Nguyễn Anh Tùng
- Câu chuyện ngôn ngữ — Phạm Minh Điệp
- Lược sử văn chương — Thái Hà
- Lược sử toán học — Nhất Tiếu

## G. Responsive
Test:
- 360×800
- 390×844
- 768×1024
- 1024×768
- 1440×1000

Requirements:
- hero covers legible;
- selector readable;
- mobile grid 1–2 columns based on actual readability;
- dialog mobile friendly;
- PDF usable;
- no horizontal overflow;
- controls ~44px where practical.

## H. Accessibility
- semantic landmarks/headings;
- visible focus;
- selector pressed state;
- keyboard book cards;
- accessible dialog;
- Escape/focus restore;
- meaningful alt;
- reduced motion;
- AA contrast;
- PDF fallback.

## I. Performance
- prioritize only representative hero covers;
- lazy below-fold covers;
- reserve image dimensions;
- no PDF preload for all books;
- no unnecessary hydration/carousel;
- optimize images only if tooling/measurement justifies;
- preserve originals.

Guidance:
- Performance >=85
- Accessibility >=95
- Best Practices >=90
- SEO >=95

## J. SEO
- title/meta/OG/Twitter;
- canonical only when real deployment URL known;
- CollectionPage or ItemList JSON-LD acceptable;
- no fabricated ISBN/price/availability;
- siteUrl separate from commerce URLs.

## K. Analytics
If analytics already exists:
- topic_filter_select
- book_detail_open
- sample_open
- purchase_nhanam_click
- purchase_shopee_click
- coming_soon_open

Do not add analytics service if none exists.

## L. Done contract
DONE only when:
- asset scan complete;
- 12 + 1 represented;
- selector works;
- detail works;
- PDFs on demand;
- verified purchase URLs/no dummy links;
- local assets used;
- mobile/desktop browser QA complete;
- build/lint pass;
- screenshots captured;
- Git clean;
- final Completion Report.
