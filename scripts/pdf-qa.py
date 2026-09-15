from pathlib import Path
import subprocess,json
from PIL import Image,ImageDraw
rows=[]; previews=[]
for p in Path('public/assets/samples').glob('*.pdf'):
 out='/tmp/pdf-'+p.stem
 r=subprocess.run(['pdftoppm','-f','1','-singlefile','-scale-to','600','-png',str(p),out],capture_output=True)
 rows.append({'pdf':str(p),'firstPageRender':r.returncode==0})
 if r.returncode==0:previews.append((p.stem,out+'.png'))
canvas=Image.new('RGB',(1500,1000),'#ddd');d=ImageDraw.Draw(canvas)
for i,(name,path) in enumerate(previews):
 im=Image.open(path);im.thumbnail((280,450));x=i%5*300;y=i//5*500;canvas.paste(im,(x,y));d.text((x,y+455),name,fill='black')
canvas.save('/tmp/pdf-contact.png');Path('qa/pdf-render.json').write_text(json.dumps(rows,indent=2));print(rows)
