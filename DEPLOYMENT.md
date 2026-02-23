# 🚀 Průvodce nasazením na GitHub Pages

Tento dokument obsahuje kompletní návod pro nasazení webu **www.leskozovka.cz** na GitHub Pages.

---

## 📋 Příprava před nasazením

### 1. Kontrola souborů

Ujistěte se, že máte všechny tyto soubory:

- ✅ `/CNAME` - obsahuje `www.leskozovka.cz`
- ✅ `/public/CNAME` - obsahuje `www.leskozovka.cz`
- ✅ `/public/robots.txt` - pravidla pro vyhledávače
- ✅ `/public/sitemap.xml` - mapa stránek
- ✅ `/public/site.webmanifest` - PWA manifest
- ✅ `/.github/workflows/deploy.yml` - GitHub Actions workflow
- ✅ `/404.html` - vlastní 404 stránka

### 2. Favicon a OG obrázky (Vytvořte tyto soubory)

Umístěte do složky `/public/`:

- `favicon-16x16.png` (16×16 px)
- `favicon-32x32.png` (32×32 px)
- `apple-touch-icon.png` (180×180 px)
- `android-chrome-192x192.png` (192×192 px)
- `android-chrome-512x512.png` (512×512 px)
- `og-image.jpg` (1200×630 px) - pro sdílení na sociálních sítích
- `logo.png` - logo webu

**Doporučení:** Použijte fotografii černé skládky nebo lesa jako OG obrázek.

---

## 🔧 Konfigurace GitHub Repository

### Krok 1: Vytvořte GitHub repozitář

