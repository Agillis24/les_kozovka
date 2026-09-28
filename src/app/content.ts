/**
 * Obsah webu oddělený od vzhledu.
 *
 * Nový dokument, článek nebo událost stačí přidat do příslušného pole níže,
 * vzhled se vykreslí sám. Dokumenty se v každém poli řadí chronologicky,
 * nejnovější patří na konec.
 */
import type { LucideIcon } from 'lucide-react';
import {
  AlertTriangle,
  Bird,
  Building2,
  Church,
  Eye,
  FileText,
  Flame,
  Leaf,
  PenLine,
  Recycle,
  Shield,
  Users,
} from 'lucide-react';

export const PETITION_URL =
  'https://gov.cz/e-petice/1569-petice-proti-opakovane-cerne-skladce-a-nelegalnimu-znecistovani-lesniho-pozemku-v-lokalite-v-kozovech-u-kladna';

export interface NavItem {
  label: string;
  id: string;
}

export interface Supporter {
  name: string;
  href: string;
  img: string;
}

export interface Video {
  id: string;
  title: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  /** Může obsahovat jednoduché HTML (<strong>, <a>). */
  desc: string;
  icon: LucideIcon;
}

export interface MediaArticle {
  title: string;
  media: string;
  date: string;
  excerpt: string;
  url: string;
}

export interface Actor {
  icon: LucideIcon;
  title: string;
  role: string;
  desc: string;
  /** Doména bez https://, zobrazí se jako odkaz. */
  link?: string;
}

export interface Demand {
  title: string;
  desc: string;
}

export interface DocumentItem {
  name: string;
  url: string;
  date?: string;
}

export interface DocumentGroup {
  title: string;
  icon: LucideIcon;
  desc: string;
  documents: DocumentItem[];
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Úvod', id: 'home' },
  { label: 'O problému', id: 'problem' },
  { label: 'Podporovatelé', id: 'supporters' },
  { label: 'Historie', id: 'timeline' },
  { label: 'Galerie', id: 'gallery' },
  { label: 'Média', id: 'media' },
  { label: 'Aktéři', id: 'actors' },
  { label: 'Požadavky', id: 'demands' },
  { label: 'Dokumenty', id: 'documents' },
  { label: 'Oficiální podnět', id: 'official-motion' },
  { label: 'Petice', id: 'petition' },
  { label: 'Kontakt', id: 'contact' },
];

export const SUPPORTERS: Supporter[] = [
  { name: 'FK Slavoj Kladno', href: 'https://www.slavojkladno.cz/', img: '/slavoj.webp' },
  { name: 'e-Kladensko.cz', href: 'https://www.e-kladensko.cz/', img: '/ekladensko.webp' },
  { name: 'Ukliďme Česko', href: 'https://www.uklidmecesko.cz/', img: '/uklidme.webp' },
  { name: 'Barfshop Kladno', href: 'https://obchod.barfshop.cz/index.php', img: '/barf.webp' },
  { name: 'Pomáhejme zvířatům z.s.', href: 'https://www.behproutulky.cz/', img: '/pomahejme.webp' },
  { name: 'Badminton Klub Kladno', href: 'https://www.badmintonkladno.cz/', img: '/bck.webp' },
  { name: 'NON STOP Zámky', href: 'https://nonstopzamky.cz/', img: '/zamky.webp' },
];

/** Svislá videa (YouTube Shorts). Názvy odpovídají názvům na kanálu @leskozovka. */
export const SHORTS: Video[] = [
  { id: 'eVpM2Ox7lnY', title: 'Černá skládka v lese u Kožovky – záběry z místa, 29. 3. 2024' },
  { id: 'wNOZnW988Rc', title: 'Černá skládka v lese u Kožovky – záběry z místa, 22. 2. 2026' },
  { id: 'LJ7l2ErGHEc', title: 'Tohle už není jen o odpadech. Zvířata tu trpí! (záběry z roku 2022)' },
  { id: 'XFkO-osmlI0', title: 'Záběry z roku 2022: takhle vypadal nepořádek v lese u Kožovky' },
];

export const MAIN_VIDEO: Video = {
  id: '2GnL7_9h2zE',
  title: 'Konfrontace a obrovská černá skládka v lese u Kožovky, 1. 3. 2026',
};

