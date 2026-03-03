# 🌲 Les u Kladna v ohrožení – leskozovka.cz

> **Občanská iniciativa za ochranu lesa u Kladna před opakovanou černou skládkou**

[![Deploy Status](https://github.com/VAS-USERNAME/leskozovka-web/actions/workflows/deploy.yml/badge.svg)](https://github.com/VAS-USERNAME/leskozovka-web/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

**🌐 Web:** [www.leskozovka.cz](https://www.leskozovka.cz)  
**📧 Kontakt:** info@leskozovka.cz  
**📺 YouTube:** [@leskozovka](https://www.youtube.com/@leskozovka)

---

## 📖 O projektu

Tento web vznikl jako reakce na **opakovanou černou skládku a nelegální pobyt bezdomovce** na lesním pozemku u Kladna (parcela č. 3830/4 v k.ú. Kročehlavy). Vlastník pozemku je **Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze**.

### 🔥 Klíčové události:

- **2022:** První výskyt černé skládky
- **2022-2025:** Opakované úklidy bez systémového řešení
- **12. dubna 2025:** Požár v lese (odpadky zapáleny)
- **7. ledna 2026:** Další úklid s policií
- **1. března 2026:** Spuštění webu a petice

### 🎯 Cíl webu:

- Informovat veřejnost o situaci
- Získat podporu pro petici
- Vyvinout tlak na odpovědné instituce (Město Kladno, ČIŽP, Policie ČR)
- Dokumentovat průběh problému

---

## 🛠️ Technologie

- **Framework:** React 18 + TypeScript
- **Styling:** Tailwind CSS v4
- **Build tool:** Vite
- **Icons:** Lucide React
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

### 🔄 Automatické aktuality z Facebooku

Sekce „Aktuality z Facebooku" se načítá automaticky přes Facebook Page Plugin (timeline), bez potřeby Graph API tokenů.

Kompletní nastavení je popsáno v [FACEBOOK-AUTO-SYNC.md](./FACEBOOK-AUTO-SYNC.md).

---

## 🚀 Lokální vývoj

### Předpoklady

- Node.js 20+
- npm nebo yarn

### Instalace a spuštění

```bash
# Klonování repozitáře
git clone https://github.com/VAS-USERNAME/leskozovka-web.git
cd leskozovka-web

# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev

# Otevřete prohlížeč na http://localhost:5173
```

### Build pro produkci

```bash
npm run build

# Náhled produkční verze
npm run preview
```

---

## 📁 Struktura projektu

```
leskozovka-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions pro automatický deploy
├── public/
│   ├── CNAME                   # Konfigurace vlastní domény
│   ├── robots.txt              # SEO - crawling pravidla
│   ├── sitemap.xml             # SEO - mapa webu
│   └── site.webmanifest        # PWA manifest
├── src/
│   ├── app/
│   │   ├── components/         # React komponenty
│   │   ├── App.tsx             # Hlavní komponenta aplikace
│   │   └── main.tsx            # Entry point
│   └── styles/
│       ├── theme.css           # Design tokens
│       └── fonts.css           # Font imports
├── index.html                  # HTML template s meta tagy
├── vite.config.ts              # Vite konfigurace
├── package.json                # Závislosti projektu
├── DEPLOY.md                   # 📘 Návod na nasazení
└── README.md                   # Tento soubor
```

---

## 📊 SEO & Optimalizace

### ✅ Implementováno:

- **Meta tagy:** Open Graph, Twitter Cards, GEO tagy
- **Strukturovaná data:** JSON-LD (Organization, Place, Article, BreadcrumbList)
- **Sitemap.xml:** Kompletní mapa všech sekcí
- **robots.txt:** Pravidla pro crawlery
- **Canonical URL:** Prevence duplicitního obsahu
- **Mobile-first design:** Plně responzivní
- **PWA manifest:** Možnost instalace jako aplikace
- **Lazy loading:** Optimalizace načítání obrázků
- **Google Analytics ready:** Připraveno pro GA4
- **Google Search Console ready:** Meta tag pro ověření

---

## 🌐 Nasazení na GitHub Pages

Kompletní návod naleznete v souboru **[DEPLOY.md](./DEPLOY.md)**.

### Rychlý start:

1. **Fork nebo clone repozitáře**
2. **Push na GitHub**
3. **Aktivujte GitHub Pages** (Settings → Pages → GitHub Actions)
4. **Nastavte vlastní doménu** (Settings → Pages → Custom domain)
5. **DNS záznamy:**
   ```
   CNAME: www → VAS-USERNAME.github.io
   ```
6. **Automatický deploy** při každém push na `main`

---

## 📋 Kontrolní seznam před spuštěním

- [ ] DNS záznamy nastaveny
- [ ] GitHub Pages aktivován
- [ ] Custom domain ověřena
- [ ] HTTPS aktivováno
- [ ] Favicon nahrán
- [ ] OG image vytvořen (1200x630 px)
- [ ] Google Search Console ověřeno
- [ ] Sitemap odeslána v GSC
- [ ] Google Analytics ID přidáno (volitelné)
- [ ] Testováno na mobilu

---

## 🤝 Jak přispět

Tento projekt je otevřený pro příspěvky od komunity!

1. **Fork repozitáře**
2. **Vytvořte feature branch:** `git checkout -b feature/nova-funkce`
3. **Commit změn:** `git commit -m 'Přidána nová funkce'`
4. **Push do branch:** `git push origin feature/nova-funkce`
5. **Otevřete Pull Request**

---

## 📞 Kontakt

**Organizátor:**  
Ing. Dominik Žlebek, LL.M.

**Email:**  
info@leskozovka.cz

**YouTube:**  
[@leskozovka](https://www.youtube.com/@leskozovka)

**Lokace problému:**  
Parcela č. 3830/4 | k.ú. Kročehlavy [665126]  
GPS: 50.1262367N, 14.1089158E

---

## 📄 Licence

MIT License - viz [LICENSE](./LICENSE)

---

## 🙏 Poděkování

- Všem, kdo podpořili petici
- Médiím, která přinesla zprávy o problému
- Komunitě aktivních občanů Kladna

---

## 🔗 Užitečné odkazy

- **Katastr nemovitostí:** [Parcela 3830/4](https://nahlizenidokn.cuzk.gov.cz/ZobrazObjekt.aspx?typ=parcela&id=1145895203)
- **Fotodokumentace:** [Google Drive](https://drive.google.com/drive/folders/1mgzH9geW9sDTxL8pHUWV_cPxMy_sPE5i)
- **Petice:** [petice.com/NAZEV](https://www.petice.com/NAZEV)

---

**Společně můžeme změnit situaci! 🌲💚**

[![Podpořte petici](https://img.shields.io/badge/Podpo%C5%99te-Petici-%234a7c2c?style=for-the-badge)](https://www.petice.com/NAZEV)
