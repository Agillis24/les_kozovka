# ⚡ Quick Start - Rychlé nasazení za 30 minut

Tento návod vás provede **nejrychlejší cestou** k nasazení webu **www.leskozovka.cz** na GitHub Pages.

---

## 🎯 Co potřebujete

- ✅ GitHub účet ([github.com](https://github.com))
- ✅ Git nainstalovaný na počítači ([git-scm.com](https://git-scm.com))
- ✅ Node.js 18+ ([nodejs.org](https://nodejs.org))
- ✅ Doménu **leskozovka.cz** (nebo jiný registrátor)
- ✅ 30 minut času ⏱️

---

## 🚀 Krok za krokem (30 minut)

### ⏱️ 1-5 minut: Vytvořit grafické soubory

**Minimální verze** (stačí na funkční spuštění):

1. **OG obrázek** (1200×630 px):
   - Jděte na [Canva.com](https://www.canva.com/)
   - Vytvořte design 1200×630 px
   - Napište: "LES U KLADNA V OHROŽENÍ"
   - Stáhněte jako `og-image.jpg`
   - Umístěte do `/public/og-image.jpg`

2. **Favicon** (volitelné, můžete přeskočit):
   - Použijte již vytvořený `/public/favicon.svg`
   - Nebo vygenerujte na [favicon.io](https://favicon.io/)

**Výsledek:** `/public/og-image.jpg` existuje ✅

---

### ⏱️ 5-10 minut: GitHub repozitář

1. **Vytvořte repozitář na GitHubu:**
   - Jděte na [github.com/new](https://github.com/new)
   - Název: `leskozovka`
   - Viditelnost: **Public**
   - **NEVYTVÁŘEJTE** README/gitignore (už máte)
   - Klikněte **Create repository**

2. **Nahrajte kód:**
   ```bash
   # V terminálu ve složce projektu:
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/VASE-JMENO/leskozovka.git
   git push -u origin main
   ```
   
   **⚠️ Nahraďte `VASE-JMENO` vaším GitHub uživatelským jménem!**

3. **Aktivujte GitHub Pages:**
   - V repozitáři: **Settings** → **Pages**
   - Source: **GitHub Actions**
   - Počkejte 2-5 minut na automatický deploy
   - Sledujte v záložce **Actions**

**Výsledek:** Web je živý na `https://VASE-JMENO.github.io/leskozovka/` ✅

---

### ⏱️ 10-20 minut: Vlastní doména

1. **Přihlaste se k registrátorovi domény** (Forpsi, Wedos, atd.)

2. **Přidejte DNS záznamy:**

   **Pro www subdoménu:**
   ```
   Typ: CNAME
   Název: www
   Hodnota: VASE-JMENO.github.io
   TTL: 3600
   ```

   **Pro apex doménu (volitelné):**
   ```
   Typ: A | Název: @ | Hodnota: 185.199.108.153
   Typ: A | Název: @ | Hodnota: 185.199.109.153
   Typ: A | Název: @ | Hodnota: 185.199.110.153
   Typ: A | Název: @ | Hodnota: 185.199.111.153
   ```

3. **V GitHub Pages:**
   - Settings → Pages → Custom domain
   - Zadejte: `www.leskozovka.cz`
   - Klikněte **Save**

4. **Počkejte 1-6 hodin** na propagaci DNS

5. **Aktivujte HTTPS:**
   - Po úspěšném DNS check zaškrtněte **Enforce HTTPS**

**Výsledek:** Web je na `https://www.leskozovka.cz` s HTTPS 🔒 ✅

---

### ⏱️ 20-30 minut: Google Search Console

1. **Zaregistrujte web:**
   - [search.google.com/search-console](https://search.google.com/search-console/)
   - Add property → `https://www.leskozovka.cz`

2. **Ověřte vlastnictví:**
   - Vyberte **HTML tag** metodu
   - Zkopírujte kód (např. `<meta name="google-site-verification" content="ABC123">`)
   - Otevřete `/index.html`
   - Najděte řádek: `<!-- <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" /> -->`
   - Nahraďte komentář svým kódem
   - Uložte a nahrajte na GitHub:
     ```bash
     git add index.html
     git commit -m "Add Google verification"
     git push
     ```
   - Po 2-5 minutách klikněte v GSC **Verify**

3. **Odešlete sitemap:**
   - V GSC: **Sitemaps** → Submit
   - URL: `sitemap.xml`

**Výsledek:** Web je registrovaný v Googlu ✅

---

## ✅ Hotovo za 30 minut!

Nyní máte:
- ✅ Funkční web na vlastní doméně
- ✅ HTTPS certifikát
- ✅ Web registrovaný v Google Search Console
- ✅ SEO optimalizace
- ✅ Automatické deploye přes GitHub Actions

---

## 🔧 Co udělat později (volitelné)

### Prvních 24 hodin:
- [ ] Vytvořit lepší OG obrázek s autentickou fotkou (viz [OG-IMAGE-GUIDE.md](OG-IMAGE-GUIDE.md))
- [ ] Vygenerovat kompletní favicon sadu (16×16, 32×32, 180×180, atd.)
- [ ] Aktualizovat URL petice (nahradit `https://www.petice.com/NAZEV`)
- [ ] Otestovat web na mobilu, tabletu, desktopu

### První týden:
- [ ] Nastavit Google Analytics ([GOOGLE-SEARCH-CONSOLE.md](GOOGLE-SEARCH-CONSOLE.md))
- [ ] Otestovat sdílení na Facebooku ([Facebook Debugger](https://developers.facebook.com/tools/debug/))
- [ ] Napsat tiskovou zprávu a rozeslat médiím
- [ ] Sdílet web na sociálních sítích

### První měsíc:
- [ ] Získat první backlinky (odkazy z jiných webů)
- [ ] Sledovat výkon v Google Search Console
- [ ] Pravidelně aktualizovat obsah (sekce "Historie", "V médiích")
- [ ] Odpovídat na zpětnou vazbu z formuláře

---

## 📚 Detailní návody

Pokud chcete **detailnější informace**, použijte tyto návody:

- 📖 **[DEPLOYMENT.md](DEPLOYMENT.md)** - Kompletní návod na nasazení (krok za krokem)
- 📖 **[SEO-CHECKLIST.md](SEO-CHECKLIST.md)** - SEO optimalizace a checklist
- 📖 **[GOOGLE-SEARCH-CONSOLE.md](GOOGLE-SEARCH-CONSOLE.md)** - Nastavení Google Search Console
- 📖 **[OG-IMAGE-GUIDE.md](OG-IMAGE-GUIDE.md)** - Vytvoření OG obrázku pro Facebook/Twitter
- 📖 **[LAUNCH-CHECKLIST.md](LAUNCH-CHECKLIST.md)** - Kompletní checklist před spuštěním

---

## 🆘 Nejčastější problémy

### Problém: "Web se nezobrazuje po push na GitHub"
**Řešení:**
1. Zkontrolujte **Actions** záložku - build musí být ✅ úspěšný
2. Počkejte 2-5 minut
3. Vymažte cache prohlížeče (Ctrl+Shift+R)

### Problém: "Vlastní doména nefunguje"
**Řešení:**
1. Ověřte DNS záznamy u registrátora
2. Použijte [dnschecker.org](https://dnschecker.org/) - zadejte `www.leskozovka.cz`
3. Počkejte až 48 hodin (obvykle 1-6 hodin)

### Problém: "HTTPS nejde aktivovat"
**Řešení:**
1. Ujistěte se, že DNS je správně nastaveno (viz dnschecker.org)
2. Počkejte 24 hodin po nastavení DNS
3. Zkuste odebrat a znovu přidat doménu v GitHub Pages

### Problém: "Google Search Console ověření selhalo"
**Řešení:**
1. Zkontrolujte, že meta tag je v `/index.html` mezi `<head>` a `</head>`
2. Zkontrolujte, že jste udělali `git push` (změny jsou online)
3. Počkejte 5 minut na GitHub Actions deploy
4. Zkuste ověření znovu

---

## 📞 Potřebujete pomoc?

- 📧 **Email**: info@leskozovka.cz
- 📖 **GitHub Docs**: [docs.github.com/pages](https://docs.github.com/en/pages)
- 🎥 **Video tutoriály**: [YouTube: GitHub Pages](https://www.youtube.com/results?search_query=github+pages+custom+domain)

---

## 🎉 Gratuluji!

Váš web je **živý a připravený** pomoct ochránit les u Kladna! 🌲

Nyní můžete:
- ✅ Sdílet web na sociálních sítích
- ✅ Rozeslat emailem přátelům a rodině
- ✅ Kontaktovat média s odkazem
- ✅ Začít sbírat podpisy pro petici

**Hodně štěstí s projektem!** 🚀

---

*Vytvořeno s ❤️ pro ochranu přírody*
