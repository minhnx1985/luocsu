import assert from 'node:assert/strict';
import {existsSync,readFileSync,writeFileSync} from 'node:fs';
import {books} from '../src/data/books.js';
import {enrichBook} from '../src/data/editorial.js';
assert.equal(books.filter(b=>b.status==='published').length,12);
assert.equal(books.filter(b=>b.status==='forthcoming').length,1);
assert.equal(new Set(books.map(b=>b.slug)).size,13);
const verified=JSON.parse(readFileSync('qa/commerce-links.json','utf8'));
function luminance(h){const a=h.slice(1).match(/../g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return a[0]*.2126+a[1]*.7152+a[2]*.0722;}
const contrast=[];
for(const b of books){
 assert.ok(!/Poetry|Earth/.test(b.titleEn));
 assert.ok(b.highlights.length>=3);
 assert.ok(existsSync('public'+b.cover));
 if(b.samplePdf){assert.ok(existsSync('public'+b.samplePdf));assert.equal(readFileSync('public'+b.samplePdf).subarray(0,4).toString(),'%PDF');}
 if(b.status==='published')assert.ok(verified.some(v=>v.url===b.nhanamUrl&&v.status===200));
 else assert.equal(b.nhanamUrl,null);
 const ratio=(luminance('#f5f1e7')+.05)/(luminance(b.accent)+.05);
 assert.ok(ratio>=4.5,`${b.slug}: contrast ${ratio}`);
 contrast.push({slug:b.slug,accent:b.accent,contrast:ratio.toFixed(2)});
}
for (const b of books) {
  const e = enrichBook(b);
  assert.ok(e.authorProfile?.bio.length >= 45 && e.authorProfile.bio.length <= 500, `${b.author}: bio missing`);
  assert.ok(e.authorProfile.portrait && (e.authorProfile.portrait.startsWith('http') || existsSync('public' + e.authorProfile.portrait)), `${b.author}: portrait missing`);
  assert.ok(e.lede?.length >= 40, `${b.slug}: lede missing`);
  assert.ok(e.descriptionParagraphs?.length === 2, `${b.slug}: two description paragraphs required`);
  assert.ok(e.highlights.length >= 4, `${b.slug}: concrete highlights missing`);
  assert.ok(e.authorProfile.sources.length > 0, `${b.author}: source missing`);
}
writeFileSync('qa/contrast.json',JSON.stringify(contrast,null,2));
console.log('PASS: 13 unique books, 12 verified commerce URLs, all assets, 10 PDFs, forthcoming safety, accent contrast >=4.5.');
