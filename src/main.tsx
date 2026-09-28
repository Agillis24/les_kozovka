import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './app/App';
import './styles/index.css';

const root = document.getElementById('root')!;

// Produkční build obsahuje předem vykreslené HTML, React ho jen „oživí".
// Při vývoji (npm run dev) je kořen prázdný a vykreslí se celý.
if (root.firstElementChild) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
