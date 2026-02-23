# 🚀 Checklist pro spuštění webu www.leskozovka.cz

Tento checklist vám pomůže ujistit se, že je vše připraveno před oficiálním spuštěním webu.

---

## ✅ FÁZE 1: Příprava před nasazením

### 🎨 Grafické soubory

- [ ] **Vytvořit OG obrázek** (og-image.jpg, 1200×630 px)
  - Umístit do `/public/og-image.jpg`
  - Použít autentickou fotku černé skládky
  - Přidat text overlay: "LES U KLADNA V OHROŽENÍ"
  - [Návod: OG-IMAGE-GUIDE.md](OG-IMAGE-GUIDE.md)

- [ ] **Vygenerovat favicon sadu**
  - Použít [favicon.io](https://favicon.io/) nebo Canva
  - Vytvořit: favicon-16x16.png, favicon-32x32.png
  - Vytvořit: apple-touch-icon.png (180×180 px)
  - Vytvořit: android-chrome-192x192.png, android-chrome-512x512.png
  - Umístit vše do `/public/`

- [ ] **Vytvořit logo webu** (logo.png)
  - Jednoduchý zelený strom nebo text logo
  - Umístit do `/public/logo.png`

### 📝 Obsah

- [ ] **Zkontrolovat URL petice**
  - Nahradit `https://www.petice.com/NAZEV` skutečnou URL petice
  - Soubory: `/src/app/App.tsx` (3 místa)

- [ ] **Ověřit kontaktní email**
  - Email `info@leskozovka.cz` funguje
  - FormSubmit.co je nakonfigurován správně

- [ ] **Aktualizovat datum v sitemap.xml**
  - Nastavit `<lastmod>` na aktuální datum
  - Soubor: `/public/sitemap.xml`

- [ ] **Zkontrolovat všechny odkazy**
  - Odkazy na média (Kladenský deník, NášeKladno.cz)
  - Odkaz na Google Drive s fotkami
  - Odkaz na katastr nemovitostí
  - YouTube kanál @leskozovka

### 🔧 Technické

- [ ] **Aktualizovat package.json**
  - Nahradit `VASE-JMENO` v repository URL
  - Zkontrolovat version (1.0.0)

- [ ] **Vytvořit GitHub repozitář**
  - Pojmenovat např. `leskozovka`
  - Nastavit jako Public

---

## ✅ FÁZE 2: Nasazení na GitHub

### 📦 Git & GitHub

- [ ] **Inicializovat Git repozitář**
  ```bash
  git init
  git add .
  git commit -m "Initial commit - Les u Kladna website"
  git branch -M main
  ```

- [ ] **Nahrát na GitHub**
  ```bash
  git remote add origin https://github.com/VASE-JMENO/leskozovka.git
  git push -u origin main
  ```

- [ ] **Sledovat GitHub Actions**
  - Jít do záložky "Actions" v repozitáři
  - Ověřit, že build proběhl úspěšně ✅
  - Zkontrolovat logy, pokud chyba ❌

### 🌐 GitHub Pages

- [ ] **Aktivovat GitHub Pages**
  - Settings → Pages
  - Source: **GitHub Actions**

- [ ] **Počkat na první deploy**
  - Trvá 2-5 minut
  - Sledovat v Actions záložce

- [ ] **Otestovat na dočasné URL**
  - `https://VASE-JMENO.github.io/leskozovka/`
  - Zkontrolovat, že web funguje

---

## ✅ FÁZE 3: Vlastní doména

### 🌍 DNS Konfigurace

- [ ] **Přihlásit se k registrátorovi domény**
  - (Forpsi, Wedos, GoDaddy, apod.)

- [ ] **Přidat CNAME záznam**
  ```
  Typ: CNAME
  Název: www
  Hodnota: VASE-JMENO.github.io
  TTL: 3600
  ```

- [ ] **Přidat A záznamy** (pro apex doménu)
  ```
  Typ: A | Název: @ | Hodnota: 185.199.108.153 | TTL: 3600
  Typ: A | Název: @ | Hodnota: 185.199.109.153 | TTL: 3600
  Typ: A | Název: @ | Hodnota: 185.199.110.153 | TTL: 3600
  Typ: A | Název: @ | Hodnota: 185.199.111.153 | TTL: 3600
  ```

- [ ] **Počkat na propagaci DNS**
  - Obvykle 1-6 hodin (max 48 hodin)
  - Testovat: `dig www.leskozovka.cz` nebo [dnschecker.org](https://dnschecker.org/)

### 🔒 HTTPS v GitHub Pages

- [ ] **Přidat vlastní doménu v GitHub Pages**
  - Settings → Pages → Custom domain
  - Zadat: `www.leskozovka.cz`
  - Kliknout Save

- [ ] **Počkat na DNS check**
  - GitHub automaticky ověří DNS
  - Může trvat 5-30 minut

- [ ] **Aktivovat "Enforce HTTPS"**
  - Zaškrtnout po úspěšném DNS check
  - Počkat 1-2 minuty na aktivaci certifikátu

- [ ] **Otestovat HTTPS**
  - Otevřít: `https://www.leskozovka.cz`
  - Ověřit zelený zámek v prohlížeči 🔒

---

## ✅ FÁZE 4: SEO a Google

### 🔍 Google Search Console

- [ ] **Zaregistrovat web**
  - [search.google.com/search-console](https://search.google.com/search-console/)
  - Add property → URL prefix
  - Zadat: `https://www.leskozovka.cz`

- [ ] **Ověřit vlastnictví**
  - Metoda: HTML meta tag
  - Zkopírovat ověřovací kód
  - Vložit do `/index.html`
  - Git commit + push
  - Kliknout "Verify" v GSC

- [ ] **Odeslat sitemap**
  - V GSC: Sitemaps → Submit
  - URL: `https://www.leskozovka.cz/sitemap.xml`

- [ ] **Vyžádat indexaci**
  - URL Inspection → Test live URL
  - Request indexing pro hlavní stránku
  - [Návod: GOOGLE-SEARCH-CONSOLE.md](GOOGLE-SEARCH-CONSOLE.md)

### 📊 Google Analytics (volitelné)

- [ ] **Vytvořit GA4 property**
  - [analytics.google.com](https://analytics.google.com/)
  - Create property → Web

- [ ] **Přidat tracking kód**
  - Zkopírovat Google tag
  - Vložit do `/index.html` (místo je připravené)
  - Git commit + push

- [ ] **Otestovat tracking**
  - Otevřít web
  - V GA4: Reports → Realtime
  - Ověřit, že vidíte svou návštěvu

---

## ✅ FÁZE 5: Testování

### 🧪 Funkční testování

- [ ] **Navigace**
  - Všechny menu položky fungují (scrollují na správné sekce)
  - Mobile menu funguje (otevřít/zavřít)
  - Sticky floating button pro petici funguje

- [ ] **Odkazy**
  - Odkaz na petici funguje (otevře v novém okně)
  - Odkaz na Google Drive s fotkami funguje
  - Odkaz na katastr nemovitostí funguje
  - Všechny odkazy na mediální články fungují
  - Email odkazy fungují (mailto:)

- [ ] **Formulář zpětné vazby**
  - Vyplnit testovací formulář
  - Odeslat
  - Zkontrolovat, že email dorazil na info@leskozovka.cz

- [ ] **Mapa**
  - Google Maps iframe se načítá
  - Zobrazuje správnou lokaci (50.1262367, 14.1089158)

### 📱 Responzivita

- [ ] **Mobile (375px)**
  - Text je čitelný
  - Obrázky se načítají
  - Tlačítka jsou klikatelná
  - Menu funguje

- [ ] **Tablet (768px)**
  - Layout je správně zarovnaný
  - Navigace funguje

- [ ] **Desktop (1920px)**
  - Žádné horizontální scrollování
  - Obsah je vycentrovaný

### 🚀 Výkon

- [ ] **PageSpeed Insights**
  - Test: [pagespeed.web.dev](https://pagespeed.web.dev/)
  - Mobile skóre: 80+ ✅ (90+ ideální)
  - Desktop skóre: 90+ ✅

- [ ] **Mobile-Friendly Test**
  - Test: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)
  - Výsledek: "Mobile-friendly" ✅

### 🔗 Social Sharing

- [ ] **Facebook Sharing Debugger**
  - Test: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
  - OG image se zobrazuje ✅
  - Title a description jsou správné ✅

- [ ] **Twitter Card Validator**
  - Test: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
  - Card se zobrazuje správně ✅

- [ ] **LinkedIn Post Inspector**
  - Test: [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/)
  - Náhled je v pořádku ✅

### 🔍 Strukturovaná data

- [ ] **Google Rich Results Test**
  - Test: [search.google.com/test/rich-results](https://search.google.com/test/rich-results)
  - Žádné chyby ✅
  - Schema.org data jsou validní ✅

---

## ✅ FÁZE 6: Spuštění a propagace

### 📣 Oznámení spuštění

- [ ] **Tisková zpráva**
  - Napsat tiskovou zprávu o spuštění webu a petice
  - Odeslat na: Kladenský deník, NášeKladno.cz, iDnes.cz, Novinky.cz

- [ ] **Sociální sítě**
  - Facebook post s odkazem na web
  - Twitter/X post
  - LinkedIn post (pokud relevantní)

- [ ] **Email kampaň**
  - Rozeslat email místním obyvatelům
  - Kontaktovat ekologické organizace

- [ ] **Úřady**
  - Poslat email na Magistrát města Kladno
  - Poslat email na ČIŽP
  - Poslat email na Benediktinské arciopatství

### 🎯 Petice

- [ ] **Zkontrolovat URL petice**
  - Petice je živá a dostupná
  - Sdílecí tlačítka fungují

- [ ] **První podpisy**
  - Podepsat sami
  - Požádat přátele a rodinu
  - Cíl: 100 podpisů první týden

### 📊 Monitoring

- [ ] **Nastavit Google Alerts**
  - [google.com/alerts](https://www.google.com/alerts)
  - Klíčová slova: "les u kladna", "černá skládka kladno", "leskozovka"

- [ ] **Sledovat analytiku**
  - Denně první týden
  - Týdně po prvním měsíci
  - Měsíčně dlouhodobě

---

## ✅ FÁZE 7: První týden po spuštění

### Den 1-2:

- [ ] Sledovat Google Analytics (realtime)
- [ ] Sledovat petici (počet podpisů)
- [ ] Opravit případné chyby
- [ ] Odpovídat na zpětnou vazbu z formuláře

### Den 3-7:

- [ ] Zkontrolovat Google Search Console (první impressions)
- [ ] Sdílet web na dalších platformách
- [ ] Kontaktovat další média
- [ ] Aktualizovat obsah (pokud jsou nové události)

---

## ✅ Dlouhodobá údržba

### Týdně:

- [ ] Zkontrolovat Google Analytics
- [ ] Zkontrolovat počet podpisů petice
- [ ] Odpovědět na nové zpětné vazby

### Měsíčně:

- [ ] Aktualizovat sekci "Historie" (nové události)
- [ ] Přidat nové mediální výstupy do "V médiích o nás"
- [ ] Aktualizovat datum v sitemap.xml
- [ ] Zkontrolovat broken links
- [ ] Analyzovat GSC data (top queries, CTR)

### Čtvrtletně:

- [ ] Aktualizovat OG obrázek (nový design)
- [ ] Optimalizovat podprůměrné stránky (nízký CTR)
- [ ] Získat nové backlinky
- [ ] Vylepšit obsah na základě dat

---

## 🎉 Gratulace!

Pokud jste zaškrtli všechny položky, váš web je **plně připraven a spuštěný**!

### 📞 Potřebujete pomoc?

- 📖 [DEPLOYMENT.md](DEPLOYMENT.md) - Detailní návod na nasazení
- 📖 [SEO-CHECKLIST.md](SEO-CHECKLIST.md) - SEO optimalizace
- 📖 [GOOGLE-SEARCH-CONSOLE.md](GOOGLE-SEARCH-CONSOLE.md) - Google Search Console
- 📖 [OG-IMAGE-GUIDE.md](OG-IMAGE-GUIDE.md) - Vytvoření OG obrázku
- 📧 info@leskozovka.cz

---

**🌲 Hodně štěstí s ochranou lesa u Kladna!**

*Vytvořeno s ❤️ pro ochranu přírody*
