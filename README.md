# Les u Kladna v ohrožení (leskozovka.cz)

Web občanské iniciativy proti opakované černé skládce v lese V Kožovech u Kladna
(parcely 3830/4 a 3886/6 v k. ú. Kročehlavy).

Web: https://www.leskozovka.cz
Kontakt: info@leskozovka.cz
YouTube: https://www.youtube.com/@leskozovka

## Jak přidat dokument, článek nebo událost

Veškerý obsah, který se průběžně doplňuje, je v souboru `src/app/content.ts`.
Vzhled se vykreslí sám, do `App.tsx` není potřeba sahat.

| Co přidávám | Pole v `content.ts` |
| --- | --- |
| Žádost o informace, odpověď, přílohu | `documents` u příslušného úřadu v `DOCUMENT_GROUPS` |
| Dokument z terénního šetření sociálního odboru | `FIELD_DOCUMENTS` |
| Článek v médiích | `MEDIA_ARTICLES` |
| Událost do historie problému | `TIMELINE` |
| Video | `SHORTS` (svislá) nebo `MAIN_VIDEO` |

Nové položky patří na konec pole, seznamy jsou chronologické. U dlouhých seznamů
web sám ukáže jen šest nejnovějších dokumentů a starší schová pod tlačítko.

Příklad nového dokumentu:

```ts
{
  name: 'Žádost o informace č. 9',
  url: 'https://drive.google.com/file/d/.../view?usp=drive_link',
  date: 'Říjen 2026'
},
```

Po obsahové změně je dobré posunout datum `dateModified` v `index.html`
a `lastmod` v `public/sitemap.xml`.

Sekce Oficiální podnět je kvůli různorodému obsahu psaná přímo v `App.tsx`.

## Lokální vývoj

Potřeba je Node.js 20 nebo novější.

```bash
npm install
npm run dev        # vývojový server na http://localhost:5173
npm run typecheck  # kontrola typů
npm run build      # produkční build do dist/ včetně předrenderování
npm run preview    # náhled produkčního buildu
```

## Jak funguje build

1. Vite sestaví klientskou aplikaci do `dist/`.
2. Druhý průchod sestaví serverovou verzi a skript `scripts/prerender.mjs`
   vloží celou vykreslenou stránku přímo do `dist/index.html`.
3. V prohlížeči React předrenderované HTML jen oživí.

Díky tomu vyhledávače, náhledy odkazů i čtenáři bez JavaScriptu vidí celý obsah
hned a odkazy na sekce typu `leskozovka.cz/#documents` fungují.

## Nasazení

Každý push do větve `main` spustí GitHub Actions (`.github/workflows/deploy.yml`).
Workflow zkontroluje typy, sestaví web a nasadí ho na GitHub Pages.
Vlastní doména je v `public/CNAME` a v nastavení repozitáře.

## Struktura

```
index.html                  meta tagy, strukturovaná data, kořen pro předrenderované HTML
public/                     obrázky, favicon, manifest, sitemap, robots.txt, 404, CNAME
scripts/prerender.mjs       vložení předrenderované stránky do dist/index.html
src/main.tsx                start aplikace v prohlížeči
src/entry-server.tsx        vykreslení stránky při buildu
src/app/App.tsx             rozvržení stránky a sekce
src/app/content.ts          obsah: dokumenty, články, historie, videa, podporovatelé
src/app/components/         nadpis sekce, seznam dokumentů, náhled videa, mapa, akordeon
src/styles/                 Tailwind CSS a základní styly
```

## Technologie

React 18, TypeScript, Tailwind CSS 4, Vite 6, Leaflet pro mapu, Lucide ikony.

## Licence

MIT, viz soubor `LICENSE`.
