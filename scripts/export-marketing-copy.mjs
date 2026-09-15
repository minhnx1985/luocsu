import { books } from '../src/data/books.js';
import { authors, enrichBook } from '../src/data/editorial.js';
import { writeFileSync } from 'node:fs';

const enriched = books.map(enrichBook);
const lines = [
  '# Lược sử · Bản text marketing để audit',
  '',
  '> Bản xuất nội bộ ngày 15/09/2026. Đây là toàn bộ copy marketing đang được dùng trên landing page và trong lớp chi tiết sách.',
  '',
  '## 1. Hero',
  '',
  '**Nhãn:** LITTLE HISTORIES SERIES by YALE UNIVERSITY PRESS',
  '',
  'Bản tiếng Việt do Nhã Nam xuất bản',
  '',
  '# Một bộ sách nhỏ cho những câu hỏi lớn.',
  '',
  'Lịch sử thế giới, triết học, khoa học, kinh tế, ngôn ngữ, âm nhạc… Những lĩnh vực tưởng như quá rộng đều có một điểm bắt đầu. Bản tiếng Việt của series Little Histories dành cho những người muốn hiểu một chủ đề lớn mà không cần bước vào bằng giáo trình.',
  '',
  '**CTA:** TÌM CUỐN SÁCH DÀNH CHO BẠN · Xem toàn bộ bộ sách',
  '',
  '## 2. Điều hướng và giới thiệu',
  '',
  '### Theo mối tò mò của bạn',
  '',
  '**Bạn muốn bắt đầu từ câu hỏi nào?**',
  '',
  'Chọn một hướng. Những cuốn gần với mối tò mò ấy sẽ hiện lên trước.',
  '',
  '### Cùng một giá sách',
  '',
  '**Mười hai cuốn đã có mặt trên giá sách**',
  '',
  'Mỗi cuốn là một câu chuyện độc lập, bạn có thể bắt đầu đọc bất cứ cuốn nào trước cũng được.',
  '',
  '### Câu chuyện bộ sách',
  '',
  '*A Little History of the World* của E. H. Gombrich đặt ra một cách viết hiếm gặp: kiến thức nghiêm túc, nhưng được kể như một câu chuyện cho người đọc không chuyên. Từ điểm khởi đầu ấy, Yale University Press phát triển Little Histories thành một series trải rộng qua triết học, khoa học, kinh tế, tôn giáo, văn chương, âm nhạc và nhiều lĩnh vực khác.',
  '',
  'Nhã Nam đưa series này đến độc giả Việt Nam với cùng một ý tưởng rất đơn giản: chọn một lĩnh vực bạn vẫn muốn hiểu rõ hơn, rồi bắt đầu từ đó. Cuốn sách sẽ mang đến cho bạn những thông tin tổng quan, không quá chuyên sâu nhưng nhiều hơn mức nhập môn rất nhiều, đủ để bạn có niềm cảm hứng đào sâu hơn với lĩnh vực mình quan tâm.',
  '',
  '### Một cách đọc thế giới',
  '',
  '**Không phải giáo trình. Cũng không phải bản tóm tắt.**',
  '',
  '1. **Người trong ngành viết cho người ngoài ngành** — Mỗi cuốn do một tác giả am hiểu lĩnh vực của mình dẫn dắt, nhưng cách kể hướng đến người đọc phổ thông.',
  '2. **Lịch sử được kể như một câu chuyện hấp dẫn** — Lịch sử của từng chủ đề được kể như một câu chuyện hấp dẫn.',
  '3. **Minh họa đẹp, hấp dẫn** — Mỗi chương đều được minh họa bằng artwork rất đẹp, tạo thêm hứng thú cho người đọc.',
  '',
  '## 3. Các đầu sách',
  ''
];

for (const book of enriched) {
  lines.push(`### ${book.titleVi || book.titleEn}`);
  lines.push('');
  lines.push(`**Tác giả:** ${book.author}`);
  lines.push(`**Trạng thái:** ${book.status === 'forthcoming' ? 'Sắp ra mắt' : 'Đã xuất bản'}`);
  lines.push('');
  lines.push(`**Lede:** ${book.lede || book.hook}`);
  lines.push('');
  for (const paragraph of (book.descriptionParagraphs || [book.description])) lines.push(paragraph, '');
  lines.push('**Trong cuốn sách**');
  lines.push('');
  for (const highlight of book.highlights || []) lines.push(`- ${highlight}`);
  if (book.whyRead) lines.push('', `**Điểm đáng đọc:** ${book.whyRead}`);
  lines.push('');
}

lines.push('## 4. Những người dẫn đường', '', 'Mỗi lĩnh vực có một người kể riêng. Điểm chung là họ biết chủ đề đủ sâu để không cần làm nó trở nên khó hơn.', '');
for (const [name, author] of Object.entries(authors)) {
  lines.push(`### ${name}`, '', `**Lĩnh vực:** ${author.field}`, `**Vai trò:** ${author.shortCredential}`, '', author.bio, '');
}

lines.push('## 5. Sắp ra mắt', '', '**A Little History of Art — Charlotte Mullins**', '', 'Bản tiếng Anh đang được giới thiệu trong khi ấn bản tiếng Việt hoàn thiện.', '', '## 6. Kết trang', '', '**Một câu hỏi là đủ để bắt đầu**', '', 'Không cần đọc theo thứ tự. Chọn một lĩnh vực bạn vẫn thấy tò mò, mở một cuốn, rồi để câu chuyện dẫn đi.', '', '**CTA:** Chọn cuốn đầu tiên · Xem toàn bộ bộ sách', '', 'Bản quyền Nhã Nam 2026', 'Liên hệ: info@nhanam.vn / bookstore@nhanam.vn', '');

writeFileSync('MARKETING_COPY_AUDIT.md', `${lines.join('\n')}\n`);
