import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
GlobalWorkerOptions.workerSrc = workerUrl;
export async function mountReader(host, url) {
  let disposed = false, doc, pageNumber = 1, busy = false;
  host.innerHTML = '<div class="pdf-controls"><button aria-label="Trang trước" disabled>←</button><span role="status">Đang mở mẫu đọc…</span><button aria-label="Trang sau" disabled>→</button><button aria-label="Phóng to trang">+</button><button aria-label="Thu nhỏ trang">−</button></div><div class="pdf-page"><canvas role="img" aria-label="Trang mẫu đọc"></canvas><div class="pdf-text"></div></div>';
  const [prev, next, zoomIn, zoomOut] = host.querySelectorAll('button');
  const status = host.querySelector('[role=status]');
  const canvas = host.querySelector('canvas');
  const text = host.querySelector('.pdf-text');
  let zoom = 1;
  async function render() {
    if (disposed || busy || !doc) return;
    busy = true; prev.disabled = next.disabled = zoomIn.disabled = zoomOut.disabled = true;
    try {
      const page = await doc.getPage(pageNumber);
      if (disposed) return;
      const base = page.getViewport({ scale: 1 });
      const cssWidth = Math.min(host.clientWidth - 28, 820) * zoom;
      const scale = cssWidth / base.width;
      const ratio = Math.min(devicePixelRatio || 1, 2);
      const view = page.getViewport({ scale: scale * ratio });
      canvas.width = view.width; canvas.height = view.height;
      canvas.style.width = `${cssWidth}px`; canvas.style.height = `${view.height / ratio}px`;
      await page.render({ canvasContext: canvas.getContext('2d'), viewport: view }).promise;
      if (disposed) return;
      canvas.setAttribute('aria-label', `Trang ${pageNumber} trên ${doc.numPages}`);
      const content = await page.getTextContent();
      text.textContent = content.items.map(item => item.str).join(' ');
      status.textContent = `Trang ${pageNumber} / ${doc.numPages}`;
      prev.disabled = pageNumber === 1; next.disabled = pageNumber === doc.numPages;
      zoomIn.disabled = zoom >= 2; zoomOut.disabled = zoom <= 1;
    } catch {
      if (!disposed) status.textContent = 'Chưa hiển thị được trang. Bạn có thể mở PDF trong tab mới.';
    } finally { busy = false; }
  }
  prev.onclick = () => { pageNumber--; render(); };
  next.onclick = () => { pageNumber++; render(); };
  zoomIn.onclick = () => { zoom = Math.min(2, zoom + .25); render(); };
  zoomOut.onclick = () => { zoom = Math.max(1, zoom - .25); render(); };
  const task = getDocument({ url });
  task.promise.then(result => { doc = result; if (!disposed) render(); }).catch(() => {if (!disposed) status.textContent = 'Chưa mở được mẫu đọc. Bạn có thể mở PDF trong tab mới.';});
  return () => { disposed = true; task.destroy(); };
}
