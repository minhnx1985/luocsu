from pathlib import Path
from PIL import Image, ImageOps, ImageDraw

root = Path(__file__).parents[1]
paths = [
    root / 'public/assets/covers/the-gioi.webp', root / 'public/assets/covers/kinh-te-hoc.webp',
    root / 'public/assets/covers/khao-co-hoc.webp', root / 'public/assets/covers/triet-hoc.webp',
    root / 'public/assets/covers/am-nhac.webp', root / 'public/assets/covers/toan-hoc.webp',
    root / 'public/assets/covers/hoa-ky.webp', root / 'public/assets/covers/khoa-hoc.webp'
]
canvas = Image.new('RGB', (1200, 630), '#f5f1e7')
draw = ImageDraw.Draw(canvas)
for i, path in enumerate(paths):
    cover = Image.open(path).convert('RGB')
    cover.thumbnail((210, 390))
    x = 42 + (i % 4) * 285
    y = 44 if i < 4 else 190
    angle = [-5, 3, -2, 5, 4, -3, 2, -5][i]
    rotated = cover.rotate(angle, expand=True, resample=Image.Resampling.BICUBIC)
    canvas.paste(rotated, (x, y), rotated if rotated.mode == 'RGBA' else None)
draw.text((42, 16), 'LƯỢC SỬ · NHÃ NAM', fill='#252920')
canvas.save(root / 'public/assets/social/luoc-su-collage.jpg', quality=92, optimize=True)