export const TIMELINE: TimelineEvent[] = [
  {
    date: '2022',
    title: 'První výskyt',
    desc: 'Muž bez domova se začíná dlouhodobě zdržovat v lese V Kožovech ve směru na Kožovu horu na okraji Kladna na pozemku ve vlastnictví <strong>Benediktinského arciopatství sv. Vojtěcha a sv. Markéty v Praze.</strong> Postupně vzniká <strong>černá skládka odpadků a igelitových tašek.</strong>',
    icon: Eye
  },
  {
    date: 'Od roku 2022',
    title: 'Nabídka sociální pomoci odmítnuta',
    desc: '<strong>Sociální odbor Magistrátu města Kladna</strong> nabízí muži pomoc. Jeho opatrovnice je s ním v častém kontaktu. Muž <strong>veškerou nabízenou pomoc zarputile odmítá</strong> — podle svých slov musí zůstat v lese, aby se mohl starat o toulavé kočky.',
    icon: Users
  },
  {
    date: '2022 – 2025',
    title: 'Opakované úklidy',
    desc: 'Na základě dohody vlastníka lesa a Magistrátu města Kladna zajišťuje úklid <strong>firma AVE Kladno.</strong> Strážníci musí opakovaně zasahovat (muž se <strong>úklidu fyzicky brání</strong>) a za pomoci donucovacích prostředků je odváděn od pracovníků. Nahromaděný odpad totiž považuje za svůj majetek. <strong>Úklid se opakuje, trvalé řešení nenásleduje.</strong>',
    icon: Recycle
  },
  {
    date: '12. dubna 2025',
    title: 'Požár v lese',
    desc: 'V sobotu ráno v lesním porostu v lokalitě V Kožovech <strong>vypukl požár.</strong> Zasahují hasiči Středočeského kraje. Hořely hromady odpadků a igelitových tašek nashromážděné mužem bez domova. Na místo dorazili i policisté. <strong>Mluvčí středočeských hasičů Ladislav Holomčík potvrdil, že "požár zřejmě založil sám muž"</strong> dlouhodobě žijící v lokalitě. Případ zachytila média (kladensky.denik.cz, nasekladno.cz, silvarium.cz).',
    icon: Flame
  },
  {
    date: '7. ledna 2026',
    title: 'Další zásah (AVE Kladno + strážníci)',
    desc: '<strong>Firma AVE Kladno</strong> přistavuje bikramovou vanu, strážníci opět zajišťují pořádek při úklidu. Během dopoledne je vše uklizeno a odvezeno. <strong>Muži je znovu nabídnuta pomoc — opět odmítnuta.</strong> Cyklus se uzavírá a obratem začíná znovu.',
    icon: Recycle
  },
  {
    date: '23. února 2026',
    title: 'Spuštění webu a petice',
    desc: 'Vzniká web <strong>leskozovka.cz</strong> jako první systematická občanská reakce na situaci. Spouští se veřejná petice adresovaná <strong>městu Kladno, Břevnovskému klášteru, ČIŽP a Středočeskému kraji.</strong> Cílem je <strong>trvalé systémové řešení</strong>, ne další úklid za půl roku.',
    icon: PenLine
  },
  {
    date: '23. února - 19. března 2026',
    title: 'Sběr všech informací',
    desc: 'Aktuálně probíhá <strong>systematický sběr všech dosavadních informací</strong> od dotčených orgánů a subjektů: Magistrát města Kladna, Policie, Hasiči, Veterina, Česká inspekce životního prostředí, vlastník pozemku i občané.',
    icon: FileText
  },
  {
    date: '19. března 2026',
    title: 'Problém se přesunul k areálům sportovních klubů',
    desc: 'Dnes jsme obdrželi zprávy od zástupců <strong>FK Slavoj Kladno</strong> a <strong>Badminton Klubu Kladno</strong>, že se problém nepodařilo skutečně vyřešit, ale pouze přesunout z původního místa k prostoru u sportovišť; i když úklid původní lokality je pozitivní krok, v novém místě se podle klubů znovu hromadí odpad, objevují se potkani a další havěť a vzniká tak <strong>nepřijatelné zdravotní riziko pro děti a mládež</strong>, což nelze považovat za systémové ani dostatečné řešení.',
    icon: AlertTriangle
  },
  {
    date: '20. března 2026',
    title: 'Zaslání oficiálního podnětu Magistrátu města Kladna',
    desc: 'Dne <strong>20. 03. 2026</strong> byl odeslán komplexní oficiální podnět, primárně adresovaný <strong>Magistrátu města Kladna</strong> a současně zaslaný na vědomí dalším příslušným orgánům (ČIŽP, KVS, KHS, HZS, Policie ČR, Povodí Vltavy a Benediktinské arciopatství). Podnět byl podán podle <strong>§ 42 správního řádu</strong> s výzvou k zahájení řízení z moci úřední dle § 2 správního řádu a s žádostí o informaci do 30 dnů o přijatých opatřeních. <a href="https://drive.google.com/file/d/1W4qs2eS412JGnq-_w-TSv_bB6egDD-uc/view?usp=drive_link" target="_blank" rel="noopener noreferrer"><strong>Zobrazit celé znění podnětu</strong></a>.',
    icon: PenLine
  }
];

