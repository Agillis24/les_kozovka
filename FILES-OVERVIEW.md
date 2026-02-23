# 📁 Přehled všech souborů projektu

Tento dokument obsahuje kompletní přehled **všech důležitých souborů** v projektu www.leskozovka.cz.

---

## 🌐 Webové soubory

### `/index.html` ⭐
**Hlavní HTML soubor s kompletní SEO optimalizací**

Obsahuje:
- ✅ Meta tagy (title, description, keywords)
- ✅ Open Graph tagy (Facebook, LinkedIn)
- ✅ Twitter Card tagy
- ✅ Strukturovaná data (Schema.org): Organization, Place, Article, BreadcrumbList
- ✅ Google Analytics placeholder
- ✅ Google Search Console verification placeholder
- ✅ Favicon linky
- ✅ PWA manifest link

**Co je třeba upravit:**
- Přidat Google Analytics tracking ID (řádek s `G-XXXXXXXXXX`)
- Přidat Google Search Console verification kód

---

### `/src/app/App.tsx` ⭐
**Hlavní React komponenta - celá aplikace**

Obsahuje **11 sekcí:**
1. **Hero banner** - Úvodní sekce s call-to-action
2. **O problému** - Detailní popis situace + odkaz na katastr
3. **Historie** - Timeline událostí 2022-2026
4. **Fotodokumentace** - Odkaz na Google Drive
5. **V médiích o nás** - 7 mediálních výstupů
6. **Aktéři** - 6 zodpovědných institucí
7. **Požadavky** - 7 konkrétních požadavků
8. **Petice** - Call-to-action sekce
9. **Zpětná vazba** - Funkční formulář
10. **Kontakt** - Kontaktní info + mapa
11. **Footer** - Patička s odkazy

**Funkce:**
- Sticky floating button pro petici
- Smooth scroll navigace
- Responzivní mobile menu
- Funkční kontaktní formulář (FormSubmit.co)
- Google Maps iframe

**Co je třeba upravit:**
- Nahradit `https://www.petice.com/NAZEV` skutečnou URL petice (3× v souboru)

---

## 🔍 SEO soubory

### `/public/robots.txt` ✅
**Pravidla pro vyhledávače**

- Povoluje indexaci všem botům
- Blokuje škodlivé boty (AhrefsBot, SemrushBot)
- Odkazuje na sitemap.xml

### `/public/sitemap.xml` ✅
**Mapa webu pro Google**

Obsahuje:
- 9 URL sekcí s prioritami
- Datum poslední modifikace
- Frekvence aktualizací

**Co aktualizovat:**
- `<lastmod>` datum při každé změně obsahu

### `/public/site.webmanifest` ✅
**PWA manifest pro mobilní zařízení**

