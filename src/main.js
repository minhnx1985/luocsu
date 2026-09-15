import './style.css';
import { books } from './data/books.js';
// Set only after the real deployment address is known.
export const siteUrl = import.meta.env.VITE_SITE_URL || '';
const questions = ['Con người nghĩ và tin như thế nào?', 'Thế giới vận hành ra sao?', 'Con người kể và biểu đạt bằng gì?', 'Chúng ta đã đi đến đây bằng cách nào?'];
const title = b => b.titleVi || b.titleEn;
const image = (b, eager = false) => `<img src="${b.cover}" alt="Bìa ${title(b)}" width="${b.width}" height="${b.height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async">`;
const button = b => `<button class="book-card" data-book="${b.slug}" style="--accent:${b.accent}" aria-label="Xem ${title(b)}"><span class="cover-stage">${b.cover ? image(b) : '<span class="art-type"><small>LITTLE HISTORIES</small><span>Art</span><small>CHARLOTTE MULLINS</small></span>'}<span class="cover-arrow" aria-hidden="true">↗</span></span><span class="book-meta">${b.topicTags[0]}${b.status === 'forthcoming' ? ' · Sắp ra mắt' : ''}</span><h3>${title(b)}</h3><span class="author">${b.author}</span><p>${b.hook}</p></button>`;
const grid = document.querySelector('#books');
const detail = document.querySelector('#detail');
const sample = document.querySelector('#sample');
let opener, currentBook, previousHash = '', disposeReader, sampleRequest = 0;
function renderBooks(topic = -1) {
  const visible = books.filter(b => topic === -1 || b.primaryTopic === topic);
  grid.innerHTML = visible.map(button).join('');
  document.querySelector('#result-count').textContent = topic === -1 ? `${books.length} cuốn · 4 hướng đọc` : `${visible.length} cuốn cho mối tò mò của bạn`;
}
const filters = document.querySelector('#filters');
filters.innerHTML = questions.map((q, i) => `<button data-topic="${i}" aria-pressed="false"><span class="filter-index">0${i + 1}</span><span>${q}</span><span class="filter-arrow" aria-hidden="true">↗</span></button>`).join('') + '<button class="reset" data-topic="-1" aria-pressed="true">Xem tất cả <span aria-hidden="true">↗</span></button>';
filters.addEventListener('click', e => {
  const control = e.target.closest('[data-topic]');
  if (!control) return;
  filters.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === control)));
  renderBooks(Number(control.dataset.topic));
});
const heroBooks = ['triet-hoc','khao-co-hoc','am-nhac','kinh-te-hoc','tam-ly-hoc','khoa-hoc'];
document.querySelector('#hero-art').innerHTML = heroBooks.map((slug,i) => {const b=books.find(x=>x.slug===slug);return `<button class="hero-cover hero-cover-${i}" data-book="${slug}" aria-label="Xem ${title(b)}">${image(b,i<3)}</button>`;}).join('');
document.querySelector('#published-count').textContent = books.filter(b => b.status === 'published').length;
document.querySelector('#forthcoming-count').textContent = books.filter(b => b.status === 'forthcoming').length;
document.querySelector('#authors').innerHTML = books.map(b=>`<button data-book="${b.slug}"><span>${b.author}</span><small>${b.topicTags[0]}${b.status==='forthcoming'?' · Sắp ra mắt':''}</small><span aria-hidden="true">↗</span></button>`).join('');
const art=books.find(b=>b.status==='forthcoming');
if(art) document.querySelector('#sap-ra-mat').innerHTML=`<figure class="coming-cover">${art.cover ? image(art) : ''}<figcaption>Bìa bản tiếng Anh</figcaption></figure><div><p class="eyebrow">SẮP RA MẮT · ${art.topicTags[0]}</p><h2>${title(art)}</h2><p class="coming-author">${art.author}</p><p>${art.description}</p><button class="text-link" data-book="${art.slug}">Tìm hiểu cuốn sách ↗</button></div>`;
function openBook(slug, trigger) {
  const b = books.find(x => x.slug === slug);
  if (!b) return;
  opener = trigger || document.querySelector(`[data-book="${slug}"]`);
  currentBook = b;
  previousHash = location.hash.startsWith('#sach/') ? '#bo-sach' : location.hash;
  detail.style.setProperty('--accent',b.accent);
  document.querySelector('#detail-content').innerHTML = `<div class="detail-cover">${b.cover ? image(b,true) : '<div class="art-type"><small>LITTLE HISTORIES</small><span>Art</span><small>CHARLOTTE MULLINS</small></div>'}</div><div class="detail-copy"><p class="eyebrow">${b.topicTags[0]}${b.status==='forthcoming'?' · Sắp ra mắt':''}</p><h2 id="detail-title">${title(b)}</h2>${b.titleVi?`<p class="english-title">${b.titleEn}</p>`:''}<p class="detail-author">${b.author}</p>${b.translator?`<p>Dịch giả: ${b.translator}</p>`:''}<p>${b.description}</p><h3>Bạn sẽ gặp</h3><ul>${b.highlights.map(h=>`<li>${h}</li>`).join('')}</ul><div class="detail-actions">${b.samplePdf?'<button class="button" id="read-sample">Đọc thử <span aria-hidden="true">↗</span></button>':''}${b.status==='published'&&b.nhanamUrl?`<a class="button dark" href="${b.nhanamUrl}" target="_blank" rel="noopener noreferrer">Mua tại Nhã Nam ↗</a>`:''}${b.status==='published'&&b.shopeeUrl?`<a class="button" href="${b.shopeeUrl}" target="_blank" rel="noopener noreferrer">Mua trên Shopee ↗</a>`:''}</div></div>`;
  if(!detail.open) detail.showModal();
  detail.scrollTop=0;
  document.body.classList.add('modal-open');
  history.replaceState(null,'',`#sach/${slug}`);
  document.querySelector('#read-sample')?.addEventListener('click',openSample);
}
async function openSample(){
  if(!currentBook?.samplePdf)return;
  const request = ++sampleRequest;
  const pdf = currentBook.samplePdf;
  document.querySelector('#sample-title').textContent=`Đọc thử · ${title(currentBook)}`;
  document.querySelector('#sample-fallback').href=pdf;
  document.querySelector('#sample-frame').textContent='Đang mở mẫu đọc…';
  sample.showModal();
  try {
    const { mountReader } = await import('./pdf-reader.js');
    if (request !== sampleRequest || !sample.open) return;
    disposeReader = await mountReader(document.querySelector('#sample-frame'), pdf);
  } catch {
    document.querySelector('#sample-frame').textContent='Chưa mở được mẫu đọc. Bạn có thể mở PDF trong tab mới.';
  }
}
document.addEventListener('click', e=>{const control=e.target.closest('[data-book]');if(control)openBook(control.dataset.book,control);});
document.querySelector('#close-detail').addEventListener('click',()=>detail.close());
document.querySelector('#close-sample').addEventListener('click',()=>sample.close());
sample.addEventListener('close',()=>{sampleRequest++;disposeReader?.();disposeReader=null;document.querySelector('#sample-frame').replaceChildren();document.querySelector('#read-sample')?.focus();});
detail.addEventListener('close',()=>{if(sample.open)sample.close();document.body.classList.remove('modal-open');history.replaceState(null,'',previousHash||location.pathname);opener?.focus({preventScroll:true});});
for (const dialog of [detail, sample]) dialog.addEventListener('keydown', e => {
  if (e.key !== 'Tab') return;
  const items = [...dialog.querySelectorAll('button, a[href], iframe')].filter(x => x.getClientRects().length);
  const first = items[0], last = items.at(-1);
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});
for(const dialog of [detail,sample])dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
renderBooks();
function readHash(){if(location.hash.startsWith('#sach/'))openBook(decodeURIComponent(location.hash.slice(6)));else if(detail.open)detail.close();}
window.addEventListener('hashchange',readHash);readHash();
const structured=document.createElement('script');structured.type='application/ld+json';structured.textContent=JSON.stringify({'@context':'https://schema.org','@type':'ItemList',name:'Lược sử · Nhã Nam',numberOfItems:books.length,itemListElement:books.map((b,i)=>({'@type':'ListItem',position:i+1,item:{'@type':'Book',name:title(b),author:{'@type':'Person',name:b.author}}}))});document.head.append(structured);
if(siteUrl){const canonical=document.createElement('link');canonical.rel='canonical';canonical.href=siteUrl;document.head.append(canonical);for(const meta of document.querySelectorAll('meta[property="og:image"],meta[name="twitter:image"]'))meta.content=new URL(meta.content,siteUrl).href;}