export const MEDIA_ARTICLES: MediaArticle[] = [
  {
    title: 'Bezdomovce u Kožovky vyklízela odpadová firma i strážníci',
    media: 'KM Zprávy',
    date: '12. prosince 2022',
    excerpt: 'V prosinci 2022 přijela k lesu u Kožovky odpadová firma AVE Kladno s bikramovou vanou. Strážníci zajišťovali pořádek při úklidu. Během dopoledne bylo vše uklizeno a odvezeno. Muži byla opět nabídnuta pomoc — opět odmítnuta.',
    url: 'https://kmzpravy.cz/bezdomovce-u-kozovky-vyklizela-odpadova-firma-i-straznici/'
  },
  {
    title: 'Strážníci prováděli dohled při úklidu lesa v Kožovech',
    media: 'Městská policie Kladno',
    date: '12. prosince 2022',
    excerpt: 'Strážníci Městské policie Kladno zajišťovali pořádek a dohled při úklidu lesa v lokalitě Kožovy. Akce probíhala ve spolupráci s odpadovou firmou AVE Kladno. Muži žijícímu na pozemku byla opakovaně nabídnuta sociální pomoc.',
    url: 'https://mpkladno.cz/straznici-provadeli-dohled-pri-uklidu-lesa-v-kozovech/d-1709'
  },
  {
    title: 'U kladenského poustevníka zasahovala úklidová četa. Pod dohledem strážníků',
    media: 'Kladenský deník',
    date: '13. prosince 2022',
    excerpt: 'V prosinci 2022 proběhl v kladenském lese rozsáhlý úklid nepořádku, který tam dlouhodobě hromadil muž bez domova. Pracovníci úklidové firmy museli za asistence městských strážníků z pozemku odvézt dva velkokapacitní kontejnery plné odpadu, staré elektroniky a dokonce i uhynulých zvířat.',
    url: 'https://kladensky.denik.cz/zpravy_region/u-kladenskeho-poustevnika-zasahovala-uklidova-ceta-pod-dohledem-strazniku-202212.html'
  },
  {
    title: 'Kladenští strážníci zasahovali proti bezdomovci, který znečišťoval les',
    media: 'e-kladensko.cz',
    date: '14. prosince 2022',
    excerpt: 'Městská policie Kladno opakovaně zasahuje v lese u Kožovky. Bezdomovec se zde dlouhodobě zdržuje a hromadí odpadky. Strážníci musí zajišťovat pořádek při úklidu, muž se fyzicky brání.',
    url: 'https://www.e-kladensko.cz/zpravy/1607-kladensti-straznici-zasahovali-proti-bezdomovci-ktery-znecistoval-les'
  },
  {
    title: 'V lese na okraji Kladna hořelo. Požár zřejmě založil bezdomovec',
    media: 'Kladenský deník',
    date: '12. dubna 2025',
    excerpt: 'V sobotu ráno vypukl v lesním porostu u Kožovky požár. Zasahovali hasiči Středočeského kraje. Hořely hromady odpadků a igelitových tašek nashromážděné bezdomovcem. Mluvčí hasičů potvrdil, že požár zřejmě založil muž žijící v lokalitě.',
    url: 'https://kladensky.denik.cz/krimi/v-lese-na-okraji-kladna-horelo-pozar-zrejme-zalozil-bezdomovec-20250412.html'
  },
  {
    title: 'U Kožovky v sobotu ráno hořely odpadky v lese. Požár pravděpodobně založil známý bezdomovec, který zde žije',
    media: 'NašeKladno.cz',
    date: '12. dubna 2025',
    excerpt: 'V sobotu ráno zasahovali hasiči u požáru v lese u Kožovky. Hořely odpadky a igelitové tašky nashromážděné bezdomovcem, který v lokalitě dlouhodobě pobývá. Požár pravděpodobně založil sám.',
    url: 'https://www.nasekladno.cz/u-kozovky-v-sobotu-rano-horely-odpadky-v-lese-pozar-pravdepodobne-zalozil-znamy-bezdomovec-ktery-zde-zije/'
  },
  {
    title: 'V lese na okraji Kladna hořelo. Požár zřejmě založil bezdomovec',
    media: 'Silvarium.cz',
    date: '14. dubna 2025',
    excerpt: 'Zpravodajský portál pro lesnictví a dřevařství přinesl zprávu o požáru v lese u Kladna. Požár zřejmě způsobil bezdomovec dlouhodobě žijící v lokalitě.',
    url: 'https://silvarium.cz/zpravy-z-oboru-lesnictvi-a-drevarstvi/v-lese-na-okraji-kladna-horelo-pozar-zrejme-zalozil-bezdomovec-kladensky-denik-cz'
  },
  {
    title: 'Úklid lesa: Skládka na okraji Kladna zmizela, odvezli dvě bikramky odpadu',
    media: 'Kladenský deník',
    date: '7. ledna 2026',
    excerpt: 'Firma AVE Kladno ve spolupráci s městskou policií provedla rozsáhlý úklid černé skládky v lese u Kožovky. Byly odvezeny dvě bikramové vany plné odpadu. Strážníci zajišťovali pořádek při akci.',
    url: 'https://kladensky.denik.cz/zpravy_region/uklid-lesa-skladka-na-okraji-kladna-zmizela-odvezli-dve-bikramky-odpadu-20260107.html'
  },
  {
    title: 'Také vám vadí nepořádek v lese na Kladně po bezdomovcích? Vznikla petice',
    media: 'e-kladensko.cz',
    date: '24. února 2026',
    excerpt: 'V lese Kožovka na okraji Kladna se už několik let opakuje nepořádek/černá skládka spojená s pobytem osoby bez domova. Iniciativa Les Kožovka proto spustila web leskozovka.cz společně s veřejnou peticí a žádá systémové řešení, nejen další opakovaný úklid.',
    url: 'https://www.e-kladensko.cz/zpravy/6531-take-vam-vadi-neporadek-v-lese-na-kladne-po-bezdomovcich-vznikla-petice'
  },
  {
    title: 'Také vám vadí nepořádek v lese na Kladně po bezdomovcích? Vznikla petice',
    media: 'Silvarium.cz',
    date: '25. února 2026',
    excerpt: 'V lese Kožovka na okraji Kladna se už několik let opakuje nepořádek/černá skládka spojená s pobytem osoby bez domova. Iniciativa Les Kožovka proto spustila web leskozovka.cz společně s veřejnou peticí a žádá systémové řešení, nejen další opakovaný úklid.',
    url: 'https://silvarium.cz/zpravy-z-oboru-lesnictvi-a-drevarstvi/take-vam-vadi-neporadek-v-lese-na-kladne-po-bezdomovcich-vznikla-petice-e-kladensko-cz'
  },
  {
    title: 'Skládku v lese Kožovka město dlouhodobě neřešilo',
    media: 'e-kladensko.cz',
    date: '10. března 2026',
    excerpt: 'Město podle článku nechávalo problém skládky v lese Kožovka dlouhodobě bez účinného řešení, takže se po každém úklidu znovu obnovovala. Text proto zdůrazňuje potřebu systémového zásahu místo dalších jednorázových úklidů.',
    url: 'https://www.e-kladensko.cz/zpravy/6592-skladku-v-lese-kozovka-mesto-dlouhodobe-neresilo'
  },
  {
    title: 'Les u Kožovky: bezdomovec nyní hromadí nepořádek u badmintonu',
    media: 'e-kladensko.cz',
    date: '19. března 2026',
    excerpt: 'Po úklidu původního místa se podle iniciativy problém pouze přesunul k areálům fotbalového a badmintonového klubu, kde se znovu hromadí odpad a objevují se zdravotní rizika. Iniciativa požaduje koordinované a skutečně systémové řešení, nikoliv další přesouvání problému.',
    url: 'https://www.e-kladensko.cz/zpravy/6626-les-u-kozovky-bezdomovec-nyni-hromadi-neporadek-u-badmintonu'
  },
  {
    title: 'V lese na Kožovce opět hořelo',
    media: 'e-kladensko.cz',
    date: '8. dubna 2026',
    excerpt: 'V úterý 7. dubna večer v lese na Kožovce opět hořelo. Je otázkou, zda tento požár způsobil bezdomovec, který sem opakovaně přináší nepořádek...',
    url: 'https://www.e-kladensko.cz/zpravy/6695-v-lese-na-kozovce-opet-horelo'
  },
  {
    title: 'Tento nepořádek nanosil bezdomovec na Kožovku za měsíc. Co s ním?',
    media: 'e-kladensko.cz',
    date: '16. dubna 2026',
    excerpt: 'V posledních dnech došlo k dalšímu výraznému zhoršení situace na pozemku p. č. 3886/6 v lokalitě Kožové hory. Podle zjištění...',
    url: 'https://www.e-kladensko.cz/zpravy/6730-tento-neporadek-nanosil-bezdomovec-na-kozovku-za-mesic-co-s-nim'
  },
  {
    title: 'Kladno uvedlo, že bezdomovec pan Víšek porušuje na Kožovce zákon o odpadech',
    media: 'e-kladensko.cz',
    date: '21. dubna 2026',
    excerpt: 'Iniciativa Les na Kožovce v ohrožení obdržel odpověď Odboru životního prostředí Magistrátu...',
    url: 'https://www.e-kladensko.cz/zpravy/6743-kladno-uvedlo-ze-bezdomovec-pan-visek-porusuje-na-kozovce-zakon-o-odpadech'
  }
];

