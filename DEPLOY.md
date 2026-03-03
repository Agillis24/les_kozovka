# 🚀 Návod na nasazení webu leskozovka.cz na GitHub Pages

## 📋 Předpoklady

- GitHub účet
- Git nainstalovaný na počítači
- Node.js 20+ nainstalovaný
- Vlastní doména www.leskozovka.cz (nakoupená u registrátora)

---

## 🔧 Krok 1: Příprava repozitáře na GitHubu

1. **Vytvořte nový repozitář na GitHubu:**
   - Přejděte na https://github.com/new
   - Název: `leskozovka-web` (nebo libovolný název)
   - Nastavte jako **Public** (pro GitHub Pages zdarma)
   - ❌ NEVYTVÁŘEJTE README, .gitignore ani LICENSE (už je v projektu)

2. **Inicializujte lokální Git repozitář:**
   ```bash
   cd /cesta/k/projektu
   git init
   git add .
   git commit -m "Initial commit: Les u Kladna web"
   ```

3. **Propojte lokální repozitář s GitHubem:**
   ```bash
   git remote add origin https://github.com/VAS-USERNAME/leskozovka-web.git
   git branch -M main
   git push -u origin main
   ```

---

## ⚙️ Krok 2: Aktivace GitHub Pages

1. Přejděte do nastavení repozitáře na GitHubu:
   - `Settings` → `Pages` (v levém menu)

2. **Source (Zdroj):**
   - Vyberte: **GitHub Actions**
   - (Tento projekt má automatický workflow v `.github/workflows/deploy.yml`)

3. Uložte nastavení.

---

## 🌐 Krok 3: Nastavení vlastní domény www.leskozovka.cz

### A) Nastavení DNS u registrátora domény

Přihlaste se k administraci domény u vašeho registrátora (např. Wedos, Forpsi, GoDaddy) a přidejte tyto DNS záznamy:

**Varianta 1: CNAME záznam (DOPORUČENO)**
```
Typ:   CNAME
Název: www
Cíl:   VAS-USERNAME.github.io
TTL:   3600 (nebo automaticky)
```

**A pokud chcete i apex doménu (leskozovka.cz bez www), přidejte A záznamy:**
```
Typ:   A
Název: @  (nebo prázdné)
Hodnota: 185.199.108.153
TTL:   3600

Typ:   A
Název: @
Hodnota: 185.199.109.153
TTL:   3600

Typ:   A
Název: @
Hodnota: 185.199.110.153
TTL:   3600

Typ:   A
Název: @
Hodnota: 185.199.111.153
TTL:   3600
```

**A přesměrování z apex na www (CNAME flatten nebo ALIAS):**
```
Typ:   CNAME
Název: @
Cíl:   www.leskozovka.cz
```

### B) Nastavení Custom Domain v GitHub Pages

1. Přejděte do: `Settings` → `Pages`
2. V sekci **Custom domain** zadejte: `www.leskozovka.cz`
3. Klikněte na **Save**
4. ✅ Zaškrtněte **Enforce HTTPS** (po ověření domény – cca 10-60 minut)

### C) Ověření CNAME souboru

Projekt už obsahuje soubor `/public/CNAME` s obsahem:
```
www.leskozovka.cz
```

Tento soubor se automaticky zkopíruje do `/dist` při buildu.

---

## 🔄 Krok 4: Automatický deployment

Po prvním push na větev `main` se automaticky spustí GitHub Actions:

1. **Sledování deploymentu:**
   - Přejděte na: `Actions` tab v repozitáři
   - Uvidíte workflow "Deploy to GitHub Pages"
   - Deployment trvá cca 2-5 minut

2. **Po úspěšném deployi:**
   - Web bude dostupný na: `https://www.leskozovka.cz`
   - První zobrazení může trvat až 10 minut kvůli DNS propagaci

---

## 📘 Automatická synchronizace „Aktuality z Facebooku"

Sekce „Aktuality z Facebooku" běží automaticky přes vloženou timeline Facebook stránky (Facebook Page Plugin).

Není potřeba nastavovat žádné Facebook API secrets ani variables v GitHub Actions.

Detailní postup je v [FACEBOOK-AUTO-SYNC.md](./FACEBOOK-AUTO-SYNC.md).

---

## 🔍 Krok 5: Google Search Console

### Přidání webu do Google Search Console

1. **Přejděte na:** https://search.google.com/search-console

2. **Přidat vlastnictví (property):**
   - Klikněte na "Přidat vlastnictví"
   - Zadejte: `https://www.leskozovka.cz`

3. **Ověření vlastnictví (metoda DNS - DOPORUČENO):**
   - Google vám poskytne TXT záznam, např.:
     ```
     Typ:   TXT
     Název: @
     Hodnota: google-site-verification=ABC123XYZ...
     ```
   - Přidejte tento záznam do DNS u registrátora
   - Počkejte 10-60 minut na propagaci
   - Klikněte v GSC na "Ověřit"

   **NEBO metoda HTML tag (v index.html):**
   - Google vám poskytne meta tag
   - Odkomentujte v `/index.html` řádek 173 a vložte kód:
     ```html
     <meta name="google-site-verification" content="ABC123XYZ..." />
     ```
   - Commit a push změn
   - V GSC klikněte na "Ověřit"

