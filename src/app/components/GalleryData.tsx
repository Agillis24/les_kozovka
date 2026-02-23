// Definice všech fotografií pro galerii - skutečná dokumentace černé skládky
export const galleryImages = [
  // 1. ROZSAH PROBLÉMU - Celkové pohledy na kontaminaci
  { 
    src: 'https://h.docs.replit.com/images/02jgw6t8tbj4xt0k8c4f7jm3p61711e32d-09.png', 
    caption: 'Černá skládka v lese – plastové tašky a odpadky rozházené po celé ploše' 
  },
  { 
    src: 'https://h.docs.replit.com/images/02jgw6thk9fvx1njjxcaqjvj581711e32d-09.png', 
    caption: 'Masivní černá skládka podél lesní cesty – koberce, plachty a kontejnery s odpadky' 
  },
  { 
    src: 'https://h.docs.replit.com/images/02jgw6v2j1kcm7dz7qz5afn9rr1711e32d-09.png', 
    caption: 'Hromady oblečení, igelitových tašek a odpadků v lese – v pozadí viditelné budovy' 
  },
  
  // 2. DETAILY KONTAMINACE - Konkrétní oblasti
  { 
    src: 'https://h.docs.replit.com/images/02jgw6t9we1axqxqy3h0mqytgh1711e32d-09.png', 
    caption: 'Detail odpadků – plastové tašky a kontejnery rozházené v přírodě' 
  },
  { 
    src: 'https://h.docs.replit.com/images/02jgw6tbcnj9j15vzra87qwvr41711e32d-09.png', 
    caption: 'Lesní cesta s odpadky rozházenými po stranách – kontaminovaná půda' 
  },
  { 
    src: 'https://h.docs.replit.com/images/02jgw6tdkfm5ynqc9p3cg33djh1711e32d-09.png', 
    caption: 'Spadlý kmen s hromadou igelitových tašek a odpadků v lese' 
  },
  { 
    src: 'https://h.docs.replit.com/images/02jgw6v50jzf18fqvbj0cvvtd51711e32d-09.png', 
    caption: 'Nákupní vozík plný odpadků s kartonovými krabicemi na lesní cestě' 
  },
  
  // 3. DŮKAZY NELEGÁLNÍHO POBYTU - Improvizované tábory
  { 
    src: 'https://h.docs.replit.com/images/02jgw6v7hvbrwmv10nnk2mpygj1711e32d-09.png', 
    caption: 'Improvizovaný tábor s modrou plachtou uprostřed lesa – přímý důkaz nelegálního pobytu' 
  },
  { 
    src: 'https://h.docs.replit.com/images/02jgw6y2awpa7r0xm9dxj9wmwr1711e32d-09.png', 
    caption: 'Improvizovaný tábor se šedivými plachtami a oblečením na stromech – dlouhodobý nelegální pobyt' 
  },
  
  // 4. ZÁSAH ÚŘADŮ A ÚKLID - Oficiální dokumentace
  { 
    src: 'https://h.docs.replit.com/images/02jgw6tfm6ppxr4h4xvazjk02y1711e32d-09.png', 
    caption: 'Zásah městské policie Kladno a nákladního vozu Mercedes – oficiální dokumentace zásahu' 
  },
  { 
    src: 'https://h.docs.replit.com/images/02jgw6thttdzqxgbaxv8fza7sk1711e32d-09.png', 
    caption: 'Městská policie Kladno na místě – přímá konfrontace s problémem nelegálního pobytu' 
  },
  { 
    src: 'https://h.docs.replit.com/images/02jgw6tjt2phgzdrw59x1rax8m1711e32d-09.png', 
    caption: 'Bikramová vana plná odpadků při úklidu – firma odvážející odpady, odpadky rozházené po zemi' 
  },
  { 
    src: 'https://h.docs.replit.com/images/02jgw6tmk8j6b3njmmr1h1mtq01711e32d-09.png', 
    caption: 'Komunitní úklid s nákupními vozíky – sběr masivního množství plastových odpadků' 
  }
];

// Fullsize verze pro lightbox - používáme stejné URL (už jsou ve vysokém rozlišení)
export const galleryImagesFullsize = galleryImages.map(img => ({
  ...img,
  src: img.src
}));
