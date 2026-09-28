// Vloží předem vykreslené HTML stránky do dist/index.html.
// Spouští se automaticky v rámci `npm run build`.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = path.join(root, 'dist', 'index.html');
const ssrDir = path.join(root, 'dist-ssr');
const placeholder = '<!--app-html-->';

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const html = await readFile(indexPath, 'utf-8');

if (!html.includes(placeholder)) {
  throw new Error(`V ${indexPath} chybí značka ${placeholder}`);
}

const appHtml = render();
await writeFile(indexPath, html.replace(placeholder, appHtml));
await rm(ssrDir, { recursive: true, force: true });

console.log(`Předrenderováno: ${Math.round(appHtml.length / 1024)} kB HTML vloženo do dist/index.html`);