export const ACTORS: Actor[] = [
  {
    icon: Church,
    title: 'Benediktinské arciopatství sv. Vojtěcha a sv. Markéty',
    role: 'Vlastník pozemku',
    desc: 'Zodpovídá za údržbu a zabezpečení svého majetku. Dosud nebylo přijato technické opatření proti opakovanému znečištění.',
    link: 'brevnov.cz'
  },
  {
    icon: Building2,
    title: 'Město Kladno',
    role: 'Místní samospráva',
    desc: 'Sporadicky se podílí na úklidu pozemku, avšak bez systémového řešení problému. Má pravomoc zapojit sociální služby a zvýšit kontrolu.',
    link: 'mestokladno.cz'
  },
  {
    icon: Leaf,
    title: 'ČIŽP',
    role: 'Česká inspekce životního prostředí',
    desc: 'Česká inspekce životního prostředí má pravomoc šetřit opakované porušování zákona o odpadech a uložit sankce.',
    link: 'cizp.cz'
  },
  {
    icon: Shield,
    title: 'Policie ČR / MP Kladno',
    role: 'Dozor a pořádková pravomoc',
    desc: 'Má pravomoc kontrolovat dodržování veřejného pořádku a spolupracovat s dalšími orgány při řešení nelegálního pobytu a černé skládky.',
    link: 'policie.cz'
  },
  {
    icon: Users,
    title: 'Místní obyvatelé',
    role: 'Nejvíce postižení',
    desc: 'Lidé žijící v okolí pociťují negativní dopady na kvalitu života, obavy o bezpečnost dětí a zhoršenou estetiku krajiny pro rekreaci.'
  },
  {
    icon: Bird,
    title: 'Příroda a zvěř',
    role: 'Němí postižení',
    desc: 'Kontaminace půdy, ohrožení zvířat požárem a chemikáliemi, narušení ekosystému a přirozených stanovišť volně žijících živočichů.'
  }
];

