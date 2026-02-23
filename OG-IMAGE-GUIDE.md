# 🖼️ Průvodce vytvořením OG obrázku

Tento návod vás provede vytvořením **Open Graph obrázku** (og-image.jpg), který se zobrazuje při sdílení webu na Facebooku, LinkedIn, WhatsApp a dalších platformách.

---

## 📐 Specifikace

### Požadované rozměry:
- **Rozlišení**: 1200 × 630 px (poměr stran 1.91:1)
- **Formát**: JPG nebo PNG
- **Velikost**: Max 5 MB (ideálně pod 1 MB)
- **Název souboru**: `og-image.jpg`
- **Umístění**: `/public/og-image.jpg`

### Důležité:
- ✅ Text musí být čitelný i v malém náhledu (300×157 px)
- ✅ Důležité elementy umístěte **uprostřed** (okraje mohou být oříznuté)
- ✅ Použijte **vysoký kontrast** (tmavý text na světlém pozadí)
- ✅ Vyvarujte se příliš malého textu

---

## 🎨 Návrh č. 1: S fotografií skládky

### Obsah:
- **Fotografie**: Autentická fotka černé skládky z Google Drive
- **Text overlay**: 
  ```
  LES U KLADNA V OHROŽENÍ
  Černá skládka se opakovaně vrací
  Podpořte petici za systémové řešení
  ```
- **Logo/Icon**: 🌲 Zelený strom
- **URL**: www.leskozovka.cz

### Rozložení:
```
┌─────────────────────────────────────┐
│  🌲 LES U KLADNA V OHROŽENÍ         │  ← Bílý bold text
│                                     │
│  [FOTOGRAFIE ČERNÉ SKLÁDKY]         │  ← Pozadí s 50% tmavým overlay
│                                     │
│  Černá skládka se opakovaně vrací   │  ← Menší text
│  Podpořte petici za řešení          │
│                                     │
│  www.leskozovka.cz                  │  ← URL vpravo dole
└─────────────────────────────────────┘
```

