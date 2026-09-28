import { renderToString } from 'react-dom/server';
import App from './app/App';

/** Vykreslí celou stránku do HTML při sestavení (viz scripts/prerender.mjs). */
export function render(): string {
  return renderToString(<App />);
}
