# 🔍 Průvodce nastavením Google Search Console

Tento návod vás provede krok za krokem procesem registrace webu **www.leskozovka.cz** do Google Search Console a jeho optimalizací pro vyhledávání Google.

---

## 📋 Co je Google Search Console?

Google Search Console (GSC) je **bezplatný nástroj od Googlu**, který vám umožňuje:

- ✅ Sledovat, jak Google vidí a indexuje váš web
- ✅ Zjistit, pro jaká klíčová slova se zobrazujete ve vyhledávání
- ✅ Identifikovat a opravit SEO problémy
- ✅ Odeslat sitemap pro rychlejší indexaci
- ✅ Monitorovat výkon webu ve vyhledávání
- ✅ Dostávat upozornění na kritické problémy

---

## 🚀 Krok 1: Registrace webu

### 1.1 Přihlaste se do Google Search Console

1. Otevřete [Google Search Console](https://search.google.com/search-console/)
2. Přihlaste se Google účtem (gmail)

### 1.2 Přidejte nový web

1. Klikněte na **"Add property"** (Přidat web)
2. Vyberte **"URL prefix"** (Prefix URL)
3. Zadejte: `https://www.leskozovka.cz`
4. Klikněte **"Continue"** (Pokračovat)

---

## ✅ Krok 2: Ověření vlastnictví webu

Google nabídne několik metod ověření. **Doporučujeme metodu HTML tag**, protože je nejjednodušší pro GitHub Pages.

### Metoda: HTML meta tag (DOPORUČENO)

1. V GSC vyberte **"HTML tag"**
2. Zkopírujte ověřovací kód, například:
   ```html
   <meta name="google-site-verification" content="ABC123XYZ...váš_kód...789" />
   ```

3. **Přidejte tento kód do webu:**

   - Otevřete soubor `/index.html`
   - Najděte řádek s komentářem:
     ```html
     <!-- Google Search Console Verification (Placeholder - nahraďte svým kódem) -->
     <!-- <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> -->
     ```
   - Nahraďte komentář svým ověřovacím kódem:
     ```html
     <!-- Google Search Console Verification -->
     <meta name="google-site-verification" content="ABC123XYZ...váš_kód...789" />
     ```

4. **Nahrajte změny na GitHub:**
   ```bash
   git add index.html
   git commit -m "Add Google Search Console verification"
   git push
   ```

5. Počkejte 2-5 minut na deploy (sledujte v GitHub Actions)

6. **Vraťte se do GSC a klikněte "Verify"**

✅ **Úspěch!** Web je nyní ověřený.

---

## 📄 Krok 3: Odeslání Sitemap

Sitemap pomáhá Googlu rychleji a efektivněji indexovat váš web.

### 3.1 Ověřte, že sitemap funguje

1. Otevřete v prohlížeči: `https://www.leskozovka.cz/sitemap.xml`
2. Měli byste vidět XML soubor se seznamem všech stránek

### 3.2 Odešlete sitemap do GSC

1. V Google Search Console jděte do **"Sitemaps"** (levé menu)
2. Do pole zadejte: `sitemap.xml`
3. Klikněte **"Submit"** (Odeslat)

✅ **Status by měl být "Success" (Úspěch)**

Google začne indexovat stránky. Může to trvat **1-7 dní**.

---

## 🔍 Krok 4: Vyžádání indexace

Pro rychlejší indexaci můžete manuálně požádat Google o indexaci hlavní stránky.

1. V GSC jděte do **"URL Inspection"** (Kontrola URL)
2. Zadejte: `https://www.leskozovka.cz`
3. Klikněte **"Test live URL"** (Otestovat živou URL)
4. Pokud test proběhne úspěšně, klikněte **"Request indexing"** (Vyžádat indexaci)

Opakujte pro klíčové sekce:
- `https://www.leskozovka.cz/#problem`
- `https://www.leskozovka.cz/#petition`
- `https://www.leskozovka.cz/#contact`

---

## 📊 Krok 5: Sledování výkonu

### Co sledovat (po 7-14 dnech):

#### 5.1 Performance Report (Zpráva o výkonu)
- **Impressions** (Zobrazení): Kolikrát se váš web zobrazil ve vyhledávání
- **Clicks** (Kliknutí): Kolikrát uživatelé klikli na váš web
- **CTR** (Click-Through Rate): Poměr kliknutí k zobrazením
- **Average Position** (Průměrná pozice): Na jaké pozici se zobrazujete

#### 5.2 Coverage Report (Pokrytí)
- Zkontrolujte, že **všechny stránky jsou indexované**
- Opravte případné **chyby** (404, redirect problémy)

#### 5.3 Search Queries (Vyhledávací dotazy)
Zjistěte, pro **jaká klíčová slova** se zobrazujete:
- černá skládka Kladno
- les Kožovka
- požár Kladno 2025
- petice životní prostředí Kladno

---

## 🎯 Optimalizace pro klíčová slova

### Cílová klíčová slova:

#### Primární:
- ✅ černá skládka Kladno
- ✅ nelegální skládka Kladno
- ✅ les Kožovka Kladno
- ✅ požár les Kladno 2025

#### Sekundární:
- ✅ životní prostředí Kladno
- ✅ petice Kladno
- ✅ Benediktinské arciopatství pozemek
- ✅ parcela 3830/4 Kročehlavy

#### Long-tail (dlouhé fráze):
- ✅ co se děje v lese u Kladna
- ✅ jak pomoct lesu u Kladna
- ✅ černá skládka Kožovka požár

### Jak sledovat pozice:

1. V GSC jděte do **Performance → Search results**
2. Klikněte na **"+ New"** → **"Query"**
3. Zadejte klíčové slovo (např. "černá skládka Kladno")
4. Sledujte **Average position** a **Clicks**

**Cíl:** Dostat se do top 10 (první strana Googlu) za 3-6 měsíců

---

## 🛠️ Řešení běžných problémů

### Problém: "URL is not on Google"
**Řešení:**
1. Vyžádejte indexaci přes "Request indexing"
2. Počkejte 3-7 dní
3. Zkontrolujte robots.txt, že neblokuje Googlebot

### Problém: "Submitted URL not found (404)"
**Řešení:**
1. Zkontrolujte, že URL skutečně existuje
2. Pro SPA (single-page app) použijte anchor linky (#)

### Problém: "Redirect error"
**Řešení:**
1. Zkontrolujte HTTPS redirect (mělo by fungovat automaticky)
2. Zkontrolujte DNS nastavení u registrátora

### Problém: Nízký CTR (Click-Through Rate)
**Řešení:**
1. Vylepšete **title tag** - udělejte ho zajímavější
2. Vylepšete **meta description** - přidejte call-to-action
3. Použijte emojis v title/description (✅ ⚠️ 🌲)

---

## 📈 Očekávané výsledky

### Týden 1-2:
- ✅ Web je ověřený v GSC
- ✅ Sitemap odeslán
- ✅ První stránky začínají být indexované

### Týden 3-4:
- ✅ Většina stránek je indexovaná
- ✅ První zobrazení ve vyhledávání (impressions)
- ✅ Zobrazení pro branded queries (leskozovka, les u kladna)

### Měsíc 2-3:
- ✅ Zobrazení pro obecnější queries (černá skládka Kladno)
- ✅ První organická návštěva z Googlu
- ✅ Pozice 20-50 pro hlavní klíčová slova

### Měsíc 4-6:
- ✅ Pozice 10-20 (druhá strana Googlu)
- ✅ Pravidelná organická návštěvnost
- ✅ CTR 2-5%

### Měsíc 6+:
- 🎯 **Cíl: Top 10** (první strana) pro hlavní klíčová slova
- 🎯 **CTR 5-10%**
- 🎯 **100+ organických návštěv měsíčně**

---

## 📊 Další nástroje pro monitoring

### Google Analytics (volitelné, ale doporučené)

1. Vytvořte účet na [Google Analytics](https://analytics.google.com/)
2. Vytvořte property pro `www.leskozovka.cz`
3. Zkopírujte Google tag (GA4 tracking kód)
4. Přidejte do `/index.html` (místo je připravené jako komentář)
5. Sledujte:
   - Počet návštěvníků
   - Zdroje návštěvnosti (Google, Facebook, přímá návštěva)
   - Čas strávený na webu
   - Konverze (podpisy petice, odeslané formuláře)

### Propojení GSC a GA4

1. V Google Analytics jděte do **Admin → Search Console links**
2. Propojte váš GSC property s GA4
3. Nyní uvidíte GSC data přímo v Analytics

---

## 🔔 Nastavení upozornění

1. V GSC jděte do **Settings** (Nastavení)
2. Aktivujte **Email notifications**
3. Zaškrtněte:
   - ✅ Critical site errors
   - ✅ Search Console message alerts
   - ✅ Manual action notifications

Google vás bude informovat o kritických problémech e-mailem.

---

## 📝 Týdenní rutina (doporučeno)

### Co dělat každý týden:

- [ ] Zkontrolujte **Performance report** - sledujte růst impressions/clicks
- [ ] Zkontrolujte **Coverage** - opravte případné chyby
- [ ] Sledujte **Search queries** - zjistěte, pro co se zobrazujete
- [ ] Vyžádejte indexaci **nových článků/aktualizací**

### Co dělat každý měsíc:

- [ ] Analyzujte **top performing pages** - co funguje?
- [ ] Identifikujte **low CTR pages** - vylepšete title/description
- [ ] Aktualizujte **sitemap.xml** s novými daty (`<lastmod>`)
- [ ] Porovnejte měsíční **growth** (růst impressions, clicks)

---

## 🎯 Tipy pro rychlejší růst

1. **Získávejte backlinky** (odkazy z jiných webů):
   - Kontaktujte Kladenský deník - žádejte o odkaz
   - Kontaktujte ekologické organizace
   - Sdílejte na Facebooku, LinkedIn

2. **Pravidelně aktualizujte obsah**:
   - Přidávejte nové události do "Historie"
   - Aktualizujte sekci "V médiích o nás"
   - Google upřednostňuje čerstvý obsah

3. **Lokální SEO**:
   - Zaregistrujte web do Google My Business
   - Přidejte web na Firmy.cz, Mapy.cz

4. **Sdílejte na sociálních sítích**:
   - Každé sdílení = potenciální backlink
   - Sociální signály pomáhají SEO

---

## 📞 Potřebujete pomoc?

- 📖 **Google dokumentace**: [support.google.com/webmasters](https://support.google.com/webmasters)
- 📧 **Kontakt**: info@leskozovka.cz

---

**✅ Gratulujeme! Váš web je připraven pro Google vyhledávání!**

Nezapomeňte: SEO je **dlouhodobý proces**. Výsledky se dostavují za 3-6 měsíců. Buďte trpěliví a pravidelně sledujte data v Google Search Console.

🌲 **Hodně štěstí s ochranou lesa u Kladna!**