1. Přihlaste se na [GitHub.com](https://github.com)
2. Klikněte na **"New repository"**
3. Pojmenujte repozitář (např. `leskozovka`)
4. Nastavte jako **Public**
5. **Nevytvářejte** README, .gitignore ani licenci (už je máte)
6. Klikněte **"Create repository"**

### Krok 2: Nahrajte kód do repozitáře

```bash
# V terminálu ve složce projektu:

git init
git add .
git commit -m "Initial commit - Les u Kladna website"
git branch -M main
git remote add origin https://github.com/VASE-UZIVATELSKE-JMENO/leskozovka.git
git push -u origin main
```

**⚠️ Důležité:** Nahraďte `VASE-UZIVATELSKE-JMENO` vaším skutečným GitHub uživatelským jménem.

### Krok 3: Aktivujte GitHub Pages

1. V repozitáři jděte na **Settings** (Nastavení)
2. V levém menu klikněte na **Pages**
3. V sekci **"Build and deployment"**:
   - **Source:** Vyberte `GitHub Actions`
4. Uložte změny

### Krok 4: Spusťte deploy

Jakmile nahrajete kód, GitHub Actions automaticky:
1. Nainstaluje závislosti
2. Sestaví projekt (`npm run build`)
3. Zkopíruje CNAME, robots.txt a sitemap.xml
4. Nasadí web na GitHub Pages

Sledujte průběh v záložce **Actions** v repozitáři.

---

## 🌐 Nastavení vlastní domény (www.leskozovka.cz)

### Krok 1: Konfigurace DNS u registrátora domény

U svého registrátora domény (např. Forpsi, Wedos, GoDaddy) přidejte tyto DNS záznamy:

#### Pro www.leskozovka.cz (PREFEROVÁNO):
```
Typ: CNAME
Název: www
Hodnota: VASE-UZIVATELSKE-JMENO.github.io
TTL: 3600 (nebo automaticky)
```

#### Pro apex doménu (leskozovka.cz):
```
Typ: A
Název: @ (nebo ponechte prázdné)
Hodnota: 185.199.108.153
TTL: 3600

Typ: A
Název: @ (nebo ponechte prázdné)
Hodnota: 185.199.109.153
TTL: 3600

Typ: A
Název: @ (nebo ponechte prázdné)
Hodnota: 185.199.110.153
TTL: 3600

Typ: A
Název: @ (nebo ponechte prázdné)
Hodnota: 185.199.111.153
TTL: 3600
```

#### Přesměrování (redirect) z apex na www:
```
Typ: CNAME
Název: leskozovka.cz
Hodnota: www.leskozovka.cz
```

**⚠️ Změny DNS mohou trvat až 48 hodin (obvykle 1-6 hodin).**

### Krok 2: Přidání domény v GitHub Pages

1. V repozitáři jděte na **Settings → Pages**
2. V sekci **"Custom domain"** zadejte: `www.leskozovka.cz`
3. Klikněte **Save**
4. Počkejte na DNS kontrolu (může trvat několik minut)
5. Až se DNS ověří, zaškrtněte **"Enforce HTTPS"**

---

## 🔍 SEO & Google Search Console

### Krok 1: Registrace do Google Search Console

1. Jděte na [Google Search Console](https://search.google.com/search-console/)
2. Klikněte **"Add property"** → **"URL prefix"**
3. Zadejte: `https://www.leskozovka.cz`
4. **Ověření vlastnictví:**
   - Zvolte metodu **"HTML tag"**
   - Zkopírujte ověřovací kód (např. `<meta name="google-site-verification" content="ABC123...">`)
   - Přidejte tento kód do `/index.html` v sekci `<head>` (řádek je připravený jako komentář)
   - Proveďte `git commit` a `git push`
   - Po deployi klikněte v GSC na **"Verify"**

### Krok 2: Odeslání sitemap.xml

1. Po ověření vlastnictví v GSC jděte na **Sitemaps** (levé menu)
2. Zadejte: `https://www.leskozovka.cz/sitemap.xml`
3. Klikněte **Submit**

Google začne indexovat váš web. První výsledky uvidíte za 1-3 dny.

### Krok 3: Google Analytics (volitelné)

1. Vytvořte účet na [Google Analytics](https://analytics.google.com/)
2. Vytvořte nový web property pro `www.leskozovka.cz`
3. Zkopírujte tracking kód (Google tag - GA4)
4. Vložte ho do `/index.html` do sekce `<head>` (místo je připravené jako komentář)
5. Commitněte a pushněte změny

---

## ✅ Kontrolní seznam po nasazení

- [ ] Web je dostupný na `https://www.leskozovka.cz`
- [ ] HTTPS je aktivní (zelený zámek v prohlížeči)
- [ ] Robots.txt je dostupný: `https://www.leskozovka.cz/robots.txt`
- [ ] Sitemap je dostupný: `https://www.leskozovka.cz/sitemap.xml`
- [ ] OG obrázky se správně zobrazují při sdílení (test: [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/))
- [ ] Google Search Console je ověřený a sitemap odeslán
- [ ] Všechny sekce fungují (navigace, formulář, odkazy)
- [ ] Web je responzivní na mobilu i počítači
- [ ] Rychlost webu je dobrá ([PageSpeed Insights](https://pagespeed.web.dev/))

---

## 🛠️ Běžné problémy a řešení

### Problém: Web se nezobrazuje po nasazení
**Řešení:**
1. Zkontrolujte, že GitHub Actions build proběhl úspěšně (záložka Actions)
2. Zkontrolujte, že Pages jsou aktivované (Settings → Pages)
3. Počkejte 5-10 minut a vymažte cache prohlížeče (Ctrl+Shift+R)

### Problém: Vlastní doména nefunguje
**Řešení:**
1. Zkontrolujte DNS záznamy u registrátora
2. Použijte nástroj: `dig www.leskozovka.cz` nebo [DNS Checker](https://dnschecker.org/)
3. Počkejte až 48 hodin na propagaci DNS

### Problém: HTTPS nelze aktivovat
**Řešení:**
1. Ujistěte se, že DNS je správně nastaveno
2. Počkejte 24 hodin po nastavení DNS
3. Zkuste odebrat a znovu přidat vlastní doménu v GitHub Pages

### Problém: 404 chyba na podstránkách
**Řešení:**
- Ujistěte se, že `/404.html` existuje a obsahuje SPA redirect script
- Tento web je SPA (Single Page App), všechny "podstránky" jsou anchor linky (#)

### Problém: Obrázky se nenačítají
**Řešení:**
1. Zkontrolujte, že `vite.config.ts` má správně nastavený `base` (mělo by být `/` pro vlastní doménu)
2. Zkontrolujte importy obrázků v kódu

---

## 🔄 Aktualizace webu v budoucnu

Kdykoli chcete web aktualizovat:

```bash
# Proveďte změny v kódu

git add .
git commit -m "Popis změn (např. Aktualizace fotogalerie)"
git push

# GitHub Actions automaticky nasadí novou verzi
```

Nová verze bude online za 2-5 minut.

---

## 📞 Podpora

Pokud narazíte na problémy:

1. Zkontrolujte [GitHub Pages dokumentaci](https://docs.github.com/en/pages)
2. Zkontrolujte logy v záložce **Actions** v repozitáři
3. Kontaktujte technickou podporu GitHub

---

## 📊 Další doporučení

### Vylepšení SEO:
- ✅ Pravidelně aktualizujte obsah (Google upřednostňuje čerstvý obsah)
- ✅ Přidávejte nové články/aktuality do sekce "V médiích o nás"
- ✅ Získávejte zpětné odkazy (backlinks) z relevantních webů (Kladno.cz, ekologické weby)
- ✅ Sdílejte web na sociálních sítích

### Výkon webu:
- ✅ Optimalizujte obrázky (WebP formát, komprese)
- ✅ Použijte lazy loading pro obrázky
- ✅ Minimalizujte JavaScript (už je hotové díky Vite)

### Bezpečnost:
- ✅ HTTPS je povinné (GitHub Pages to zajišťuje automaticky)
- ✅ Pravidelně aktualizujte npm závislosti: `npm update`

---

**🎉 Gratulujeme! Váš web je připraven pro nasazení!**

Pro jakékoli dotazy kontaktujte: info@leskozovka.cz