export const DEMANDS: Demand[] = [
  { title: 'Zapojení sociálního kurátora města Kladno', desc: 'Pro práci s bezdomovcem a nabídku sociálních služeb, které by pomohly řešit příčinu problému humánně a efektivně.' },
  { title: 'Zvýšená frekvence policejních kontrol', desc: 'Minimálně 1x týdně na daném pozemku, aby se předešlo opakování problému a zajistila prevence.' },
  { title: 'Zahájení správního řízení OÚ ORP Kladno', desc: 'O černé skládce podle zákona č. 541/2020 Sb., o odpadech, s identifikací viníka a uložením sankcí.' },
  { title: 'Podnět ČIŽP k šetření opakovaného porušování', desc: 'České inspekci životního prostředí k prošetření dlouhodobého porušování zákona o odpadech.' },
  { title: 'Oplocení nebo technické zabezpečení pozemku', desc: 'Vlastník (Břevnovský klášter) by měl přijmout preventivní opatření k ochraně svého majetku a prevenci znečištění.' },
  { title: 'Prošetření požáru Hasičským záchranným sborem', desc: 'Hasičský záchranný sbor Středočeského kraje by měl vyšetřit příčinu požáru a zveřejnit výsledky.' },
  { title: 'Veřejná zpráva o výsledcích ze strany Magistrátu', desc: 'Město Kladno by mělo zveřejnit souhrnnou zprávu o přijatých opatřeních a plánovaných krocích k trvalému řešení.' },
  { title: 'Další preventivní a systémová opatření', desc: 'Přijetí konkrétních kroků k trvalému zamezení opakování situace – například instalace fotopastí nebo kamerového monitoringu pro identifikaci původců znečišťování, fyzické zábrany proti navezení odpadu do lokality (zábrany, kládový práh, kameny na vjezdech), výrazné zákazové tabule a označení zákazu rozdělávání ohně, zavedení závazné lhůty pro rychlý úklid (max. 7–14 dní od nahlášení) s jasně určeným odpovědným kontaktem na straně vlastníka i města, a vytvoření veřejného kontaktního kanálu pro hlášení incidentů s průběžnou mapou událostí. Veškerá tato opatření by měla být zakotvena v písemné dohodě mezi vlastníkem pozemku (Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze) a Magistrátem města Kladna.' }
];

