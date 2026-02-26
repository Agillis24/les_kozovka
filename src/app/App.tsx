import { useState, useEffect } from 'react';
import {
  TreePine,
  Eye,
  FileText,
  Recycle,
  Flame,
  Ruler,
  Footprints,
  Church,
  Building2,
  Leaf,
  Shield,
  Users,
  Bird,
  MapPin,
  Mail,
  Youtube,
  Menu,
  X,
  PenLine,
  Download,
  ExternalLink,
  Gavel,
  Image,
} from 'lucide-react';
import forestWasteImage from '../assets/bfc47caf5b2087a591c8fc8ab0254fb83392a2c5.png';
import Gallery from './components/Gallery';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const petitionSection = document.getElementById('petition');
      if (petitionSection) {
        const rect = petitionSection.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;
        setShowFloatingButton(!isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d5016] shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center gap-2 text-white font-bold text-xl hover:text-white/80 transition-colors"
            >
              <TreePine className="w-6 h-6" />
              <span>Les u Kožovky</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {[
                'Úvod',
                'O problému',
                'Podporovatelé',
                'Historie',
                'Galerie',
                'Média',
                'Aktéři',
                'Požadavky',
                'Dokumenty',
                'Petice',
                'Kontakt',
              ].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    scrollToSection(
                      [
                        'home',
                        'problem',
                        'supporters',
                        'timeline',
                        'gallery',
                        'media',
                        'actors',
                        'demands',
                        'documents',
                        'petition',
                        'contact',
                      ][idx]
                    )
                  }
                  className="text-white/90 hover:text-white transition-colors text-sm font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4">
            {[
              'Úvod',
              'O problému',
              'Podporovatelé',
              'Historie',
              'Galerie',
              'Média',
              'Aktéři',
              'Požadavky',
              'Dokumenty',
              'Petice',
              'Kontakt',
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() =>
                  scrollToSection(
                    [
                      'home',
                      'problem',
                      'supporters',
                      'timeline',
                      'gallery',
                      'media',
                      'actors',
                      'demands',
                      'documents',
                      'petition',
                      'contact',
                    ][idx]
                  )
                }
                className="block w-full text-left text-white/90 hover:text-white py-2 px-4 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
      {/* ✅ DŮLEŽITÉ: uzavření nav přidáno */}

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center text-center text-white pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920")',
          }}
        />
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
            <button
              onClick={() => scrollToSection('problem')}
              className="bg-[#4a7c2c] hover:bg-[#5a9c3c] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:-translate-y-1 shadow-lg w-full sm:w-auto"
            >
              Zjistit více
            </button>
            <a
              href="https://gov.cz/e-petice/1569-petice-proti-opakovane-cerne-skladce-a-nelegalnimu-znecistovani-lesniho-pozemku-v-lokalite-v-kozovech-u-kladna"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#e67e22] hover:bg-[#d35400] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all transform hover:-translate-y-1 shadow-lg inline-block w-full sm:w-auto text-center"
            >
              Podepsat petici
            </a>
          </div>
        </div>
      </section>

      {/* ... zbytek souboru nechávám stejný jako v paste.txt ... */}
      {/* O problému */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            Co se děje v lese u Kožovky na Kladně?
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-4">
              <p className="text-lg font-medium text-gray-700">
                Lesní pozemek ve vlastnictví <strong>Benediktinského arciopatství sv. Vojtěcha a sv. Markéty v Praze</strong>,
                v lokalitě <strong>V Kožovech u Kladna</strong> ve směru na Kožovu horu, čelí vážnému a opakujícímu se problému.
              </p>
              <p className="text-gray-600">
                <strong>Muž bez domova, který se zde dlouhodobě zdržuje, v lese soustavně hromadí odpadky a igelitové tašky a zakládá
                černou skládku.</strong>{' '}
                Pozemek byl opakovaně vyčištěn za přítomnosti městských strážníků i odpadové firmy —{' '}
                <strong>bezdomovec se však vždy vrátí a vše opakuje od začátku.</strong> Situace ohrožuje místní faunu, kontaminuje
                lesní půdu a představuje riziko požáru v bezprostřední blízkosti obytné zástavby.
              </p>
              <p className="text-gray-600">
                <strong>V sobotu 12. dubna 2025 ráno v lokalitě skutečně vypukl požár.</strong> Hasiči Středočeského kraje zasahovali
                přímo v lesním porostu — hořely hromady odpadků a igelitu nashromážděné bezdomovcem. Na místo byli přivoláni i policisté.
                Podle mluvčího středočeských hasičů Ladislava Holomka{' '}
                <strong>"požár zřejmě založil sám muž, který se v lokalitě dlouhodobě zdržuje."</strong>
              </p>
              <p className="text-gray-600">
                Přestože situaci opakovaně řeší městská policie, Policie ČR i smluvní odpadová firma, žádná ze zúčastněných institucí
                dosud nepřijala systémové opatření. <strong>Les hoří doslova i přeneseně a nikdo nenese odpovědnost.</strong>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={forestWasteImage}
                alt="Znečištěný les se skládkou odpadků"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl col-span-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Recycle, title: 'Opakované úklidy', desc: 'Pozemek vyčištěn opakovaně — problém se ale vždy vrací' },
              { icon: Flame, title: '1 požár', desc: 'Zaznamenaný požár na pozemku v roce 2025' },
              { icon: Ruler, title: '12 750 m²', desc: 'Odhadovaná rozloha zasažené oblasti' },
              { icon: Footprints, title: 'Ohrožená zvěř', desc: 'Divoká prasata, srnci, drobní savci' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-transform text-center">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-[#4a7c2c]" />
                <h4 className="text-xl font-semibold text-[#2d5016] mb-2">{item.title}</h4>
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
                  <h4 className="text-xl font-bold mb-2">Informace o pozemku</h4>
                  <p className="mb-4 opacity-90">
                    Dotčený pozemek je veden v katastru nemovitostí. Veškeré informace o vlastnictví, výměře a hranicích pozemku jsou
                    veřejně dostupné.
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
                        Parcela č. <strong>3830/4</strong>, k.ú. <strong>Kročehlavy (665126)</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Podporovatelé */}
      <section id="supporters" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#2d5016] mb-8 relative pb-4">
            Podporují nás
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <a
              href="https://www.slavojkladno.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
            >
              <img src="/slavoj.png" alt="FK Slavoj Kladno logo" className="w-32 h-32 object-contain" />
              <h4 className="text-xl font-bold text-[#2d5016] text-center">FK Slavoj Kladno</h4>
            </a>

            <a
              href="https://www.e-kladensko.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
            >
              <img src="/ekladensko.png" alt="e-Kladensko.cz logo" className="w-32 h-32 object-contain" />
              <h4 className="text-xl font-bold text-[#2d5016] text-center">e-Kladensko.cz</h4>
            </a>

            <a
              href="https://www.uklidmecesko.cz/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col items-center gap-4 w-full sm:w-auto sm:min-w-[250px] max-w-xs"
            >
              <img src="/uklidme.png" alt="Ukliďme Česko logo" className="w-32 h-32 object-contain" />
              <h4 className="text-xl font-bold text-[#2d5016] text-center">Ukliďme Česko</h4>
            </a>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-16 relative pb-4">
            Historie problému
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="space-y-12">
            {[
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
                desc: 'V sobotu ráno v lesním porostu v lokalitě V Kožovech <strong>vypukl požár.</strong> Zasahují hasiči Středočeského kraje. Hořely hromady odpadků a igelitových tašek nashromážděné mužem bez domova. Na místo dorazili i policisté. <strong>Mluvčí středočeských hasičů Ladislav Holomk potvrdil, že "požár zřejmě založil sám muž"</strong> dlouhodobě žijící v lokalitě. Případ zachytila média (kladensky.denik.cz, nasekladno.cz, silvarium.cz).',
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
              }
            ].map((item, idx) => (
              <div key={idx} className="relative flex items-start gap-8">
                {/* Timeline line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#4a7c2c] -translate-x-1/2" />
                
                <div className={`relative flex items-center gap-8 w-full ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-[#2d5016] font-semibold mb-2">{item.date}</div>
                      <h5 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h5>
                      <p className="text-gray-600" dangerouslySetInnerHTML={{ __html: item.desc }} />
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
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            Fotodokumentace
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-gradient-to-br from-[#2d5016] to-[#4a7c2c] p-8 rounded-lg shadow-xl text-white mb-8">
              <Image className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Kompletní fotodokumentace problému</h3>
              <p className="text-lg mb-6 opacity-90">
                Veškerá fotodokumentace (černá skládka, nelegální pobyt, požár a úklidové akce) je volně dostupná na Google Disku. Fotografie dokumentují závažnost situace a jsou k dispozici pro média, úřady i veřejnost.
              </p>
              <a 
                href="https://drive.google.com/drive/folders/1mgzH9geW9sDTxL8pHUWVcPxMysPE5i?usp=sharing" 
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

          {/* YouTube Shorts videa */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-center text-[#2d5016] mb-8">Videodokumentace</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Video 1 */}
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="relative pb-[177.78%]"> {/* 16:9 aspect ratio for Shorts (9:16 inverted) = 177.78% */}
                  <iframe 
                    src="https://www.youtube.com/embed/eVpM2Ox7lnY" 
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              {/* Video 2 */}
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                <div className="relative pb-[177.78%]">
                  <iframe 
                    src="https://www.youtube.com/embed/wNOZnW988Rc" 
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* V médiích o nás */}
      <section id="media" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            V médiích o problému
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>
          
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            O problému černé skládky u Kladna již informovala řada médií. Přinášíme přehled článků, které dokumentují závažnost situace a upozorňují veřejnost na trvající problém.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'U kladenského poustevníka zasahovala úklidová četa. Pod dohledem strážníků',
                media: 'Kladenský deník',
                date: '13. prosince 2022',
                excerpt: 'V prosinci 2022 proběhl v kladenském lese rozsáhlý úklid nepořádku, který tam dlouhodobě hromadil muž bez domova. Pracovníci úklidové firmy museli za asistence městských strážníků z pozemku odvézt dva velkokapacitní kontejnery plné odpadu, staré elektroniky a dokonce i uhynulých zvířat.',
                url: 'https://kladensky.denik.cz/zpravy_region/u-kladenskeho-poustevnika-zasahovala-uklidova-ceta-pod-dohledem-strazniku-202212.html'
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
                date: '12. dubna 2025',
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
                title: 'Bezdomovce u Kožovky vyklízela odpadová firma i strážníci',
                media: 'KM Zprávy',
                date: '7. ledna 2026',
                excerpt: 'V úterý 7. ledna přijela k lesu u Kožovky odpadová firma AVE Kladno s bikramovou vanou. Strážníci zajišťovali pořádek při úklidu. Během dopoledne bylo vše uklizeno a odvezeno. Muži byla opět nabídnuta pomoc — opět odmítnuta.',
                url: 'https://kmzpravy.cz/bezdomovce-u-kozovky-vyklizela-odpadova-firma-i-straznici/'
              },
              {
                title: 'Strážníci prováděli dohled při úklidu lesa v Kožovech',
                media: 'Městská policie Kladno',
                date: '7. ledna 2026',
                excerpt: 'Strážníci Městské policie Kladno zajišťovali pořádek a dohled při úklidu lesa v lokalitě Kožovy. Akce probíhala ve spolupráci s odpadovou firmou AVE Kladno. Muži žijícímu na pozemku byla opakovaně nabídnuta sociální pomoc.',
                url: 'https://mpkladno.cz/straznici-provadeli-dohled-pri-uklidu-lesa-v-kozovech/d-1709'
              },
              {
                title: 'Kladenští strážníci zasahovali proti bezdomovci, který znečišťoval les',
                media: 'e-kladensko.cz',
                date: 'Leden 2026',
                excerpt: 'Městská policie Kladno opakovaně zasahuje v lese u Kožovky. Bezdomovec se zde dlouhodobě zdržuje a hromadí odpadky. Strážníci musí zajišťovat pořádek při úklidu, muž se fyzicky brání.',
                url: 'https://www.e-kladensko.cz/zpravy/1607-kladensti-straznici-zasahovali-proti-bezdomovci-ktery-znecistoval-les'
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
              }
            ].map((article, idx) => (
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
                <h5 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[#2d5016] transition-colors">
                  {article.title}
                </h5>
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
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            Kdo je zodpovědný a kdo trpí?
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map((actor, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:-translate-y-2 transition-all text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#4a7c2c] rounded-full flex items-center justify-center">
                  <actor.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-bold text-[#2d5016] mb-2">{actor.title}</h4>
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
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            Naše požadavky
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Zapojení sociálního kurátora města Kladno',
                desc: 'Pro práci s bezdomovcem a nabídku sociálních služeb, které by pomohly řešit příčinu problému humánně a efektivně.'
              },
              {
                title: 'Zvýšení frekvence policejních kontrol',
                desc: 'Minimálně 1x týdně na daném pozemku, aby se předešlo opakování problému a zajistila prevence.'
              },
              {
                title: 'Zahájení správního řízení (OŽP ORP Kladno)',
                desc: 'O černé skládce podle zákona č. 541/2020 Sb., o odpadech, s identifikací viníka a uložením sankcí.'
              },
              {
                title: 'Podnět ČIŽP k šetření opakovaného porušování',
                desc: 'České inspekci životního prostředí k prošetření dlouhodobého porušování zákona o odpadech.'
              },
              {
                title: 'Oplocení nebo technické zabezpečení pozemku',
                desc: 'Vlastník (Břevnovský klášter) by měl přijmout preventivní opatření k ochraně svého majetku a prevenci znečištění.'
              },
              {
                title: 'Prošetření požáru Hasičským záchranným sborem',
                desc: 'Hasičský záchranný sbor Středočeského kraje by měl vyšetřit příčinu požáru a zveřejnit výsledky.'
              },
              {
                title: 'Veřejná zpráva o výsledcích ze strany Magistrátu',
                desc: 'Město Kladno by mělo zveřejnit souhrnnou zprávu o přijatých opatřeních a plánovaných krocích k trvalému řešení.'
              },
              {
                title: 'Další preventivní a systémová opatření',
                desc: 'Přijetí konkrétních kroků k trvalému zamezení opakování situace (například instalace fotopastí nebo kamerového monitoringu pro identifikaci původců znečišťování, fyzické zábrany proti navezení odpadu do lokality (závory, kládové prahy, kameny na výjezdech), výrazné zákazové tabule a označení zákazu rozdělávání ohně, zavedení závazné lhůty pro rychlý úklid (max. 7–14 dnů od nahlášení) s jasně určeným odpovědným kontaktem na straně vlastníka i města, a vytvoření veřejného kontaktního kanálu pro hlášení incidentů s průběžnou mapou událostí). Veškerá tato opatření by měla být zakotvena v písemné dohodě mezi vlastníkem pozemku (Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze) a Magistrátem města Kladna.'
              }
            ].map((demand, idx) => (
              <div key={idx} className="flex gap-6 items-start bg-white p-6 rounded-lg shadow-lg hover:translate-x-2 transition-transform">
                <div className="w-12 h-12 flex-shrink-0 bg-[#4a7c2c] rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {idx + 1}
                </div>
                <div>
                  <h5 className="text-lg font-bold text-[#2d5016] mb-2">{demand.title}</h5>
                  <p className="text-gray-600">{demand.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Žádosti o informace */}
      <section id="documents" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            Žádosti o informace
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>
          
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            V rámci snahy o transparentní řešení problému byly podány žádosti o poskytnutí informací podle ust. § 13 zákona č. 106/1999 Sb., o svobodném přístupu k informacím, ve znění pozdějších předpisů. Níže naleznete kompletní znění všech žádostí v PDF formátu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                title: 'Hasičský záchranný sbor Středočeského kraje',
                icon: Flame,
                desc: 'Žádost o informace týkající se požáru ze dne 12. dubna 2025, příčiny vzniku, rozsahu škod a výsledků šetření.',
                url: 'https://drive.google.com/file/d/1rNEq-7EsfFR3wjv0rL6Pj3lyl3V2M8uF/view?usp=drive_link',
                date: 'Únor 2026'
              },
              {
                title: 'Statutární město Kladno',
                icon: Building2,
                desc: 'Žádost o informace k úklidovým akcím, nákladům, frekvenci zásahů městské policie a nabízeným sociálním službám.',
                url: 'https://drive.google.com/file/d/19rEBCOkAPcoZChlBINUAtuo5diqUFA7/view?usp=drive_link',
                date: 'Únor 2026'
              },
              {
                title: 'Krajské ředitelství policie Středočeského kraje',
                icon: Shield,
                desc: 'Žádost o informace týkající se zásahů Policie ČR, vedených případů a přijatých opatření v dané lokalitě.',
                url: 'https://drive.google.com/file/d/1Sss8BZJHo8zKADdXz94VOCY3pVAa7uvs/view?usp=drive_link',
                date: 'Únor 2026'
              },
              {
                title: 'Česká inspekce životního prostředí',
                icon: Leaf,
                desc: 'Žádost o informace k šetřením černé skládky, provedeným kontrolám a případným správním řízením.',
                url: 'https://drive.google.com/file/d/1P902hUw2GKqz6Yao0N70l4aVxUyLgLR/view?usp=drive_link',
                date: 'Únor 2026'
              },
              {
                title: 'Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze',
                icon: Church,
                desc: 'Žádost o součinnost a koordinaci řešení opakované černé skládky a nelegálního pobytu na lesním pozemku v lokalitě "V Kožovech" u Kladna',
                url: 'https://drive.google.com/file/d/1ZUghYdbeRKjbJS-fgO7xm2NmW4e04kc/view?usp=drive_link',
                date: 'Únor 2026'
              }
            ].map((doc, idx) => (
              <a 
                key={idx}
                href={doc.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-[#4a7c2c] rounded-full flex items-center justify-center">
                    <doc.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[#2d5016] transition-colors">
                      {doc.title}
                    </h5>
                    <p className="text-xs text-gray-500">{doc.date}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#4a7c2c] transition-colors" />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {doc.desc}
                </p>
                <div className="flex items-center gap-2 text-[#4a7c2c] text-sm font-semibold group-hover:underline">
                  <Download className="w-4 h-4" />
                  Stáhnout PDF dokument
                </div>
              </a>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#2d5016] to-[#4a7c2c] p-8 rounded-lg shadow-xl text-white">
            <div className="flex items-start gap-4">
              <Gavel className="w-8 h-8 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-xl font-bold mb-3">Právní základ žádostí</h4>
                <p className="mb-4 opacity-90 leading-relaxed">
                  Všechny žádosti, vyjma žádosti určené vlastníkovi pozemku, byly podány v souladu se <strong>zákonem č. 106/1999 Sb., o svobodném přístupu k informacím, ve znění pozdějších předpisů.</strong> Tento zákon zaručuje právo každého občana požadovat informace od státních orgánů a orgánů územní samosprávy.
                </p>
                <p className="text-sm opacity-80">
                  Povinné subjekty mají zákonnou lhůtu <strong>15 dnů</strong> na poskytnutí informací nebo odůvodnění odmítnutí. Odpovědi budeme průběžně zveřejňovat na tomto webu.
                </p>
              </div>
            </div>
          </div>
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
            href="https://gov.cz/e-petice/1569-petice-proti-opakovane-cerne-skladce-a-nelegalnimu-znecistovani-lesniho-pozemku-v-lokalite-v-kozovech-u-kladna"
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
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            Kontakt a organizátoři
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
                <h4 className="text-2xl font-bold text-[#2d5016] mb-6">Kontaktní informace</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-[#4a7c2c] flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-800">Organizátor</strong>
                      Ing. Dominik Žlebek, LL.M.
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#4a7c2c] flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-800">E-mail pro média a úřady</strong>
                      <a href="mailto:info@leskozovka.cz" className="text-[#4a7c2c] hover:underline">info@leskozovka.cz</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#4a7c2c] flex-shrink-0 mt-1" />
                    <div>
                      <strong className="block text-gray-800">Lokace problému</strong>
                      Parcela č. 3830/4 k.ú. Kročehlavy (665126)<br/>
                      Vlastník: Benediktinské arciopatství sv. Vojtěcha a sv. Markéty v Praze
                    </div>
                  </div>
                </div>

                <h5 className="text-xl font-bold text-[#2d5016] mt-8 mb-4">Sledujte nás</h5>
                <div className="flex gap-3">
                  {[
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
              <h4 className="text-2xl font-bold text-[#2d5016] mb-4">Kde se problém nachází</h4>
              <div className="rounded-lg overflow-hidden shadow-xl h-[400px]">
                <iframe 
                  src="https://maps.google.com/maps?q=50.1262367,14.1089158&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full border-0" 
                  allowFullScreen 
                  loading="lazy"
                ></iframe>
              </div>
              <p className="text-center text-gray-500 text-sm mt-2">GPS souřadnice: 50.1262367N, 14.1089158E</p>
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
            {[
              { label: 'O webu', onClick: () => scrollToSection('home') },
              { label: 'Kontakt', onClick: () => scrollToSection('contact') }
            ].map((link, idx) => (
              <button 
                key={idx}
                onClick={link.onClick}
                className="hover:text-[#a8d08d] transition-colors"
              >
                {link.label}
              </button>
            ))}
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
          href="https://gov.cz/e-petice/1569-petice-proti-opakovane-cerne-skladce-a-nelegalnimu-znecistovani-lesniho-pozemku-v-lokalite-v-kozovech-u-kladna"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-16 h-16 bg-[#e67e22] hover:bg-[#d35400] rounded-full shadow-2xl flex flex-col items-center justify-center text-white transition-all transform hover:scale-110 z-50 text-[xs] font-semibold"
        >
          <PenLine className="w-6 h-6 mb-1" />
          Petice
        </a>
      )}
    </div>
  );
}
