from pathlib import Path
from PIL import Image
from pypdf import PdfReader
import json, shutil, re
rows=[
('the-gioi','Luoc su the gioi-01.jpg','Luoc su the gioi doc thu.pdf','#307090'),
('kinh-te-hoc','luoc su kinh te hoc-01.jpg','Luoc su kinh te hoc_docthu.pdf','#606f25'),
('khao-co-hoc','Luoc su khao co hoc-01.jpg','luoc su khao co hoc.pdf','#49648b'),
('tam-ly-hoc','Luoc su tam ly hoc-01.jpg','luoc su tam ly hoc.pdf','#285979'),
('khoa-hoc','luoc su khoa hoc-02.jpg','luoc su khoa hoc-doc thu.pdf','#7a6732'),
('triet-hoc','luoc su triet hoc-01.jpg','Luoc su triet hoc_docthu.pdf','#087578'),
('hoa-ky','Luoc su hoa ky-01.jpg','luoc su hoa ky.pdf','#a44942'),
('ton-giao','luoc su ton giao-01.jpg',None,'#9b553a'),
('am-nhac','Luoc su am nhac-01.jpg','luoc su am nhac.pdf','#a24144'),
('ngon-ngu','cau chuyen ngon ngu-01.jpg',None,'#147294'),
('van-chuong','Luoc su van chuong-01.jpg','luoc su van chuong - IN.pdf','#6e6a47'),
('toan-hoc','LuocSuToanHoc.jpg','luoc su toan hoc doc thu.pdf','#974c72'),
('art','Luoc su nghe thuat.jpg',None,'#b52d24')]
manifest=['# Source manifest','Originals preserved. Cover matches verified visually, PDF matches by filenames and extracted opening pages. Accents sampled visually from printed cover colors.','| Slug | Original cover | Dimensions / ratio | Bytes | Accent | Production | Sample / pages / bytes |','|---|---|---|---|---|---|---|']
assets={}
for slug,cover,pdf,accent in rows:
 im=Image.open(cover); w,h=im.size; dest=f'/assets/covers/{slug}.webp'; im.save('public'+dest,'WEBP',quality=88)
 sample=f'/assets/samples/{slug}.pdf' if pdf else None
 if pdf: shutil.copy2(pdf,'public'+sample)
 pages=len(PdfReader(pdf).pages) if pdf else 0
 assets[slug]=dict(cover=dest,width=w,height=h,accent=accent,samplePdf=sample)
 manifest.append(f'| {slug} | {cover} | {w}×{h} / {w/h:.3f} | {Path(cover).stat().st_size} | {accent} | {dest} | {pdf or "Absent"} / {pages} / {Path(pdf).stat().st_size if pdf else 0} |')
manifest+=['','Native PDFs retained byte-for-byte; on-demand embed and direct-open fallback.','Art English cover and Nhã Nam JPEG logo appeared during implementation and were visually inspected. Art Vietnamese title and sample remain absent. Logo is normalized to WebP; originals preserved.','Missing published samples: religion and language.','Shopee source: `shopee link .rtf`. Mathematics entry mismatches psychology; US entry is a multi-title listing. Both excluded. Other URLs require live verification.']
Path('public/assets/SOURCE_MANIFEST.md').write_text('\n'.join(manifest))
Path('scripts/assets.json').write_text(json.dumps(assets,ensure_ascii=False,indent=2))

Image.open('Logo Nha Nam.jpg').save('public/assets/nhanam.webp','WEBP',quality=90)
