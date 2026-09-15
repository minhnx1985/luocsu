import re,json,urllib.request,concurrent.futures
from pathlib import Path
urls=re.findall(r'https://\S+',Path('/tmp/shopee.txt').read_text())
def run(u):
 try:
  with urllib.request.urlopen(u,timeout=20) as r:
   t=r.read().decode();return {'url':u,'status':r.status,'finalUrl':r.url,'title':re.findall('<title>(.*?)</title>',t)}
 except Exception as e:return {'url':u,'error':str(e)}
r=list(concurrent.futures.ThreadPoolExecutor(max_workers=8).map(run,urls));Path('qa/shopee-links.json').write_text(json.dumps(r,indent=2));print(r)