export const DOCUMENT_GROUPS: DocumentGroup[] = [
  {
    title: 'Hasičský záchranný sbor Středočeského kraje',
    icon: Flame,
    desc: 'Dokumenty týkající se požáru ze dne 12. dubna 2025, příčiny vzniku, rozsahu škod a výsledků šetření.',
    documents: [
      {
        name: 'Žádost o informace č. 1',
        url: 'https://drive.google.com/file/d/1rNEq-7EsfFR3wjv0rL6Pj3lyl3V2M8uF/view?usp=drive_link',
        date: 'Únor 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 1',
        url: 'https://drive.google.com/file/d/1b99fsW9whiH_IknfYuL2zsfllMnCl0fa/view?usp=drive_link',
        date: 'Únor 2026'
      },
      {
        name: 'Anonymizovaná zpráva o zásahu ze dne 12.04.2025',
        url: 'https://drive.google.com/file/d/1hKqRpVnKxcweGe9U96KQ0dCZDne8a1yu/view?usp=drive_link',
        date: 'Únor 2026'
      },
      {
        name: 'Žádost o informace č. 2',
        url: 'https://drive.google.com/file/d/1OpAm2yJ8aYWYvQsh94pgEM7aHYcN039W/view?usp=drive_link',
        date: 'Únor 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 2',
        url: 'https://drive.google.com/file/d/1O_dshKh_NYy-w09m1tH23zsGJHjsbDPi/view?usp=drive_link',
        date: 'Březen 2026'
      },
      {
        name: 'Žádost o informace č. 3',
        url: 'https://drive.google.com/file/d/18blsQ-xNuCJtd5y5HOWOgdzeuIN71aWo/view?usp=drive_link',
        date: 'Duben 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 3',
        url: 'https://drive.google.com/file/d/1HbCpdfozRBeMD0X95jBHWBC4KRm7aPSb/view?usp=drive_link',
        date: 'Duben 2026'
      }
    ]
  },
  {
    title: 'Statutární město Kladno',
    icon: Building2,
    desc: 'Dokumenty k úklidovým akcím, nákladům, frekvenci zásahů městské policie a nabízeným sociálním službám.',
    documents: [
      {
        name: 'Žádost o informace č. 1',
        url: 'https://drive.google.com/file/d/19rEBC_OkAPcoZChlBINUAtuo5diqUFA7/view?usp=drive_link',
        date: 'Únor 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 1',
        url: 'https://drive.google.com/file/d/17IgaIrqR9suFMBOIR4OccEo2eiewmtT1/view?usp=drive_link',
        date: 'Březen 2026'
      },
      {
        name: 'Žádost o informace č. 2',
        url: 'https://drive.google.com/file/d/1kbTDsX9ZNHEWu1TqIveFdUB7tbx6R5zK/view?usp=drive_link',
        date: 'Březen 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 2',
        url: 'https://drive.google.com/file/d/1PNKX8yh5B3pzvvjK4XTl4PyEQFRXFwat/view?usp=drive_link',
        date: 'Březen 2026'
      },
      {
        name: 'Příloha č. 1 - Výpis z IS MP',
        url: 'https://docs.google.com/spreadsheets/d/1uDhxRkTx8G_bUjBvzzDIHVEyx7BgHU4o/edit?usp=drive_link&ouid=111843213503444543156&rtpof=true&sd=true',
        date: 'Březen 2026'
      },
      {
        name: 'Příloha č. 2 - Oznámení o podezření ze spáchání přestupku',
        url: 'https://drive.google.com/file/d/1U5i33ET8IFPHz0QwzoTS9UG7SVLRAPN4/view?usp=drive_link',
        date: 'Březen 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 2 (odmítnutí poskytnout informace)',
        url: 'https://drive.google.com/file/d/1oM8M64WN24IS6yTsy4N1-IbfqGVVO-KT/view?usp=drive_link',
        date: 'Březen 2026'
      },
      {
        name: 'Žádost o informace č. 3 (navazuje na žádost č. 1)',
        url: 'https://drive.google.com/file/d/1Rd8tfiER1zbfps6In2WhJR1epKPUXRta/view?usp=drive_link',
        date: 'Duben 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 3',
        url: 'https://drive.google.com/file/d/1zd7NiVphZMWdmOiMAuDQ2j7Sao6fFeIM/view?usp=drive_link',
        date: 'Květen 2026'
      },
      {
        name: 'Žádost o informace č. 4',
        url: 'https://drive.google.com/file/d/1_WIYs7TsmE_D8vQ83zAIZ_ZuboniRcwp/view?usp=drive_link',
        date: 'Duben 2026'
      },
      {
        name: 'Rozhodnutí Krajského úřadu Středočeského kraje',
        url: 'https://drive.google.com/file/d/1d70CM-ZU2uPdUawj5I960lBuZUuYGbIO/view?usp=drive_link',
        date: 'Duben 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 4',
        url: 'https://drive.google.com/file/d/1fN_9xK7FEBuRjO7LcCY0OWjAwI4S9DyO/view?usp=drive_link',
        date: 'Květen 2026'
      },
      {
        name: 'Příloha č. 1 - Protokol 1',
        url: 'https://drive.google.com/file/d/172SCYh5HqDCclMzGz86okYB0hMeUlcdZ/view?usp=drive_link',
        date: 'Květen 2026'
      },
      {
        name: 'Příloha č. 2 - Protokol 2',
        url: 'https://drive.google.com/file/d/1a1dboIttENysItuCa9WZUP5PS7R6uCpZ/view?usp=drive_link',
        date: 'Květen 2026'
      },
      {
        name: 'Žádost o informace č. 5',
        url: 'https://drive.google.com/file/d/1zcHJVDlK9sbZ-OkvQdcI0lfnK_0VmFOI/view?usp=drive_link',
        date: 'Květen 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 5',
        url: 'https://drive.google.com/file/d/1z8yBBkWIyLyUFcg6HbZvi0Q2RtNgCyUJ/view?usp=drive_link',
        date: 'Květen 2026'
      },
      {
        name: 'Žádost o informace č. 6',
        url: 'https://drive.google.com/file/d/1QJL59RDMYYuAseiLlFflPgxLzFZ2Pdmt/view?usp=drive_link',
        date: 'Květen 2026'
      },
      {
        name: 'Žádost o informace č. 7',
        url: 'https://drive.google.com/file/d/1LrFjnhdBn6G68YFdEqPR820NWBE_oaR9/view?usp=drive_link',
        date: 'Květen 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 7',
        url: 'https://drive.google.com/file/d/1gSs1mqDHBpP446WWKsLX16qDsN5l8S4R/view?usp=drive_link',
        date: 'Červen 2026'
      },
      {
        name: 'Žádost o informace č. 8',
        url: 'https://drive.google.com/file/d/1KvhTGuPJU1uOODMvvwmxY0BSX3Y_hlc0/view?usp=drive_link',
        date: 'Září 2026'
      }
    ]
  },
  {
    title: 'Krajské ředitelství policie Středočeského kraje',
    icon: Shield,
    desc: 'Dokumenty týkající se zásahů Policie ČR, vedených případů a přijatých opatření v dané lokalitě.',
    documents: [
      {
        name: 'Žádost o informace č. 1',
        url: 'https://drive.google.com/file/d/1Sss8BZJHo8zKADdXz94VOCY3pVAa7uvs/view?usp=drive_link',
        date: 'Únor 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 1',
        url: 'https://drive.google.com/file/d/1dYwpHeTtcTc10JNtW_DZIrV9-_igPqpB/view?usp=drive_link',
        date: 'Březen 2026'
      },
      {
        name: 'Žádost o informace č. 2',
        url: 'https://drive.google.com/file/d/1dRT0HSVHS87G4u4LXftZMc11JVugMhxg/view?usp=drive_link',
        date: 'Březen 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 2',
        url: 'https://drive.google.com/file/d/1Q4odsURsjczEkgUMlzcXfke9UYdASI2O/view?usp=drive_link',
        date: 'Březen 2026'
      }
    ]
  },
  {
    title: 'Česká inspekce životního prostředí',
    icon: Leaf,
    desc: 'Dokumenty k šetřením černé skládky, provedeným kontrolám a případným správním řízením.',
    documents: [
      {
        name: 'Žádost o informace č. 1',
        url: 'https://drive.google.com/file/d/1P902hUw2GKqz6Ya_o0N70l4aVxUyLgLR/view?usp=drive_link',
        date: 'Únor 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 1',
        url: 'https://drive.google.com/file/d/12uHnvOZqyFt6-oP8DGxyqZN24aT-L-N7/view?usp=drive_link',
        date: 'Březen 2026'
      }
    ]
  },
  {
    title: 'Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze',
    icon: Church,
    desc: 'Žádost o součinnost a koordinaci řešení opakované černé skládky a nelegálního pobytu na lesním pozemku v lokalitě "V Kožovech" u Kladna.',
    documents: [
      {
        name: 'Dopis opatu',
        url: 'https://drive.google.com/file/d/1ZUghYdbeRKjbJS-fgO7_xm2NmW4e04kc/view?usp=drive_link',
        date: 'Únor 2026'
      },
      {
        name: 'Nezávislá komunikace',
        url: 'https://drive.google.com/file/d/1SfelvIvhMW8hJ5akqP2OLg_L4DQWTG9N/view?usp=drive_link',
        date: 'Duben 2026'
      },
      {
        name: 'Dopis opatu č. 2',
        url: 'https://drive.google.com/file/d/1nj3qx_emCAwAc_4-umGbpeVvTlKHlvfU/view?usp=drive_link',
        date: 'Květen 2026'
      }
    ]
  },
  {
    title: 'Krajská veterinární správa SVS pro Středočeský kraj',
    icon: Bird,
    desc: 'Dokumenty k výkonu veterinárního dozoru, řešení podnětů na týrání a situaci toulavých zvířat v souvislosti s opakovanou nelegální skládkou na pozemku.',
    documents: [
      {
        name: 'Žádost o informace č. 1',
        url: 'https://drive.google.com/file/d/1SKdaXXLvAwJ15atkkXxgGcMXan_ZacRw/view?usp=drive_link',
        date: 'Únor 2026'
      },
      {
        name: 'Odpověď na žádost o informace č. 1',
        url: 'https://drive.google.com/file/d/1JadCXwClc2ZQirp66EXt72O_zQGghqaE/view?usp=drive_link',
        date: 'Březen 2026'
      }
    ]
  }
];

