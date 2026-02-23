# 🎯 SEO Checklist pro www.leskozovka.cz

## ✅ Co je již implementováno

### Meta Tagy
- ✅ Title tag optimalizovaný pro SEO
- ✅ Meta description (155-160 znaků)
- ✅ Meta keywords (relevantní klíčová slova)
- ✅ Canonical URL
- ✅ Language meta tag (cs)
- ✅ Geo meta tagy (region, pozice GPS)
- ✅ Robots meta tag (index, follow)

### Open Graph (Facebook, LinkedIn)
- ✅ og:type, og:url, og:title
- ✅ og:description
- ✅ og:image (1200×630 px)
- ✅ og:locale (cs_CZ)
- ✅ og:site_name

### Twitter Cards
- ✅ twitter:card (summary_large_image)
- ✅ twitter:title, twitter:description
- ✅ twitter:image

### Strukturovaná Data (Schema.org)
- ✅ Organization schema
- ✅ Place schema (GPS souřadnice)
- ✅ Article schema
- ✅ BreadcrumbList schema

### Technické SEO
- ✅ robots.txt připravený
- ✅ sitemap.xml vytvořený
- ✅ HTTPS ready (GitHub Pages)
- ✅ Responzivní design (mobile-first)
- ✅ Semantic HTML5 (section, nav, article)
- ✅ 404.html stránka
- ✅ CNAME pro vlastní doménu
- ✅ PWA manifest (site.webmanifest)
- ✅ Favicon sada připravená

### Obsah
- ✅ Strukturované nadpisy (H1, H2)
- ✅ Alt texty pro obrázky (připravené)
- ✅ Interní odkazy mezi sekcemi
- ✅ Externí odkazy na relevantní zdroje

---

## 📝 Co musíte ještě udělat

### 1. Vytvořit grafické soubory

Vytvořte tyto soubory a umístěte je do `/public/`:

- [ ] **favicon-16x16.png** (16×16 px)
- [ ] **favicon-32x32.png** (32×32 px)
- [ ] **apple-touch-icon.png** (180×180 px)
- [ ] **android-chrome-192x192.png** (192×192 px)
- [ ] **android-chrome-512x512.png** (512×512 px)
- [ ] **og-image.jpg** (1200×630 px) - pro sdílení na Facebooku
- [ ] **logo.png** - logo webu

**Doporučení pro og-image.jpg:**
- Použijte autentickou fotografii černé skládky z Google Drive
- Přidejte text overlay: "Les u Kladna v ohrožení"
- Ujistěte se, že je obraz čitelný i v malém náhledu