4. **Odeslání sitemap:**
   - V Google Search Console → Sitemaps
   - Zadejte URL: `https://www.leskozovka.cz/sitemap.xml`
   - Klikněte na "Odeslat"

5. **Vyžádání indexace:**
   - URL Inspection → Zadejte `https://www.leskozovka.cz`
   - Klikněte na "Request Indexing"

---

## 📊 Krok 6: Google Analytics (volitelné)

1. **Vytvořte Google Analytics účet:**
   - https://analytics.google.com
   - Vytvořte novou "Property" pro `www.leskozovka.cz`
   - Získáte Measurement ID (formát: `G-XXXXXXXXXX`)

2. **Aktivujte GA v index.html:**
   - Otevřete `/index.html`
   - Najděte řádky 162-170
   - Odkomentujte celý blok a nahraďte `G-XXXXXXXXXX` vaším ID:
     ```html
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
       gtag('config', 'G-XXXXXXXXXX');
     </script>
     ```

3. **Commit a push změn:**
   ```bash
   git add index.html
   git commit -m "Add Google Analytics tracking"
   git push
   ```

---

## 🎨 Krok 7: Vytvoření favicon a OG image

### Favicon (ikona webu)

1. **Vytvořte ikonu webu:**
   - Doporučený nástroj: https://realfavicongenerator.net/
   - Nahrajte logo (ideálně 512x512 px PNG s průhledným pozadím)
   - Stáhněte vygenerovaný balíček

2. **Umístěte soubory do `/public/`:**
   ```
   /public/favicon.ico
   /public/favicon.svg
   /public/favicon-16x16.png
   /public/favicon-32x32.png
   /public/apple-touch-icon.png
   /public/android-chrome-192x192.png
   /public/android-chrome-512x512.png
   ```

### Open Graph obrázek (pro Facebook/Twitter)

1. **Vytvořte OG obrázek:**
   - Rozměr: **1200 x 630 px**
   - Formát: JPG nebo PNG
   - Obsah: Hlavní vizuál webu + text "Les u Kladna v ohrožení"
   - Nástroj: Canva, Figma, Photoshop

2. **Umístěte do `/public/og-image.jpg`**

3. **Commit a push:**
   ```bash
   git add public/
   git commit -m "Add favicon and OG image"
   git push
   ```

---

## ✅ Kontrolní seznam před spuštěním

- [ ] DNS záznamy nastaveny u registrátora
- [ ] Custom domain ověřena v GitHub Pages
- [ ] HTTPS aktivováno (Enforce HTTPS)
- [ ] První deployment proběhl úspěšně (Actions → zelená fajfka)
- [ ] Web dostupný na `https://www.leskozovka.cz`
- [ ] Google Search Console ověřeno
- [ ] Sitemap.xml odeslaná v GSC
- [ ] Favicon a OG image nahrány
- [ ] Google Analytics aktivována (volitelné)
- [ ] robots.txt dostupný na `https://www.leskozovka.cz/robots.txt`
- [ ] Testováno na mobilu (Chrome DevTools → Responsive mode)

---

## 🔄 Aktualizace webu v budoucnu

```bash
# 1. Proveďte změny v kódu
# 2. Commit změn
git add .
git commit -m "Popis změny"

# 3. Push na GitHub
git push

# 4. GitHub Actions automaticky nasadí novou verzi (2-5 minut)
```

---

## 🆘 Řešení problémů

### Web se nezobrazuje po 10 minutách
- Zkontrolujte DNS záznamy: https://dnschecker.org/#CNAME/www.leskozovka.cz
- Zkontrolujte GitHub Actions: Je deployment zelený?
- Zkontrolujte CNAME soubor: Obsahuje `www.leskozovka.cz`?

### 404 chyba při načtení
- GitHub Pages někdy trvá až 24 hodin na propagaci DNS
- Zkuste hard refresh: Ctrl + Shift + R (Windows) / Cmd + Shift + R (Mac)
- Zkontrolujte, že Custom domain je správně nastavena v Settings → Pages

### HTTPS nefunguje
- Počkejte 10-60 minut po ověření domény
- Ujistěte se, že DNS záznamy jsou správně nastaveny
- Zkuste vypnout a znovu zapnout "Enforce HTTPS"

### CSS/JS se nenačítá
- Zkontrolujte konzoli prohlížeče (F12)
- Ujistěte se, že `base: '/'` v `vite.config.ts` je správně nastaveno

---

## 📞 Kontakt

Pokud narazíte na problémy, kontaktujte:
- **Email:** info@leskozovka.cz
- **GitHub Issues:** https://github.com/VAS-USERNAME/leskozovka-web/issues

---

## 📚 Užitečné odkazy

- GitHub Pages dokumentace: https://docs.github.com/en/pages
- Google Search Console: https://search.google.com/search-console
- DNS checker: https://dnschecker.org
- Favicon generátor: https://realfavicongenerator.net
- Canva (OG image): https://www.canva.com
- Vite dokumentace: https://vitejs.dev

---

**Úspěšný deployment! 🎉**