export const FIELD_DOCUMENTS: DocumentItem[] = [
  { name: 'Dokument č. 1 - Záznam z jednání - 14. 1. 2022', url: 'https://drive.google.com/file/d/1fsjQLB5Bp45DwMg4ZMHCcvN_Fe7NK-aV/view?usp=drive_link' },
  { name: 'Dokument č. 2 - Záznam z jednání - 21. 2. 2022', url: 'https://drive.google.com/file/d/1iHgjdO7LjlQR_QUTWyOE8eqSMeSD3KFq/view?usp=drive_link' },
  { name: 'Dokument č. 3 - Výzva - 22. 2. 2022', url: 'https://drive.google.com/file/d/1JzVEr3t15iHQh2C9R3cSiK-7lbma3P6w/view?usp=drive_link' },
  { name: 'Dokument č. 4 - Výzva (pokračování) - 23. 2. 2022', url: 'https://drive.google.com/file/d/1IsWJsY42tgNmqctLFN4xMd9mX5beZ2i6/view?usp=drive_link' },
  { name: 'Dokument č. 5 - Výzva č. 2 - 28. 2. 2022', url: 'https://drive.google.com/file/d/1WvsiaGGdlh1Usu6_vb2hql9W2RY5E8ZR/view?usp=drive_link' },
  { name: 'Dokument č. 6 - Protokol z jednání - 3. 3. 2022', url: 'https://drive.google.com/file/d/1xtsSRDbc-K-2TvoO8ypuodHSR61XsG1F/view?usp=drive_link' },
  { name: 'Dokument č. 7 - Protokol z jednání - 4. 3. 2022', url: 'https://drive.google.com/file/d/1gszxWgJWSOENPXU8AXdQHli-ahiI0mxa/view?usp=drive_link' },
  { name: 'Dokument č. 8 - Záznam z místního šetření - 27. 5. 2022', url: 'https://drive.google.com/file/d/1KYPqEF4_UgoyaUeiT1Qc7hKK9EoPmgpC/view?usp=drive_link' },
  { name: 'Dokument č. 9 - Protokol z jednání - 15. 7. 2022', url: 'https://drive.google.com/file/d/1CSyUlhbvjDeRzkHqj6DnTofeChVwCV8n/view?usp=drive_link' },
  { name: 'Dokument č. 10 - Protokol z jednání 2 - 26. 7. 2022', url: 'https://drive.google.com/file/d/1EJHwdj4LQ37aTvK63ZRgpDnp9RItHHLd/view?usp=drive_link' },
  { name: 'Dokument č. 11 - Záznam z místního šetření - 2. 2. 2023', url: 'https://drive.google.com/file/d/1R-VqqnCMZTmP73gG-Y0v_h09EgoRKFOT/view?usp=drive_link' },
  { name: 'Dokument č. 12 - Záznam z místního šetření - 12. 5. 2023', url: 'https://drive.google.com/file/d/1ExGBchuzgWSJ126xSQYnQ5b3AC6V5-BG/view?usp=drive_link' },
  { name: 'Dokument č. 13 - Záznam z místního šetření - 7. 9. 2023', url: 'https://drive.google.com/file/d/117xwiR0YTXKxDyhGMyTDL0L_mA-CB-tU/view?usp=drive_link' },
  { name: 'Dokument č. 14 - Záznam z místního šetření - 17. 4. 2024', url: 'https://drive.google.com/file/d/1aGlzeOtCb_dLpaw1xkxdbYKvPRT87UT4/view?usp=drive_link' },
  { name: 'Dokument č. 15 - Záznam z jednání - 4. 6. 2024', url: 'https://drive.google.com/file/d/18ar9IcGrJAqj9Y82U5lhpNJHAhAyznSI/view?usp=drive_link' },
  { name: 'Dokument č. 16 - Záznam z místního šetření - 23. 5. 2025', url: 'https://drive.google.com/file/d/1Slhs2bIZcYB9aS0B6LsL0R2SxNDNMlE3/view?usp=drive_link' },
  { name: 'Dokument č. 17 - Záznam z jednání - 16. 12. 2025', url: 'https://drive.google.com/file/d/1tcQCth-XPNznB04Y4JiSIuYL2XG099NN/view?usp=drive_link' },
  { name: 'Dokument č. 18 - Záznam z jednání - 30. 12. 2025', url: 'https://drive.google.com/file/d/1do1tyNXI0wbL6LGzh5SQAUkDCxCPJpWQ/view?usp=drive_link' },
];