**Nástroje pro tvorbu:**
- [Canva](https://www.canva.com/) - pro OG obrázek
- [Favicon.io](https://favicon.io/) - pro generování favicon sady

### 2. Google Search Console

- [ ] Zaregistrujte web na [Google Search Console](https://search.google.com/search-console/)
- [ ] Ověřte vlastnictví přes HTML meta tag
- [ ] Odešlete sitemap.xml: `https://www.leskozovka.cz/sitemap.xml`
- [ ] Vyžádejte indexaci hlavní stránky
- [ ] Sledujte výkon vyhledávání po 7 dnech

Ověřovací meta tag vložte do `/index.html` na řádek označený komentářem:
```html
<meta name="google-site-verification" content="VÁŠ-KÓDOD-GOOGLE" />
```

### 3. Google Analytics (volitelné)

- [ ] Vytvořte Google Analytics 4 property
- [ ] Zkopírujte tracking kód (Google tag)
- [ ] Vložte ho do `/index.html` v sekci označené komentářem
- [ ] Otestujte, že funguje (Real-time reports v GA)

### 4. Testování před spuštěním

- [ ] **Facebook Sharing Debugger**: [https://developers.facebook.com/tools/debug/](https://developers.facebook.com/tools/debug/)
  - Otestujte: `https://www.leskozovka.cz`
  - Zkontrolujte, že OG obrázek a text se zobrazuje správně
  
- [ ] **Twitter Card Validator**: [https://cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
  
- [ ] **Google Rich Results Test**: [https://search.google.com/test/rich-results](https://search.google.com/test/rich-results)
  - Ověřte strukturovaná data (Schema.org)
  
- [ ] **PageSpeed Insights**: [https://pagespeed.web.dev/](https://pagespeed.web.dev/)
  - Cílové skóre: 90+ (mobile i desktop)
  
- [ ] **Mobile-Friendly Test**: [https://search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)

### 5. Lokální SEO

- [ ] Zaregistrujte web na [Google My Business](https://www.google.com/business/) (pokud relevantní)
- [ ] Přidejte web do lokálních adresářů:
  - [Firmy.cz](https://www.firmy.cz/)
  - [Mapy.cz](https://napoveda.seznam.cz/cz/mapy/vkladani-firem/)
  
### 6. Backlinky (zpětné odkazy)

Pro zlepšení SEO získejte odkazy z:

- [ ] **Místní zpravodajské weby**:
  - Kladenský deník (už vás zmínili - požádejte o odkaz)
  - NášeKladno.cz (už vás zmínili)
  
- [ ] **Úřední weby**:
  - Město Kladno (žádost o zveřejnění petice)
  - Středočeský kraj
  
- [ ] **Ekologické organizace**:
  - Arnika
  - Hnutí DUHA
  - Zelený kruh
  
- [ ] **Sociální sítě**:
  - Facebook stránka pro projekt
  - Instagram profil
  - YouTube kanál (už máte: @leskozovka)

### 7. Průběžná optimalizace

- [ ] Sledujte pozice klíčových slov v Google Search Console
- [ ] Pravidelně aktualizujte sekci "Historie" (přidávejte nové události)
- [ ] Přidávejte nové mediální výstupy do sekce "V médiích o nás"
- [ ] Aktualizujte datum v sitemap.xml při změnách: `<lastmod>2026-XX-XX</lastmod>`
- [ ] Odpovídejte na zpětnou vazbu a publikujte ji na webu (buduje důvěru)

---

## 🎯 Klíčová slova pro cílení

### Primární klíčová slova:
- černá skládka Kladno
- nelegální skládka Kladno
- les Kožovka Kladno
- životní prostředí Kladno
- požár les Kladno

### Sekundární klíčová slova:
- petice Kladno životní prostředí
- bezdomovec černá skládka
- Benediktinské arciopatství pozemek
- parcela 3830/4 Kročehlavy
- ČIŽP Kladno

### Long-tail klíčová slova:
- co se děje v lese u Kladna
- černá skládka u Kožovky
- požár v lese Kladno duben 2025
- jak pomoct lesu u Kladna
- petice za ochranu lesa Kladno

---

## 📊 Sledování úspěšnosti (po 30 dnech)

### Metriky k měření:

1. **Google Search Console:**
   - Počet impresí ve vyhledávání
   - Počet kliknutí
   - Průměrná pozice klíčových slov
   - CTR (Click-Through Rate)

2. **Google Analytics:**
   - Počet návštěvníků (sessions)
   - Průměrná doba na stránce
   - Bounce rate (míra okamžitého opuštění)
   - Konverzní cíle (podpisy petice, odeslané formuláře)

3. **Petice:**
   - Počet podpisů
   - Zdroje podpisů (odkud lidé přišli)

4. **Mediální pokrytí:**
   - Počet článků
   - Počet zpětných odkazů
   - Zmínky na sociálních sítích

---

## ⚡ Quick Wins pro okamžité SEO

1. **Sdílejte web na Facebooku** s optimalizovaným postem
2. **Napište tiskovou zprávu** a pošlete ji místním médiím
3. **Požádejte organizace z "Aktéři"** o odkaz na váš web
4. **Vytvořte YouTube video** o problému a odkažte na web
5. **Komentujte pod články** na Kladenském deníku s odkazem na web

---

## 🚨 Důležitá upozornění

- ⚠️ SEO výsledky trvají 3-6 měsíců (buďte trpěliví)
- ⚠️ Aktualizujte `lastmod` v sitemap.xml při každé změně
- ⚠️ Nepoužívejte keyword stuffing (nadměrné opakování klíčových slov)
- ⚠️ Nepokupujte zpětné odkazy (Google penalizuje)
- ⚠️ Pravidelně kontrolujte funkčnost všech odkazů

---

**📧 Kontakt pro SEO dotazy:** info@leskozovka.cz