### Barvy:
- **Pozadí foto**: Tmavý overlay (rgba(0,0,0,0.5))
- **Hlavní nadpis**: Bílá (#FFFFFF) nebo světle zelená (#a8d08d)
- **Podnadpis**: Bílá s 90% opacity
- **URL**: Bílá nebo zelená (#4a7c2c)

---

## 🎨 Návrh č. 2: Minimalistický zelený design

### Obsah:
- **Pozadí**: Zelený gradient (#2d5016 → #4a7c2c)
- **Text**: 
  ```
  🌲 LES U KLADNA
  V OHROŽENÍ
  
  Opakovaná černá skládka
  Požár v dubnu 2025
  
  PODEPIŠTE PETICI
  www.leskozovka.cz
  ```

### Rozložení:
```
┌─────────────────────────────────────┐
│                                     │
│        🌲 LES U KLADNA              │  ← Velký bold
│           V OHROŽENÍ                │
│                                     │
│     Opakovaná černá skládka         │  ← Střední velikost
│     Požár v dubnu 2025              │
│     Nečinnost úřadů                 │
│                                     │
│     ⚠️ PODEPIŠTE PETICI             │  ← Call-to-action
│                                     │
│     www.leskozovka.cz               │  ← URL
└─────────────────────────────────────┘
```

### Barvy:
- **Pozadí**: Gradient #2d5016 (nahoře) → #4a7c2c (dole)
- **Text**: Bílá (#FFFFFF)
- **Akcent**: Oranžová (#e67e22) pro "PODEPIŠTE PETICI"

---

## 🛠️ Nástroje pro tvorbu

### 1. Canva (DOPORUČENO) - Nejjednodušší

**Postup:**

1. Jděte na [Canva.com](https://www.canva.com/)
2. Zaregistrujte se (zdarma)
3. Klikněte **"Create a design"** → **"Custom size"**
4. Zadejte: **1200 × 630 px**
5. Vyberte šablonu "Social Media Post" nebo začněte od začátku
6. **Přidejte fotografii:**
   - Upload autentické foto z Google Drive
   - Aplikujte tmavý overlay (Elements → Shapes → Rectangle → Barva černá, Průhlednost 50%)
7. **Přidejte text:**
   - Text → Heading
   - Napište: "LES U KLADNA V OHROŽENÍ"
   - Font: Montserrat Bold nebo Poppins Bold
   - Velikost: 80-100 pt
   - Barva: Bílá
8. **Přidejte URL:**
   - Text → Subheading
   - Napište: "www.leskozovka.cz"
   - Velikost: 40 pt
   - Umístění: Vpravo dole
9. **Stáhněte:**
   - Download → JPG → High quality
   - Uložte jako `og-image.jpg`

**Šablony v Canvě:**
- "Facebook Cover" (upravte na 1200×630)
- "LinkedIn Post"
- "Social Media" kategorie

---

### 2. Figma - Pro pokročilé

1. Vytvořte nový Frame: 1200 × 630 px
2. Přidejte fotografii jako pozadí
3. Přidejte Rectangle overlay (černá, 50% opacity)
4. Přidejte texty
5. Export → JPG (Quality: 90%)

---

### 3. Photoshop / GIMP - Pro profesionály

1. Nový dokument: 1200 × 630 px, 72 DPI
2. Importujte fotografii
3. Přidejte Adjustment Layer → Brightness/Contrast
4. Vytvořte text layers
5. Save for Web → JPG (Quality: 80-90%)

---

## 📸 Fotografie pro použití

### Použijte autentické fotografie z Google Drive:

Stáhněte si tyto fotografie z vašeho Google Drive folderu:
- Černá skládka (nejdramatičtější záber)
- Požár (pokud máte)
- Úklid v akci (městská policie + kontejner)

### Nebo použijte stock fotografie (fallback):

Pokud nechcete použít autentické foto, použijte:
- [Unsplash.com](https://unsplash.com/s/photos/forest-pollution)
- [Pexels.com](https://www.pexels.com/search/pollution/)

**Hledejte:**
- "forest pollution"
- "illegal dump forest"
- "trash in forest"

---

## ✅ Checklist před nahráním

- [ ] Rozměry jsou přesně **1200 × 630 px**
- [ ] Text je **čitelný i v malém náhledu**
- [ ] Důležité elementy jsou **uprostřed** (ne u okrajů)
- [ ] Velikost souboru je **pod 1 MB**
- [ ] Formát je **JPG** (ne PNG, kvůli velikosti)
- [ ] Soubor je pojmenovaný **og-image.jpg**
- [ ] Soubor je umístěný v **/public/og-image.jpg**

---

## 🧪 Testování

### Po nahrání na web otestujte:

1. **Facebook Sharing Debugger:**
   - [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug/)
   - Zadejte: `https://www.leskozovka.cz`
   - Klikněte **"Fetch new information"**
   - Ověřte, že se obrázek zobrazuje správně

2. **Twitter Card Validator:**
   - [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
   - Zadejte URL
   - Ověřte náhled

3. **LinkedIn Post Inspector:**
   - [linkedin.com/post-inspector](https://www.linkedin.com/post-inspector/)
   - Zadejte URL
   - Ověřte náhled

---

## 🎯 Příklady dobrých OG obrázků

### Inspirace:
- **The Guardian**: Silná fotka + velký nadpis
- **New York Times**: Fotka + overlay + text
- **Medium**: Minimalistický design, čistý text
- **National Geographic**: Dramatická fotka + malý text

### Co funguje:
- ✅ **Vysoký kontrast** (tmavý text na světlém nebo naopak)
- ✅ **Jednoduchá zpráva** (max 2-3 věty)
- ✅ **Vizuální hierarchie** (velký nadpis, menší podnadpis)
- ✅ **Emotivní fotka** (vyvolává reakci)

### Co se vyhýbejte:
- ❌ Příliš mnoho textu (nebudete moct přečíst)
- ❌ Malý text (nezobrazí se v náhledu)
- ❌ Nízký kontrast (text se ztratí na pozadí)
- ❌ Důležité elementy u okrajů (budou oříznuté)

---

## 📊 Technické detaily

### Jak Facebook/Twitter zobrazuje OG obrázky:

- **Facebook**: Náhled 500×261 px (ořízne okraje)
- **Twitter**: Náhled 506×253 px (ořízne okraje)
- **LinkedIn**: Náhled 552×289 px (ořízne okraje)
- **WhatsApp**: Náhled 300×157 px (malé!)

**Proto:**
- Umístěte důležité elementy **uprostřed**
- Ponechte **bezpečnou zónu** 50-100 px od okrajů
- Text musí být čitelný i při 300×157 px

---

## 🔄 Aktualizace OG obrázku

### Kdy aktualizovat:

- Po velkých událostech (nový požár, mediální pokrytí)
- Při dosažení milníku (1000 podpisů petice)
- Sezónně (jaro, léto, podzim, zima)

### Jak vynutit refresh:

1. Nahrajte nový `og-image.jpg` do `/public/`
2. Git commit + push
3. Jděte na Facebook Sharing Debugger
4. Zadejte URL + klikněte **"Scrape Again"**
5. Cache se vymaže a načte nový obrázek

---

## 📞 Potřebujete pomoc?

- 🎨 **Canva Tutorials**: [canva.com/learn](https://www.canva.com/learn/)
- 📖 **OG Image Best Practices**: [ogimage.gallery](https://www.ogimage.gallery/)
- 📧 **Kontakt**: info@leskozovka.cz

---

## 📝 Template pro Canvu (copy-paste)

```
NADPIS 1 (80pt, Bold, Bílá):
LES U KLADNA V OHROŽENÍ

NADPIS 2 (50pt, Regular, Bílá 90%):
Černá skládka se opakovaně vrací

PODNADPIS (40pt, Regular, Bílá 80%):
Požár v dubnu 2025 | Nečinnost úřadů

CALL-TO-ACTION (45pt, Bold, Oranžová #e67e22):
PODEPIŠTE PETICI

URL (35pt, Regular, Bílá):
www.leskozovka.cz
```

---

**🎉 Hotovo! Nyní máte profesionální OG obrázek pro sdílení na sociálních sítích.**

🌲 **Hodně štěstí s propagací webu!**
