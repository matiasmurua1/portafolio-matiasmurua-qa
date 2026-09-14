import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createCanvas, DOMMatrix, ImageData, Path2D } from '@napi-rs/canvas';

globalThis.DOMMatrix = DOMMatrix;
globalThis.ImageData = ImageData;
globalThis.Path2D = Path2D;

const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = path.join(root, 'output', 'pdf', 'cv-matias-murua.pdf');
const outputDir = path.join(root, 'tmp', 'pdfs');
fs.mkdirSync(outputDir, { recursive: true });
for (const file of fs.readdirSync(outputDir)) {
  if (/^cv-page-\d+\.png$/.test(file)) fs.rmSync(path.join(outputDir, file));
}

const pdf = await getDocument({ data: new Uint8Array(fs.readFileSync(input)), disableFontFace: false }).promise;
for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
  const page = await pdf.getPage(pageNumber);
  const viewport = page.getViewport({ scale: 1.7 });
  const canvas = createCanvas(Math.ceil(viewport.width), Math.ceil(viewport.height));
  const context = canvas.getContext('2d');
  await page.render({ canvasContext: context, viewport }).promise;
  fs.writeFileSync(path.join(outputDir, `cv-page-${pageNumber}.png`), canvas.toBuffer('image/png'));
}
console.log(`Rendered ${pdf.numPages} pages to ${outputDir}`);