- Název aplikace
- Ikony (192×192, 512×512)
- Theme color (#2d5016)

---

## 🖼️ Grafické soubory (TODO - vytvořte)

### `/public/og-image.jpg` ❗ VYTVOŘTE
**Open Graph obrázek pro sdílení na Facebooku/Twitter**
- Rozměry: 1200 × 630 px
- Formát: JPG
- Návod: [OG-IMAGE-GUIDE.md](OG-IMAGE-GUIDE.md)

### `/public/favicon-16x16.png` ❗ VYTVOŘTE
**Favicon 16×16 px**

### `/public/favicon-32x32.png` ❗ VYTVOŘTE
**Favicon 32×32 px**

### `/public/apple-touch-icon.png` ❗ VYTVOŘTE
**Apple Touch Icon 180×180 px**

### `/public/android-chrome-192x192.png` ❗ VYTVOŘTE
**Android Chrome Icon 192×192 px**

### `/public/android-chrome-512x512.png` ❗ VYTVOŘTE
**Android Chrome Icon 512×512 px**

### `/public/logo.png` ❗ VYTVOŘTE
**Logo webu** (použito ve strukturovaných datech)

### `/public/favicon.svg` ✅
**SVG favicon (fallback)** - Již vytvořeno

---

## 🚀 GitHub Pages & Deploy

### `/CNAME` ✅
**GitHub Pages - vlastní doména**
- Obsahuje: `www.leskozovka.cz`

### `/public/CNAME` ✅
**Backup CNAME pro build proces**
- Obsahuje: `www.leskozovka.cz`

### `/.github/workflows/deploy.yml` ✅
**GitHub Actions - automatický deploy workflow**

Spouští se při:
- Push do `main` větve
- Manuální spuštění

Provádí:
1. Instalaci závislostí
2. Build projektu (`npm run build`)
3. Kopírování CNAME, robots.txt, sitemap.xml
4. Deploy na GitHub Pages

### `/404.html` ✅
**Vlastní 404 stránka**
- Zelený design konzistentní s webem
- SPA redirect workaround pro GitHub Pages
- Tlačítko "Zpět na hlavní stránku"

---

## ⚙️ Konfigurace

### `/package.json` ✅
**NPM konfigurace**

Metadata:
- Název: `leskozovka`
- Popis: "Občanská iniciativa..."
- Autor: Ing. Dominik Žlebek, LL.M.
- Homepage: https://www.leskozovka.cz

Scripts:
- `npm run dev` - Vývoj
- `npm run build` - Produkční build
- `npm run preview` - Náhled buildu

**Co upravit:**
- `repository.url` - nahradit `VASE-JMENO` skutečným GitHub username

### `/vite.config.ts` ✅
**Vite build konfigurace**

- Base URL: `/` (pro vlastní doménu)
- Build optimalizace (minify, code splitting)
- Vendor chunk pro React

### `/.gitignore` ✅
**Git ignore soubor**
- Ignoruje node_modules, dist, .env
- Ignoruje editor files (.vscode, .idea)

---

## 📖 Dokumentace

### `/README.md` ✅
**Hlavní README projektu**

Obsahuje:
- Popis projektu
- Technologie
- Lokální vývoj
- Nasazení na GitHub Pages
- SEO optimalizace
- Struktura projektu
- Kontaktní informace

### `/DEPLOYMENT.md` ⭐
**Kompletní návod na nasazení**

Krok za krokem:
1. Příprava před nasazením
2. Konfigurace GitHub repository
3. Nastavení vlastní domény (DNS)
4. SEO & Google Search Console
5. Běžné problémy a řešení

### `/QUICK-START.md` ⭐
**Rychlé nasazení za 30 minut**

Zkrácená verze pro rychlé spuštění:
- 5 min: Grafické soubory
- 10 min: GitHub repozitář
- 10 min: Vlastní doména
- 5 min: Google Search Console

### `/SEO-CHECKLIST.md` ⭐
**SEO checklist a optimalizace**

Obsahuje:
- ✅ Co je již implementováno
- 📝 Co musíte ještě udělat
- 🎯 Klíčová slova pro cílení
- 📊 Metriky k sledování
- ⚡ Quick wins

### `/GOOGLE-SEARCH-CONSOLE.md` ⭐
**Návod na Google Search Console**

Detailní průvodce:
- Registrace webu
- Ověření vlastnictví
- Odeslání sitemap
- Vyžádání indexace
- Sledování výkonu
- Řešení problémů

### `/OG-IMAGE-GUIDE.md` ⭐
**Návod na vytvoření OG obrázku**

Obsahuje:
- Specifikace (1200×630 px)
- Návrhy designu
- Nástroje (Canva, Figma, Photoshop)
- Checklist před nahráním
- Testování

### `/LAUNCH-CHECKLIST.md` ⭐
**Kompletní checklist před spuštěním**

7 fází:
1. Příprava před nasazením
2. Nasazení na GitHub
3. Vlastní doména
4. SEO a Google
5. Testování
6. Spuštění a propagace
7. První týden po spuštění

### `/FILES-OVERVIEW.md` 📄
**Tento soubor - přehled všech souborů**

---

## 🛠️ Pomocné soubory

### `/ATTRIBUTIONS.md` ℹ️
**Licence a atribuce použitých knihoven**

### `/guidelines/Guidelines.md` ℹ️
**Figma Make guidelines** (systémový soubor)

---

## 📊 Statistika projektu

### Celkový počet souborů:
- **Webové**: 3 (index.html, App.tsx, komponenty)
- **SEO**: 3 (robots.txt, sitemap.xml, site.webmanifest)
- **Grafické**: 7 (5 TODO, 2 vytvořeno)
- **Konfigurace**: 5 (package.json, vite.config.ts, atd.)
- **Dokumentace**: 8 (README, návody, checklisty)
- **GitHub**: 3 (CNAME, workflows, 404.html)

### Celkem: ~30 důležitých souborů

---

## ✅ Checklist souborů

### ✅ Hotové soubory (můžete použít):
- [x] `/index.html` - SEO optimalizace
- [x] `/src/app/App.tsx` - React aplikace
- [x] `/public/robots.txt` - SEO
- [x] `/public/sitemap.xml` - SEO
- [x] `/public/site.webmanifest` - PWA
- [x] `/public/favicon.svg` - Favicon fallback
- [x] `/CNAME` - GitHub Pages doména
- [x] `/public/CNAME` - Backup
- [x] `/.github/workflows/deploy.yml` - GitHub Actions
- [x] `/404.html` - Custom 404
- [x] `/package.json` - NPM config
- [x] `/vite.config.ts` - Build config
- [x] `/.gitignore` - Git ignore
- [x] Všechna dokumentace (README, návody)

### ❗ TODO - Musíte vytvořit:
- [ ] `/public/og-image.jpg` (1200×630 px) **DŮLEŽITÉ!**
- [ ] `/public/favicon-16x16.png`
- [ ] `/public/favicon-32x32.png`
- [ ] `/public/apple-touch-icon.png`
- [ ] `/public/android-chrome-192x192.png`
- [ ] `/public/android-chrome-512x512.png`
- [ ] `/public/logo.png`

### ⚙️ Vyžaduje konfiguraci:
- [ ] `/index.html` - Přidat Google Analytics ID
- [ ] `/index.html` - Přidat Google Search Console verification
- [ ] `/src/app/App.tsx` - Nahradit URL petice (3×)
- [ ] `/package.json` - Nahradit GitHub username v repository URL

---

## 📂 Doporučená struktura složek

```
leskozovka/
├── public/                      # Statické soubory
│   ├── og-image.jpg            ❗ TODO
│   ├── favicon-*.png           ❗ TODO
│   ├── logo.png                ❗ TODO
│   ├── favicon.svg             ✅
│   ├── robots.txt              ✅
│   ├── sitemap.xml             ✅
│   ├── site.webmanifest        ✅
│   └── CNAME                   ✅
├── src/
│   ├── app/
│   │   ├── App.tsx             ✅ Hlavní komponenta
│   │   ├── main.tsx            ✅ Entry point
│   │   └── components/         ✅ React komponenty
│   └── styles/                 ✅ CSS styly
├── .github/
│   └── workflows/
│       └── deploy.yml          ✅ GitHub Actions
├── index.html                  ✅ HTML s SEO
├── package.json                ✅ NPM config
├── vite.config.ts              ✅ Vite config
├── CNAME                       ✅ GitHub Pages
├── 404.html                    ✅ Custom 404
├── .gitignore                  ✅ Git ignore
└── DOKUMENTACE/
    ├── README.md               ✅ Hlavní README
    ├── DEPLOYMENT.md           ✅ Návod na deploy
    ├── QUICK-START.md          ✅ Rychlý start
    ├── SEO-CHECKLIST.md        ✅ SEO checklist
    ├── GOOGLE-SEARCH-CONSOLE.md ✅ GSC návod
    ├── OG-IMAGE-GUIDE.md       ✅ OG obrázek návod
    ├── LAUNCH-CHECKLIST.md     ✅ Launch checklist
    └── FILES-OVERVIEW.md       ✅ Tento soubor
```

---

## 🔑 Klíčové soubory pro start

Pokud začínáte, **zaměřte se na tyto soubory**:

1. **[QUICK-START.md](QUICK-START.md)** - Začněte zde! (30 min)
2. **[OG-IMAGE-GUIDE.md](OG-IMAGE-GUIDE.md)** - Vytvořte OG obrázek
3. **[LAUNCH-CHECKLIST.md](LAUNCH-CHECKLIST.md)** - Checklist před spuštěním
4. **[DEPLOYMENT.md](DEPLOYMENT.md)** - Detailní návod (pokud potřebujete více info)

---

## 📞 Kontakt

Pokud máte dotazy k jakémukoli souboru:
- 📧 **Email**: info@leskozovka.cz
- 📖 **Dokumentace**: Použijte návody v tomto projektu

---

**✅ Všechny soubory jsou připraveny! Teď už jen vytvořte grafické soubory a nahrajte na GitHub.**

🌲 **Hodně štěstí!**
