import urllib.request,re,json,html,concurrent.futures
from pathlib import Path
slugs=['luoc-su-the-gioi-nha-nam','luoc-su-kinh-te-hoc-nha-nam','luoc-su-khao-co-hoc','luoc-su-tam-ly-hoc','luoc-su-khoa-hoc-01','luoc-su-triet-hoc-nha-nam','luoc-su-hoa-ky-nha-nam','luoc-su-ton-giao-1','luoc-su-am-nhac','cau-chuyen-ngon-ngu-nha-nam','luoc-su-van-chuong','luoc-su-toan-hoc']
def check(s):
 url='https://nhanam.vn/'+s
 try:
  with urllib.request.urlopen(url,timeout=30) as r:
   data=r.read().decode(); title=html.unescape(re.search(r'<h1[^>]*>(.*?)</h1>',data,re.S).group(1)); return dict(url=url,status=r.status,finalUrl=r.url,title=re.sub('<[^>]+>','',title).strip())
 except Exception as e:return dict(url=url,error=str(e))
results=list(concurrent.futures.ThreadPoolExecutor(max_workers=6).map(check,slugs))
Path('qa/commerce-links.json').write_text(json.dumps(results,ensure_ascii=False,indent=2));print(json.dumps(results,ensure_ascii=False))
