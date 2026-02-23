# 🌐 Nastavení DNS pro české registrátory

Tento návod vám pomůže nastavit DNS záznamy pro doménu **leskozovka.cz** u nejpoužívanějších českých registrátorů.

---

## 📋 Co budete potřebovat

- ✅ Přístup k administraci domény u registrátora
- ✅ GitHub Pages projekt již nasazený
- ✅ 10-15 minut času
- ✅ GitHub username (např. `dominikzlebek`)

---

## 🏢 Wedos.cz

### Krok 1: Přihlášení
1. Jděte na [admin.wedos.com](https://admin.wedos.com/)
2. Přihlaste se

### Krok 2: Přejděte do DNS správy
1. V menu klikněte **Domény**
2. Najděte `leskozovka.cz`
3. Klikněte **DNS záznamy**

### Krok 3: Přidejte CNAME záznam
1. Klikněte **Přidat záznam**
2. Vyplňte:
   - **Typ**: CNAME
   - **Název**: `www`
   - **Hodnota**: `VASE-GITHUB-JMENO.github.io.` (tečka na konci!)
   - **TTL**: 3600 (nebo ponechte výchozí)
3. Klikněte **Přidat**

### Krok 4: Přidejte A záznamy (apex doména)
1. Klikněte **Přidat záznam** 4×
2. Pro každý záznam:
   - **Typ**: A
   - **Název**: `@` (nebo prázdné)
   - **Hodnota**: (viz níže)
   - **TTL**: 3600

**4 A záznamy:**
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### Krok 5: Uložte změny
- Klikněte **Uložit DNS záznamy**

**⏱️ Čekání:** 1-6 hodin (Wedos obvykle 1-2 hodiny)

---

## 🏢 Forpsi.cz

### Krok 1: Přihlášení
1. Jděte na [admin.forpsi.cz](https://admin.forpsi.cz/)
2. Přihlaste se

### Krok 2: Přejděte do DNS správy
1. V menu **Domény** → **Moje domény**
2. Najděte `leskozovka.cz`
3. Klikněte **Detail domény**
4. Záložka **DNS**

### Krok 3: Přidejte CNAME záznam
1. V sekci **DNS záznamy** klikněte **Přidat záznam**
2. Vyplňte:
   - **Typ**: CNAME
   - **Subdoména**: `www`
   - **Cílová doména**: `VASE-GITHUB-JMENO.github.io.` (tečka na konci!)
   - **TTL**: 3600
3. Klikněte **Přidat**

### Krok 4: Přidejte A záznamy
1. Klikněte **Přidat záznam** 4×
2. Pro každý:
   - **Typ**: A
   - **Subdoména**: (ponechte prázdné)
   - **IP adresa**: (viz seznam níže)
   - **TTL**: 3600

**4 IP adresy:**
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

### Krok 5: Uložte
- Klikněte **Uložit změny**

**⏱️ Čekání:** 2-6 hodin (Forpsi obvykle 2-4 hodiny)

---

## 🏢 Active24.cz

### Krok 1: Přihlášení
1. Jděte na [www.active24.cz](https://www.active24.cz/)
2. Přihlaste se do **Klientské zóny**

### Krok 2: Správa domény
1. **Správa služeb** → **Domény**
2. Najděte `leskozovka.cz`
3. Klikněte **Správa DNS**

### Krok 3: CNAME záznam
1. Klikněte **Přidat záznam**
2. Vyplňte:
   - **Typ**: CNAME
   - **Hostname**: `www`
   - **Alias**: `VASE-GITHUB-JMENO.github.io.`
   - **TTL**: 3600
3. **Uložit**

### Krok 4: A záznamy
Přidejte 4× záznam typu A:
- **Hostname**: @ (nebo prázdné)
- **IP adresa**: 
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

**⏱️ Čekání:** 1-4 hodiny

---

## 🏢 Český registr (Subreg)

### Krok 1: Přihlášení
1. [subreg.cz](https://www.subreg.cz/)
2. Přihlaste se

### Krok 2: DNS správa
1. **Domény** → Najděte `leskozovka.cz`
2. **Správa DNS**

### Krok 3: Přidejte záznamy
**CNAME:**
```
www  CNAME  VASE-GITHUB-JMENO.github.io.  3600
```

**A záznamy:**
```
@  A  185.199.108.153  3600
@  A  185.199.109.153  3600
@  A  185.199.110.153  3600
@  A  185.199.111.153  3600
```

**⏱️ Čekání:** 1-6 hodin

---

## 🏢 Ignum.cz

### Krok 1: Přihlášení
1. [my.ignum.cz](https://my.ignum.cz/)
2. Přihlaste se

### Krok 2: DNS záznamy
1. **Domény** → `leskozovka.cz`
2. **DNS záznamy**

### Krok 3: Nastavení
**CNAME:**
- Název: `www`
- Typ: CNAME
- Hodnota: `VASE-GITHUB-JMENO.github.io.`

**A záznamy** (4×):
- Název: `@`
- Typ: A
- Hodnota: `185.199.108.153` (a další 3 IP)

**⏱️ Čekání:** 1-4 hodiny

---

## 🏢 Gransy.com

### Krok 1: Přihlášení
1. [admin.gransy.com](https://admin.gransy.com/)
2. Přihlaste se

### Krok 2: DNS správa
1. Záložka **DNS**
2. Doména `leskozovka.cz`

### Krok 3: Přidat záznamy
**CNAME pro www:**
```
www  IN  CNAME  VASE-GITHUB-JMENO.github.io.
```

**A záznamy:**
```
@  IN  A  185.199.108.153
@  IN  A  185.199.109.153
@  IN  A  185.199.110.153
@  IN  A  185.199.111.153
```

**⏱️ Čekání:** 1-4 hodiny

---

## ✅ Univerzální postup (pro jakýkoli registrátor)

Pokud váš registrátor není výše, použijte tento obecný postup:

### 1. Najděte DNS správu
V administraci domény hledejte:
- "DNS záznamy"
- "DNS management"
- "Name servers"
- "Správa DNS"

### 2. Přidejte CNAME záznam

| Pole | Hodnota |
|------|---------|
| **Typ/Type** | CNAME |
| **Název/Name/Subdoména** | www |
| **Hodnota/Value/Target** | `VASE-GITHUB-JMENO.github.io.` |
| **TTL** | 3600 (nebo výchozí) |

**⚠️ Důležité:**
- Tečka na konci `.github.io.` je DŮLEŽITÁ! (u některých registrátorů)
- Pokud nefunguje s tečkou, zkuste bez ní

### 3. Přidejte A záznamy (4×)

| Typ | Název | Hodnota | TTL |
|-----|-------|---------|-----|
| A | @ nebo prázdné | 185.199.108.153 | 3600 |
| A | @ nebo prázdné | 185.199.109.153 | 3600 |
| A | @ nebo prázdné | 185.199.110.153 | 3600 |
| A | @ nebo prázdné | 185.199.111.153 | 3600 |

**⚠️ Poznámka:**
- `@` znamená apex doména (leskozovka.cz bez www)
- Některé registrátory místo `@` chtějí pole prázdné

---

## 🧪 Ověření DNS nastavení

### Ihned po nastavení:

**1. Ověřte u registrátora:**
- Zkontrolujte, že záznamy jsou viditelné v administraci

**2. Testujte DNS:**

**Windows (Command Prompt):**
```cmd
nslookup www.leskozovka.cz
```

**Mac/Linux (Terminal):**
```bash
dig www.leskozovka.cz
```

**Online nástroj:**
- [dnschecker.org](https://dnschecker.org/)
- Zadejte: `www.leskozovka.cz`
- Klikněte **Search**
- Zelené fajfky = DNS propagováno ✅

---

## ⏱️ Časová osa propagace DNS

### Okamžitě (0-5 min):
- ❌ DNS ještě nepropagováno
- Vidíte pouze staré záznamy

### 15-30 minut:
- ⚠️ DNS začíná propagovat
- Některé servery vidí nové záznamy, jiné staré

### 1-2 hodiny:
- ✅ Většina serverů má nové záznamy
- Web už pravděpodobně funguje

### 6-24 hodin:
- ✅ Všechny servery mají nové záznamy
- DNS plně propagováno

### Maximum 48 hodin:
- ✅ Garantovaná plná propagace
- Pokud nefunguje ani po 48h, je problém v konfiguraci

---

## 🚨 Řešení problémů

### Problém: "DNS_PROBE_FINISHED_NXDOMAIN"
**Příčina:** DNS ještě není propagováno nebo špatně nastaveno

**Řešení:**
1. Počkejte 2-4 hodiny
2. Ověřte DNS na [dnschecker.org](https://dnschecker.org/)
3. Zkontrolujte, že CNAME má správnou hodnotu (včetně tečky na konci)

### Problém: "www.leskozovka.cz funguje, ale leskozovka.cz ne"
**Příčina:** Chybí A záznamy nebo apex redirect

**Řešení:**
1. Zkontrolujte, že máte všechny 4 A záznamy
2. Ověřte, že A záznamy mají `@` nebo prázdné jméno

### Problém: "Ukazuje to na starou stránku"
**Příčina:** DNS cache

**Řešení:**
1. Vymažte cache prohlížeče (Ctrl+Shift+Delete)
2. Vymažte DNS cache:
   - **Windows**: `ipconfig /flushdns`
   - **Mac**: `sudo dscacheutil -flushcache`
   - **Linux**: `sudo systemd-resolve --flush-caches`
3. Zkuste jiný prohlížeč nebo incognito mode

### Problém: "HTTPS nefunguje"
**Příčina:** GitHub Pages ještě nevygeneroval certifikát

**Řešení:**
1. Ujistěte se, že DNS je správně nastaveno (zelené fajfky na dnschecker.org)
2. V GitHub Pages: Settings → Pages → ověřte, že vidíte "DNS check successful"
3. Zaškrtněte "Enforce HTTPS"
4. Počkejte 5-30 minut na generování certifikátu
5. Pokud nefunguje, odeberte doménu a přidejte znovu

---

## 📋 Checklist pro každý registrátor

- [ ] Přihlášen do administrace registrátora
- [ ] Nalezena sekce "DNS záznamy"
- [ ] Přidán CNAME záznam: `www → VASE-GITHUB-JMENO.github.io.`
- [ ] Přidány 4 A záznamy: `@ → 185.199.108-111.153`
- [ ] Uloženy změny
- [ ] Otestováno na dnschecker.org
- [ ] Počkáno 1-6 hodin na propagaci
- [ ] Ověřeno v prohlížeči: `https://www.leskozovka.cz`

---

## 🔗 Užitečné odkazy

- 🧪 **DNS Checker**: [dnschecker.org](https://dnschecker.org/)
- 🧪 **DNS Propagation**: [whatsmydns.net](https://www.whatsmydns.net/)
- 📖 **GitHub Pages DNS**: [docs.github.com/pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

---

## 📞 Podpora registrátorů

Pokud máte problém s nastavením DNS, kontaktujte podporu vašeho registrátora:

- **Wedos**: [podpora@wedos.cz](mailto:podpora@wedos.cz) | Tel: 516 239 239
- **Forpsi**: [info@forpsi.com](mailto:info@forpsi.com) | Tel: 515 555 555
- **Active24**: [podpora@active24.cz](mailto:podpora@active24.cz) | Tel: 234 262 000
- **Subreg**: [info@subreg.cz](mailto:info@subreg.cz)
- **Ignum**: [podpora@ignum.cz](mailto:podpora@ignum.cz)
- **Gransy**: [support@gransy.com](mailto:support@gransy.com) | Tel: 221 511 245

---

## ✅ Hotovo!

Po úspěšném nastavení DNS:
1. ✅ `www.leskozovka.cz` funguje
2. ✅ HTTPS certifikát aktivní 🔒
3. ✅ Apex doména `leskozovka.cz` přesměrovává na `www`
4. ✅ Můžete pokračovat na [GOOGLE-SEARCH-CONSOLE.md](GOOGLE-SEARCH-CONSOLE.md)

**🎉 Gratulujeme! Váš web je na vlastní doméně!**

🌲 **Hodně štěstí s ochranou lesa u Kladna!**
