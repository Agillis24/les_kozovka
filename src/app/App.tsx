import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import {
  TreePine,
  FileText,
  Recycle,
  Flame,
  Ruler,
  Footprints,
  Users,
  MapPin,
  Mail,
  Youtube,
  Facebook,
  Menu,
  X,
  PenLine,
  FileDown,
  ExternalLink,
  Gavel,
  Image,
} from 'lucide-react';
import { LiteYouTube } from './components/LiteYouTube';
import { SectionHeading } from './components/SectionHeading';
import { DocumentList } from './components/DocumentList';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/ui/accordion';
import {
  ACTORS,
  DEMANDS,
  DOCUMENT_GROUPS,
  FIELD_DOCUMENTS,
  MAIN_VIDEO,
  MEDIA_ARTICLES,
  NAV_ITEMS,
  PETITION_URL,
  SHORTS,
  SUPPORTERS,
  TIMELINE,
} from './content';

const LocationMap = lazy(() => import('./components/LocationMap'));

export default function App() {
  const forestWasteImage = '/forest-waste.webp';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(true);
  const [useHeroFallback, setUseHeroFallback] = useState(false);

  const heroImageDesktop = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?fit=crop&w=1920&q=80';
  const heroImageMobile = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?fit=crop&w=900&q=75';
  const heroImageDesktopAvif = `${heroImageDesktop}&fm=avif`;
  const heroImageMobileAvif = `${heroImageMobile}&fm=avif`;
  const heroImageDesktopWebp = `${heroImageDesktop}&fm=webp`;
  const heroImageMobileWebp = `${heroImageMobile}&fm=webp`;

  // plovoucí tlačítko petice schováme, když je vidět sekce s peticí
  useEffect(() => {
    const petitionSection = document.getElementById('petition');
    if (!petitionSection || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver((entries) =>
      setShowFloatingButton(!entries[entries.length - 1].isIntersecting)
    );
    io.observe(petitionSection);
    return () => io.disconnect();
  }, []);

  // Odkaz typu leskozovka.cz/#documents: po načtení stránky (obrázky, styly)
  // na sekci skočíme znovu, protože první posun prohlížeče mohl proběhnout
  // ještě před dokončením rozvržení.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const jump = () => document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' });
    if (document.readyState === 'complete') {
      jump();
      return;
    }
    window.addEventListener('load', jump, { once: true });
    return () => window.removeEventListener('load', jump);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  // mapa se načte až když se uživatel přiblíží ke kontaktu
  const mapRef = useRef<HTMLDivElement>(null);
  const [showMap, setShowMap] = useState(false);
  useEffect(() => {
    const el = mapRef.current;
    if (!el || !('IntersectionObserver' in window)) {
      setShowMap(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some(e => e.isIntersecting)) {
          setShowMap(true);
          io.disconnect();
        }
      },
      { rootMargin: '600px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d5016] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <a
              href="#home"
              onClick={closeMenu}
              className="flex items-center gap-2 text-white font-bold text-xl hover:text-white/80 transition-colors whitespace-nowrap"
            >
              <TreePine className="w-6 h-6" />
              <span>Les u Kožovky</span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center gap-6">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-white/90 hover:text-white transition-colors text-sm font-medium whitespace-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden text-white p-2"
              aria-label={isMenuOpen ? 'Zavřít menu' : 'Otevřít menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="xl:hidden pb-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={closeMenu}
                className="block w-full text-left text-white/90 hover:text-white py-2 px-4 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-svh min-h-[600px] flex items-center justify-center text-center text-white pt-20">
        <div className="absolute inset-0">
          {useHeroFallback ? (
            <img
              src={forestWasteImage}
              alt="Les u Kožovky"
              loading="eager"
              {...{ fetchpriority: "high" }}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <picture>
              <source
                type="image/avif"
                srcSet={`${heroImageMobileAvif} 900w, ${heroImageDesktopAvif} 1920w`}
                sizes="100vw"
              />
              <source
                type="image/webp"
                srcSet={`${heroImageMobileWebp} 900w, ${heroImageDesktopWebp} 1920w`}
                sizes="100vw"
              />
              <img
                src={heroImageDesktop}
                srcSet={`${heroImageMobile} 900w, ${heroImageDesktop} 1920w`}
                sizes="100vw"
                alt="Les u Kožovky"
                loading="eager"
                {...{ fetchpriority: "high" }}
                className="h-full w-full object-cover object-center"
                onError={() => setUseHeroFallback(true)}
              />
            </picture>
          )}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg leading-tight">
            Les u Kladna v ohrožení:<br />
            opakující se černá skládka
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 font-light drop-shadow-md max-w-3xl mx-auto leading-relaxed">
            Lesní pozemek ve vlastnictví Benediktinského arciopatství sv. Vojtěcha a sv. Markéty v Praze čelí opakovanému
            znečištění černou skládkou a nelegálnímu pobytu bezdomovce. Příroda trpí, zvěř je ohrožena a úřady jen nečinně
            přihlížejí.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href="#problem"
              className="bg-[#4a7c2c] hover:bg-[#5a9c3c] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:-translate-y-1 shadow-lg inline-block w-full sm:w-auto text-center"
            >
              Zjistit více
            </a>
            <a
              href={PETITION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e67e22] hover:bg-[#d35400] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:-translate-y-1 shadow-lg inline-block w-full sm:w-auto text-center"
            >
              Podepsat petici
            </a>
          </div>
        </div>
      </section>

      {/* O problému */}
<section id="problem" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading>
      Co se děje v lese u Kožovky na Kladně?
    </SectionHeading>

    <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
      <div className="space-y-4">
        <p className="text-lg font-medium text-gray-700">
          Lesní pozemek ve vlastnictví <strong>Benediktinského arciopatství sv. Vojtěcha a sv. Markéty v Praze</strong>, v lokalitě <strong>V Kožovech u Kladna</strong> (ve směru na Kožovu horu), čelí vážnému a opakujícímu se problému.
        </p>
        <p className="text-gray-600">
          <strong>Muž bez domova, který se zde dlouhodobě zdržuje, v lese soustavně hromadí odpadky a igelitové tašky a zakládá černou skládku.</strong> Pozemek byl opakovaně vyčištěn za přítomnosti městských strážníků i odpadové firmy – <strong>bezdomovec se však vždy vrátí a vše opakuje od začátku.</strong> Situace ohrožuje místní faunu, kontaminuje lesní půdu a představuje riziko požáru v bezprostřední blízkosti obytné zástavby.
        </p>
        <p className="text-gray-600">
          <strong>V sobotu 12. dubna 2025 ráno v lokalitě skutečně vypukl požár.</strong> Hasiči Středočeského kraje zasahovali přímo v lesním porostu – hořely hromady odpadků a igelitu nashromážděné bezdomovcem. Na místo byli přivoláni i policisté. Podle mluvčího středočeských hasičů Ladislava Holomčíka <strong>požár zřejmě založil sám muž, který se v lokalitě dlouhodobě zdržuje.</strong>
        </p>
        <p className="text-gray-600">
          Přestože situaci opakovaně řeší městská policie, Policie ČR i smluvní odpadová firma, žádná ze zúčastněných institucí dosud nepřijala systémové opatření. <strong>Les hoří doslova i přeneseně – a nikdo nenese odpovědnost.</strong>
        </p>
      </div>
      <div>
        <img
          src={forestWasteImage}
          alt="Znečištěný les se skládkou odpadků"
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="w-full h-[400px] object-cover rounded-lg shadow-xl"
        />
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { icon: Recycle, title: 'Opakované úklidy', desc: 'Pozemek vyčištěn opakovaně – problém se ale vždy vrací' },
        { icon: Flame, title: '1 požár', desc: 'Zaznamenaný požár na pozemku v roce 2025' },
        { icon: Ruler, title: '~12 750 m²', desc: 'Odhadovaná rozloha zasažené oblasti' },
        { icon: Footprints, title: 'Ohrožená zvěř', desc: 'Divoká prasata, srnci, drobní savci, čolci, ropuchy, skokani atp.' }
      ].map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-transform text-center">
          <item.icon className="w-12 h-12 mx-auto mb-4 text-[#4a7c2c]" />
          <h3 className="text-xl font-semibold text-[#2d5016] mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </div>
      ))}
    </div>

    {/* Odkaz na katastr nemovitostí */}
    <div className="mt-12 max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-6 rounded-lg shadow-xl text-white">
        <div className="flex items-start gap-4">
          <MapPin className="w-8 h-8 flex-shrink-0 mt-1" />
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Informace o pozemku</h3>
            <p className="mb-4 opacity-90">
              Dotčený pozemek je veden v katastru nemovitostí. Veškeré informace o vlastnictví, výměře a hranicích pozemku jsou veřejně dostupné.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://nahlizenidokn.cuzk.gov.cz/ZobrazObjekt.aspx?typ=parcela&id=1145895203"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#2d5016] px-5 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                <ExternalLink className="w-5 h-5" />
                Zobrazit v katastru nemovitostí
              </a>
              <div className="text-sm opacity-90 flex items-center">
                <span className="bg-white/20 px-3 py-2 rounded-full">
                  Parcela č. <strong>3830/4</strong> | k.ú. <strong>Kročehlavy [665126]</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Dopad na přírodu a chráněné druhy */}
    <div className="mt-16 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#2d5016] mb-4">
          Dopad na chráněnou přírodu a šíření nemocí
        </h3>
        <p className="text-gray-600">
          <strong>V důsledku nepořádku a duševního stavu osoby neprávem okupující předmětný pozemek dochází k nekontrolovatelnému množení koček,</strong> které následně hromadně vymírají. Tato situace představuje nejen problém pro welfare zvířat, ale i <strong>potenciální riziko šíření nemocí a infekcí</strong> do okolní přírody i lidské populace.
        </p>
        <p className="text-gray-600">
          <strong>V bezprostřední blízkosti znečištění se nachází přilehlá bažina</strong> (<a href="https://nahlizenidokn.cuzk.gov.cz/ZobrazObjekt.aspx?typ=parcela&id=723526203" target="_blank" rel="noopener noreferrer" className="text-[#4a7c2c] hover:text-[#2d5016] underline">parcela č. 3884, k.ú. Kročehlavy [665126], druh pozemku: vodní plocha, způsob využití: zamokřená plocha</a>) s výskytem <strong>zvláště chráněných živočichů – obojživelníků:</strong>
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
          <li><strong>Čolek obecný</strong> (<em>Lissotriton vulgaris</em>) – <span className="text-orange-600 font-semibold">zranitelný a silně ohrožený druh</span></li>
          <li><strong>Čolek horský</strong> (<em>Ichthyosaura alpestris</em>) – <span className="text-orange-600 font-semibold">zranitelný a silně ohrožený druh</span></li>
          <li><strong>Čolek velký</strong> (<em>Triturus cristatus</em>) – <span className="text-red-600 font-semibold">silně ohrožený druh</span></li>
          <li><strong>Ropucha zelená</strong> (<em>Bufotes viridis</em>) – <span className="text-red-600 font-semibold">silně ohrožený druh</span></li>
          <li><strong>Skokan štíhlý</strong> (<em>Rana dalmatina</em>) – <span className="text-red-600 font-semibold">silně ohrožený druh</span></li>
        </ul>
        <p className="text-gray-600">
          <strong>Všechny zmíněné druhy spadají pod přísnou ochranu podle zákona č. 114/1992 Sb., o ochraně přírody a krajiny, ve znění pozdějších předpisů (a jeho prováděcích předpisů) jako zvláště chráněné druhy a figurují v <a href="https://portal.nature.cz/cervene-seznamy#/" target="_blank" rel="noopener noreferrer" className="text-[#4a7c2c] hover:text-[#2d5016] underline">Červeném seznamu ohrožených druhů ČR</a>.</strong> Vznikem nelegální skládky dochází k přímému porušování § 50 zákona č. 114/1992 Sb., neboť je ničen a poškozován biotop druhů chráněných vyhláškou č. 395/1992 Sb. v kategorii silně ohrožené.
        </p>
        <p className="text-gray-600">
          Okolí Kladna je obecně bohaté na stanoviště s výskytem <strong>zvláště chráněných rostlin a živočichů.</strong> Z rostlin se v Rozdělovských jezírcích (nedaleko dotčené oblasti) vyskytuje např. <strong>bublinatka</strong> (<em>Utricularia spec.</em>). Kontaminace půdy, šíření patogenů a narušení ekosystému tak ohrožuje celou síť chráněných biotopů v regionu.
        </p>
        <p className="text-gray-600">
          Na základě odpovědi <strong>Povodí Vltavy, státní podnik</strong> ze dne <strong>14. 04. 2026</strong> (<a href="https://drive.google.com/file/d/1LA6_a8KCz6nXvcO4Y4ZgbQAs_pPe7IN4/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-[#4a7c2c] hover:text-[#2d5016] underline">zobrazit dokument</a>) je zřejmé, že problémový pozemek leží v <strong>ochranném pásmu vodního zdroje II. stupně</strong>. Věc proto musí řešit příslušný <strong>odbor životního prostředí Magistrátu města Kladna – vodoprávní úřad</strong>, a to zejména s ohledem na možné porušení <strong>§ 30 odst. 8 zákona č. 254/2001 Sb., o vodách (vodní zákon)</strong>.
        </p>
      </div>
    </div>

    <div className="mt-16 max-w-4xl mx-auto">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-[#2d5016] mb-4">
          Vývoj v březnu 2026
        </h3>
        <p className="text-gray-600">
          Dne <strong>19. 03. 2026</strong> proběhl úklid původně znečištěného pozemku, avšak muž bez domova se přesunul o několik metrů dál na pozemek <a href="https://nahlizenidokn.cuzk.gov.cz/ZobrazObjekt.aspx?encrypted=NAHL~2xb_LPeFLQ6EtRubNxm9u1vm0GEOSVydM6KDUD2DydezE0pJsoeB9yl-ebe_4elfpBbBko5Zva6fFT_QYKSBwNe37V5QGlyTsZvKuhRuqix0HKx6Q6qk-49FOIBjSr8hmKMUNSrgmWF8QStn2WlJBNEl9f9TIN0oeWnsnnXEOqwPzG0GFRS4oCqiupgLGUrhprGk8ydseezjKBF7vWzxi-XAXp0kISSlKMJ8uHF1-xH87FzuVZkNNXq0wKklzYJs" target="_blank" rel="noopener noreferrer" className="text-[#4a7c2c] hover:text-[#2d5016] underline"><strong>p.p.č. 3886/6</strong></a> v k.ú. Kročehlavy, který je rovněž ve vlastnictví církve a nachází se v bezprostřední blízkosti sportovních areálů. Tím se problém pouze přesunul na nové místo a aktuálně představuje <strong>přímé zdravotní riziko pro děti a rodiče (členy sportovišť) i návštěvníky lokality</strong>. V odpadu se dle slov předsedy Badmintonového Klubu Kladno mohou nacházet <strong>nebezpečné látky, použité injekční stříkačky a další kontaminovaný materiál</strong>.
        </p>
        <p className="text-gray-600">
          Zároveň dochází k tomu, že odpad láká <strong>škůdce a volně žijící zvířata</strong> (zejména potkany a krysy), kteří následně v postiženém místě vyhledávají potravu. To způsobuje jejich pohyb i na okolních pozemcích – zejména na pozemcích sportovišť, která toto zaznamenávají již od prvního dne přesunu muže bez domova. Tyto pozemky jsou přitom využívány zejména dětmi. Negativní dopady se projevují také v klidové zóně určené mimo jiné pro psy. I zde již sportoviště evidují plastový a další přenesený odpad; podle dostupných svědectví navíc dochází i k jeho přehazování na sousední pozemky. Vzhledem k tomu, že množství odpadu v posledních měsících narůstá, je nezbytné situaci <strong>bezodkladně řešit</strong>.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Podporovatelé */}
      <section id="supporters" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="text-3xl mb-8">
            Podporují nás
          </SectionHeading>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {SUPPORTERS.map((sp) => (
              <a
                key={sp.name}
                href={sp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
              >
                <img
                  src={sp.img}
                  alt={`${sp.name} logo`}
                  width={128}
                  height={128}
                  loading="lazy"
                  decoding="async"
                  className="w-32 h-32 object-contain"
                />
                <h3 className="text-xl font-bold text-[#2d5016] text-center">{sp.name}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading className="mb-16">
            Historie problému
          </SectionHeading>

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-8">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#4a7c2c] -translate-x-1/2" />
                
                <div className={`relative flex items-center gap-8 w-full ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-[#2d5016] font-semibold mb-2">{item.date}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p
                        className="text-gray-600 [&_a]:text-[#4a7c2c] [&_a]:underline [&_a:hover]:text-[#2d5016]"
                        dangerouslySetInnerHTML={{ __html: item.desc }}
                      />
                    </div>
                  </div>
                  
                  {/* Icon */}
                  <div className="hidden md:flex w-14 h-14 rounded-full bg-[#4a7c2c] items-center justify-center text-white flex-shrink-0 z-10">
                    <item.icon className="w-7 h-7" />
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="flex-1 hidden md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>
            Fotodokumentace
          </SectionHeading>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#2d5016] to-[#4a7c2c] p-8 rounded-lg shadow-xl text-white mb-8">
              <Image className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Kompletní fotodokumentace problému</h3>
              <p className="text-lg mb-6 opacity-90">
                Veškerá fotodokumentace (černá skládka, nelegální pobyt, požár a úklidové akce) je volně dostupná na Google Disku. Fotografie dokumentují závažnost situace a jsou k dispozici pro média, úřady i veřejnost.
              </p>
              <a 
                href="https://drive.google.com/drive/folders/1mgzH9geW9sDTxL8pHUWV_cPxMy_sPE5i?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-[#2d5016] px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:bg-gray-100"
              >
                <ExternalLink className="w-6 h-6" />
                Zobrazit fotogalerii
              </a>
            </div>
            
            <p className="text-gray-600 text-sm mb-12">
              Fotografie jsou uspořádané chronologicky a tematicky. Dokládají rozsah znečištění, opakované úklidy, důkazy nelegálního pobytu i následky požáru z dubna 2025.
            </p>
          </div>

          {/* Videodokumentace */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Videodokumentace</h3>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {SHORTS.map((video) => (
                <figure key={video.id}>
                  <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-lg bg-gray-100">
                    <LiteYouTube id={video.id} title={video.title} />
                  </div>
                  <figcaption className="mt-2 text-xs sm:text-sm text-gray-600 text-center">{video.title}</figcaption>
                </figure>
              ))}
            </div>

            <figure className="max-w-4xl mx-auto mt-10">
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-100">
                <LiteYouTube id={MAIN_VIDEO.id} title={MAIN_VIDEO.title} />
              </div>
              <figcaption className="mt-2 text-sm text-gray-600 text-center">{MAIN_VIDEO.title}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* V médiích o nás */}
      <section id="media" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>
            V médiích o problému
          </SectionHeading>
          
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            O problému černé skládky u Kladna již informovala řada médií. Přinášíme přehled článků, které dokumentují závažnost situace a upozorňují veřejnost na trvající problém.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEDIA_ARTICLES.map((article, idx) => (
              <a 
                key={idx} 
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FileText className="w-4 h-4" />
                    <span className="font-semibold text-[#4a7c2c]">{article.media}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#4a7c2c] transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#2d5016] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{article.date}</p>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="mt-4 text-[#4a7c2c] text-sm font-semibold group-hover:underline">
                  Přečíst celý článek →
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Jste novinář a chcete o situaci psát? Kontaktujte nás pro více informací a fotodokumentaci.</p>
            <a 
              href="mailto:info@leskozovka.cz"
              className="inline-flex items-center gap-2 bg-[#4a7c2c] hover:bg-[#5a9c3c] text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Kontakt pro média
            </a>
          </div>
        </div>
      </section>

      {/* Aktéři */}
      <section id="actors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading>
            Kdo je zodpovědný a kdo trpí?
          </SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ACTORS.map((actor, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-all text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#4a7c2c] rounded-full flex items-center justify-center">
                  <actor.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#2d5016] mb-2">{actor.title}</h3>
                <p className="text-sm font-semibold text-gray-700 mb-3">Role: {actor.role}</p>
                <p className="text-gray-600 text-sm mb-3">{actor.desc}</p>
                {actor.link && (
                  <a 
                    href={`https://${actor.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a7c2c] text-sm hover:underline inline-flex items-center gap-1"
                  >
                    <ExternalLink className="w-3 h-3" />
                    {actor.link}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Požadavky */}
<section id="demands" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading>
      Naše požadavky
    </SectionHeading>

    <div className="space-y-6">
      {DEMANDS.map((demand, idx) => (
        <div key={idx} className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-lg hover:translate-x-2 transition-transform">
          <div className="w-12 h-12 flex-shrink-0 bg-[#4a7c2c] rounded-full flex items-center justify-center text-white font-bold text-xl">
            {idx + 1}
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#2d5016] mb-2">{demand.title}</h3>
            <p className="text-gray-600">{demand.desc}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Odkaz na podrobný dokument */}
    <div className="mt-12 max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-8 rounded-lg shadow-xl text-white">
        <div className="flex items-start gap-6">
          <div className="w-16 h-16 flex-shrink-0 bg-white/20 rounded-full flex items-center justify-center">
            <FileDown className="w-8 h-8" />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-3">Podrobný dokument s požadavky</h3>
            <p className="mb-6 opacity-90 text-lg">
              Stáhněte si kompletní rozpis všech požadavků včetně právního zdůvodnění, odkazů na relevantní legislativu a konkrétních návrhů řešení.
            </p>
            <a
              href="https://drive.google.com/file/d/1Wpqf1lug1pW9y5yUEwZ3WXsfKEo6FgqB/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-[#2d5016] px-6 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <FileDown className="w-6 h-6" />
              Stáhnout podrobné požadavky (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Oficiální dokumentace a korespondence */}
<section id="documents" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading>
      Oficiální dokumentace a korespondence
    </SectionHeading>

    <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
      V rámci práva na informace podle zákona č. 106/1999 Sb. jsme oslovili příslušné orgány veřejné moci. Níže najdete kompletní dokumentaci včetně našich žádostí, obdržených odpovědí a dalších oficiálních dokumentů.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 mb-12">
      {DOCUMENT_GROUPS.map((org) => (
        <div
          key={org.title}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="flex items-start gap-4 mb-4">
            <div className="w-12 h-12 flex-shrink-0 bg-[#4a7c2c] rounded-full flex items-center justify-center">
              <org.icon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 mb-1">
                {org.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {org.desc}
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <DocumentList documents={org.documents} />
          </div>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-8 rounded-lg shadow-xl text-white">
      <div className="flex items-start gap-4">
        <Gavel className="w-8 h-8 flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-xl font-bold mb-3">Právní základ žádostí</h3>
          <p className="mb-4 opacity-90 leading-relaxed">
            Všechny žádosti byly podány v souladu se <strong>zákonem č. 106/1999 Sb., o svobodném přístupu k informacím, ve znění pozdějších předpisů.</strong> Tento zákon zaručuje právo každého občana požadovat informace od státních orgánů a orgánů územní samosprávy.
          </p>
          <p className="text-sm opacity-80">
            Povinné subjekty mají zákonnou lhůtu <strong>15 dnů</strong> na poskytnutí informací nebo odůvodnění odmítnutí. Všechny obdržené odpovědi a dokumenty průběžně zveřejňujeme na tomto webu.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-8 bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-3 text-[#2d5016]">
        Dokumenty z terénních šetření (Magistrát města Kladna - sociální odbor)
      </h3>
      <p className="text-gray-600 mb-5">
        V této sekci jsou průběžně doplňovány odkazy na dokumenty z terénních šetření pracovníků sociálního odboru Magistrátu města Kladna.
      </p>

      <DocumentList documents={FIELD_DOCUMENTS} />
    </div>
  </div>
</section>

      {/* Oficiální podněty */}
<section id="official-motion" className="py-20 bg-gray-50">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading className="mb-4">
      Oficiální podnět
    </SectionHeading>
    <p className="text-center text-gray-600 mb-12">
      Přehled všech podaných oficiálních podnětů a obdržených odpovědí – seřazeno od nejnovějšího. Očíslované položky jsou podněty, položka s obálkou je odpověď.
    </p>

    <Accordion type="multiple" className="space-y-4">

      {/* ── Nový dokument ── */}
      <AccordionItem value="dokument-odpoved-2026-07-20" className="bg-white rounded-lg shadow-lg border-0 overflow-hidden">
        <AccordionTrigger className="px-8 py-5 hover:no-underline hover:bg-gray-50 [&>svg]:text-[#4a7c2c]">
          <div className="flex items-center gap-4 text-left">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4a7c2c] text-white flex items-center justify-center" aria-label="Odpověď">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-[#2d5016] text-lg">Odpověď Odboru životního prostředí – 20. 07. 2026</div>
              <div className="text-sm text-gray-500">Magistrát města Kladna, Odbor životního prostředí · nejnovější dokument</div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-8 pb-8">
          <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-6 rounded-lg shadow-lg text-white mb-6">
            <div className="flex items-start gap-4">
              <Gavel className="w-7 h-7 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Odpověď doručena dne 20. 07. 2026</h3>
                <p className="opacity-95 leading-relaxed mb-4">
                  Zveřejněna je odpověď Odboru životního prostředí Magistrátu města Kladna jako nejnovější dokument v této sekci.
                </p>
                <a
                  href="https://drive.google.com/file/d/10ZlAzCSr9bjgiJMniYQ9RqtvwEt1LOHE/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#2d5016] px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Zobrazit dokument
                </a>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* ── Podnět č. 3 ── */}
      <AccordionItem value="podnet-3" className="bg-white rounded-lg shadow-lg border-0 overflow-hidden">
        <AccordionTrigger className="px-8 py-5 hover:no-underline hover:bg-gray-50 [&>svg]:text-[#4a7c2c]">
          <div className="flex items-center gap-4 text-left">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4a7c2c] text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div>
              <div className="font-bold text-[#2d5016] text-lg">Podnět č. 3 – 19. 05. 2026</div>
              <div className="text-sm text-gray-500">Magistrát města Kladna, Odbor ŽP</div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-8 pb-8">
          {/* Hlavní karta */}
          <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-6 rounded-lg shadow-lg text-white mb-6">
            <div className="flex items-start gap-4">
              <Gavel className="w-7 h-7 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Podnět odeslán dne 19. 05. 2026</h3>
                <p className="opacity-95 leading-relaxed mb-4">
                  Dne <strong>19. 05. 2026</strong> byl odeslán další oficiální podnět, primárně adresovaný{' '}
                  <strong>Magistrátu města Kladna, Odboru ŽP</strong>.
                </p>
                <a
                  href="https://drive.google.com/file/d/1z4aNEu6GnC-MB8KOId7WqA65y5ZyM76G/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#2d5016] px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Zobrazit celé znění podnětu
                </a>
              </div>
            </div>
          </div>

          {/* Adresáti */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-bold text-[#2d5016] mb-3">Primární adresát</h4>
            <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
              <li>Magistrát města Kladna, Odbor ŽP</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* ── Podnět č. 2 ── */}
      <AccordionItem value="podnet-2" className="bg-white rounded-lg shadow-lg border-0 overflow-hidden">
        <AccordionTrigger className="px-8 py-5 hover:no-underline hover:bg-gray-50 [&>svg]:text-[#4a7c2c]">
          <div className="flex items-center gap-4 text-left">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#4a7c2c] text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div>
              <div className="font-bold text-[#2d5016] text-lg">Podnět č. 2 – 11. 05. 2026</div>
              <div className="text-sm text-gray-500">Magistrát města Kladna, Odbor ŽP</div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-8 pb-8">
          {/* Hlavní karta */}
          <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-6 rounded-lg shadow-lg text-white mb-6">
            <div className="flex items-start gap-4">
              <Gavel className="w-7 h-7 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Podnět odeslán dne 11. 05. 2026</h3>
                <p className="opacity-95 leading-relaxed mb-4">
                  Dne <strong>11. 05. 2026</strong> byl odeslán navazující podnět, primárně adresovaný{' '}
                  <strong>Magistrátu města Kladna, Odboru životního prostředí</strong>, a současně zaslaný na vědomí
                  primátorovi, Radě a Kontrolnímu výboru Zastupitelstva města Kladna a Benediktinské arciopatství.
                </p>
                <a
                  href="https://drive.google.com/file/d/1RdkmMVGpTE37ba6rKvEbhIq2VEEK67g0/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#2d5016] px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Zobrazit celé znění podnětu
                </a>
              </div>
            </div>
          </div>

          {/* Adresáti */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-bold text-[#2d5016] mb-3">Primární adresát</h4>
            <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5 mb-4">
              <li>Magistrát města Kladna, Odbor životního prostředí</li>
            </ul>
            <h4 className="text-lg font-bold text-[#2d5016] mb-3">Na vědomí</h4>
            <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
              <li>Primátor města Kladna</li>
              <li>Rada města Kladna</li>
              <li>Kontrolní výbor Zastupitelstva města Kladna</li>
              <li>Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze, Markétská 1/28, 169 00 Praha 6-Břevnov, IČO: 00408344, datová schránka: 7y4eg43</li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* ── Podnět č. 1 ── */}
      <AccordionItem value="podnet-1" className="bg-white rounded-lg shadow-lg border-0 overflow-hidden">
        <AccordionTrigger className="px-8 py-5 hover:no-underline hover:bg-gray-50 [&>svg]:text-[#4a7c2c]">
          <div className="flex items-center gap-4 text-left">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#2d5016] text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div>
              <div className="font-bold text-[#2d5016] text-lg">Podnět č. 1 – 20. 03. 2026</div>
              <div className="text-sm text-gray-500">Magistrát města Kladna + 6 institucí · 5 odpovědí obdrženo</div>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-8 pb-8">
          {/* Hlavní karta */}
          <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-6 rounded-lg shadow-lg text-white mb-6">
            <div className="flex items-start gap-4">
              <Gavel className="w-7 h-7 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">Komplexní podnět odeslán dne 20. 03. 2026</h3>
                <p className="opacity-95 leading-relaxed mb-4">
                  Dne <strong>20. 03. 2026</strong> došlo k zaslání komplexního oficiálního podnětu, primárně adresovaného{' '}
                  <strong>Magistrátu města Kladna</strong>, a současně zaslaného na vědomí dalším příslušným orgánům
                  (ČIŽP, KVS, KHS, HZS, Policie ČR, Povodí Vltavy a Benediktinské arciopatství).
                </p>
                <a
                  href="https://drive.google.com/file/d/1W4qs2eS412JGnq-_w-TSv_bB6egDD-uc/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#2d5016] px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Zobrazit celé znění podnětu
                </a>
              </div>
            </div>
          </div>

          {/* Adresáti */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-bold text-[#2d5016] mb-3">Adresáti na vědomí</h4>
            <ul className="space-y-2 text-gray-700 text-sm list-disc pl-5">
              <li>Ředitelství České inspekce životního prostředí, Na Břehu 267/1a, 190 00 Praha 9, IČO: 41693205, datová schránka: zr5efbb</li>
              <li>Krajská veterinární správa pro Středočeský kraj, Černoleská 1929, 256 01 Benešov, IČO: 00018562, datová schránka: d2vairv</li>
              <li>Krajská hygienická stanice Středočeského kraje se sídlem v Praze, Dittrichova 329/17, 120 00 Praha 2, IČO: 71009159, datová schránka: hhcai8e</li>
              <li>Hasičský záchranný sbor Středočeského kraje, Jana Palacha 1970, 272 01 Kladno, IČO: 70885371, datová schránka: dz4aa73</li>
              <li>Krajské ředitelství policie Středočeského kraje, Na Baních 1535, 156 00 Praha 5, IČO: 75151481, datová schránka: 2dtai5u</li>
              <li>Povodí Vltavy, státní podnik, Holečkova 3178/8, 150 00 Praha 5 – Smíchov, IČO: 70889953, datová schránka: gg4t8hf</li>
              <li>Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze, Markétská 1/28, 169 00 Praha 6-Břevnov, IČO: 00408344, datová schránka: 7y4eg43</li>
            </ul>
          </div>

          {/* Právní rámec */}
          <div className="bg-gray-50 p-6 rounded-lg mb-6">
            <h4 className="text-lg font-bold text-[#2d5016] mb-3">Právní rámec a výzva městu</h4>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Podnět byl podán v souladu s <strong>§ 42 zákona č. 500/2004 Sb., správního řádu, ve znění pozdějších předpisů</strong>,
                k prověření závažného a opakovaného porušování právních předpisů v oblasti nakládání s odpady, ochrany přírody,
                veterinární péče a ochrany veřejného zdraví v katastrálním území <strong>Kročehlavy</strong>.
              </p>
              <p>
                Vzhledem k doložené úřední nečinnosti v minulých letech žádáme věcně a místně příslušný správní orgán,
                aby z moci úřední zahájil příslušná řízení v souladu se zásadou oficiality a legality podle <strong>§ 2 správního řádu</strong>.
              </p>
              <p>
                Zároveň výslovně žádáme statutární město Kladno, aby nás v souladu s <strong>§ 42 správního řádu</strong>
                {' '}do <strong>30 dnů</strong> od obdržení podnětu informovalo o tom, jaká konkrétní opatření byla přijata a jaká řízení byla zahájena.
              </p>
            </div>
          </div>

          {/* Odpovědi */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-bold text-[#2d5016] mb-4">Odpovědi na podnět č. 1</h4>
            <div className="space-y-5">
              <div className="border-l-4 border-[#4a7c2c] pl-5">
                <h5 className="font-semibold text-[#2d5016] mb-1">Povodí Vltavy, státní podnik</h5>
                <p className="text-gray-600 text-sm mb-2">Odpověď doručena dne <strong>13. 04. 2026</strong></p>
                <a
                  href="https://drive.google.com/file/d/1LA6_a8KCz6nXvcO4Y4ZgbQAs_pPe7IN4/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4a7c2c] hover:text-[#2d5016] font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Zobrazit odpověď
                </a>
              </div>
              <div className="border-l-4 border-[#4a7c2c] pl-5">
                <h5 className="font-semibold text-[#2d5016] mb-1">Magistrát města Kladna, Odbor sociální</h5>
                <p className="text-gray-600 text-sm mb-2">Odpověď doručena dne <strong>14. 04. 2026</strong></p>
                <a
                  href="https://drive.google.com/file/d/16-JxhZBPzbjtDh09FoID1jrwgIDHd2tl/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4a7c2c] hover:text-[#2d5016] font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Zobrazit odpověď
                </a>
              </div>
              <div className="border-l-4 border-[#4a7c2c] pl-5">
                <h5 className="font-semibold text-[#2d5016] mb-1">Magistrát města Kladna, Odbor životního prostředí</h5>
                <p className="text-gray-600 text-sm mb-2">Odpověď doručena dne <strong>20. 04. 2026</strong></p>
                <a
                  href="https://drive.google.com/file/d/1-9miOL7IrOpJqXEMNXTgK_OkvaEmRxt0/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4a7c2c] hover:text-[#2d5016] font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Zobrazit odpověď
                </a>
              </div>
              <div className="border-l-4 border-[#4a7c2c] pl-5">
                <h5 className="font-semibold text-[#2d5016] mb-1">Krajská hygienická stanice Středočeského kraje se sídlem v Praze</h5>
                <p className="text-gray-600 text-sm mb-2">Odpověď doručena dne <strong>27. 04. 2026</strong></p>
                <a
                  href="https://drive.google.com/file/d/18Ol2bLMnJHaBEXUPlnYAbFLtpq3pF3Tv/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4a7c2c] hover:text-[#2d5016] font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Zobrazit odpověď
                </a>
              </div>
              <div className="border-l-4 border-[#4a7c2c] pl-5">
                <h5 className="font-semibold text-[#2d5016] mb-1">Státní veterinární správa</h5>
                <p className="text-gray-600 text-sm mb-2">Odpověď doručena dne <strong>15. 05. 2026</strong></p>
                <a
                  href="https://drive.google.com/file/d/1m7Hp5LWoobY8jiXZLvNGrdgnB90avi7p/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4a7c2c] hover:text-[#2d5016] font-medium text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Zobrazit odpověď
                </a>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>

    </Accordion>
  </div>
</section>

      {/* Petice */}
      <section id="petition" className="py-24 bg-gradient-to-br from-[#2d5016] to-[#4a7c2c] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Podpořte nás — podepište petici</h2>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-95">
            Váš podpis znamená tlak na odpovědné instituce. Pomozte ochránit přírodu, zajistit důstojné řešení pro všechny zúčastněné a ukázat, že nečinnost není akceptovatelná. Každý hlas se počítá!
          </p>
          <a 
            href={PETITION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#e67e22] hover:bg-[#d35400] px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:-translate-y-2 shadow-2xl uppercase tracking-wide"
          >
            <PenLine className="w-6 h-6" />
            Podepsat petici
          </a>
          <p className="mt-4 text-sm opacity-80">
            Petice je umístěna na externí platformě. Kliknutím budete přesměrováni.
          </p>
          <div className="mt-8 inline-block bg-white/20 px-6 py-3 rounded-full">
            <Users className="inline w-5 h-5 mr-2" />
            Buďte mezi prvními, kdo podpoří změnu!
          </div>
        </div>
      </section>

      {/* Kontakt */}
<section id="contact" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionHeading>
      Kontakt a organizátoři
    </SectionHeading>

    <div className="grid lg:grid-cols-2 gap-12">
      <div>
        <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-[#2d5016] mb-6">Kontaktní informace</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-[#4a7c2c] flex-shrink-0 mt-1" />
              <div>
                <strong className="block text-gray-800">Organizátor:</strong>
                Ing. Dominik Žlebek, LL.M.
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#4a7c2c] flex-shrink-0 mt-1" />
              <div>
                <strong className="block text-gray-800">E-mail pro média a úřady:</strong>
                <a href="mailto:info@leskozovka.cz" className="text-[#4a7c2c] hover:underline">info@leskozovka.cz</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#4a7c2c] flex-shrink-0 mt-1" />
              <div>
                <strong className="block text-gray-800">Lokace problému:</strong>
                Parcela č. 3830/4 | k.ú. Kročehlavy [665126]<br />
                Nově také: Parcela č. 3886/6 | k.ú. Kročehlavy [665126]<br />
                Vlastník: Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze
              </div>
            </div>
          </div>

          <h4 className="text-xl font-bold text-[#2d5016] mt-8 mb-4">Sledujte nás</h4>
          <div className="flex gap-3">
            {[
              { icon: Facebook, link: 'https://www.facebook.com/profile.php?id=61587817198306' },
              { icon: Youtube, link: 'https://www.youtube.com/@leskozovka' },
              { icon: Mail, link: 'mailto:info@leskozovka.cz' }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#4a7c2c] hover:bg-[#5a9c3c] rounded-full flex items-center justify-center text-white transition-all transform hover:-translate-y-1"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-[#2d5016] mb-4">Kde se problém nachází</h3>
        <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
          <div ref={mapRef} className="w-full h-full bg-gray-100">
            {showMap && (
              <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-gray-500 text-sm">Načítám mapu…</div>}>
                <LocationMap />
              </Suspense>
            )}
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm mt-2">GPS souřadnice: 50.1262367N, 14.1089158E · 50.1264344N, 14.1073522E</p>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-[#2c3e50] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 text-sm opacity-90 leading-relaxed max-w-4xl mx-auto">
            <p className="mb-4">
              <strong>O tomto webu:</strong> Tento web je nekomerční iniciativou občanů v zájmu ochrany přírody a řešení opakovaného problému černé skládky u Kladna. Web slouží k informování veřejnosti, médií a orgánů veřejné moci. Veškeré informace jsou založeny na reálných událostech a dokumentaci.
            </p>
            <p>
              Petice je realizována v souladu se zákonem č. 85/1990 Sb., o právu petičním, ve znění pozdějších předpisů.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            <a href="#home" className="hover:text-[#a8d08d] transition-colors">O webu</a>
            <a href="#contact" className="hover:text-[#a8d08d] transition-colors">Kontakt</a>
          </div>
          <div className="text-center text-sm opacity-80 pt-8 border-t border-white/10">
            <p>&copy; 2026 Ing. Dominik Žlebek, LL.M. Všechna práva vyhrazena.</p>
            <p className="mt-2">Web vytvořen s podporou dobrovolníků a aktivních občanů.</p>
          </div>
        </div>
      </footer>

      {/* Floating Petition Button */}
      {showFloatingButton && (
        <a 
          href={PETITION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#e67e22] hover:bg-[#d35400] rounded-full shadow-2xl flex flex-col items-center justify-center text-white transition-all transform hover:scale-110 z-50 text-xs font-semibold"
          aria-label="Podepsat petici"
        >
          <PenLine className="w-6 h-6 mb-1" />
          Petice
        </a>
      )}
    </div>
  );
}
