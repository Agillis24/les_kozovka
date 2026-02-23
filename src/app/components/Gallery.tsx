import { useState } from 'react';
import { Eye, X, ChevronDown } from 'lucide-react';
import { galleryImages, galleryImagesFullsize } from './GalleryData';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const [showGalleryModal, setShowGalleryModal] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const previewImages = galleryImages.slice(0, 9); // První 9 fotek pro náhled
  const totalImages = galleryImages.length;

  return (
    <>
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4">
            Důkazy na vlastní oči
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full" />
          </h2>

          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Fotodokumentace znečištění, opakovaných úklidů a následků na přírodě. Klikněte na fotografii pro větší náhled nebo zobrazte celou galerii se všemi fotografiemi.
          </p>

          {/* Preview Grid - prvních 9 fotografií */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {previewImages.map((img, idx) => (
              <div 
                key={idx} 
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setLightboxIndex(idx)}
              >
                <ImageWithFallback src={img.src} alt={img.caption} className="w-full h-64 object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-medium">{img.caption}</p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <Eye className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <button 
              onClick={() => setShowGalleryModal(true)}
              className="inline-flex items-center gap-2 bg-[#4a7c2c] hover:bg-[#5a9c3c] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg transform hover:-translate-y-1"
            >
              <Eye className="w-5 h-5" />
              Zobrazit celou galerii ({totalImages} fotografií)
            </button>
          </div>

          <div className="max-w-4xl mx-auto">
            <h4 className="text-2xl font-bold text-center mb-6">Video dokumentace</h4>
            <p className="text-center text-gray-600 mb-8">
              Záběry zachycující aktuální stav černé skládky a opakované úklidy v lese u Kožovky.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/eVpM2Ox7lnY"
                    title="Černá skládka v lese u Kožovky - 29.3.2024"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                <p className="text-center text-gray-700 text-sm mt-3 font-medium">
                  🚨 Černá skládka v lese u Kožovky (Kladno) – záběry z místa | 29. 3. 2024
                </p>
              </div>
              <div>
                <div className="aspect-[9/16] rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    src="https://www.youtube.com/embed/wNOZnW988Rc"
                    title="Černá skládka v lese u Kožovky - 22.2.2026"
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                <p className="text-center text-gray-700 text-sm mt-3 font-medium">
                  🚨 Černá skládka v lese u Kožovky (Kladno) – záběry z místa | 22. 02. 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Modal - všechny fotografie */}
      {showGalleryModal && (
        <div className="fixed inset-0 bg-black/95 z-[100] overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center justify-between mb-8 sticky top-0 bg-black/50 backdrop-blur-sm p-4 rounded-lg z-10">
                <h3 className="text-2xl font-bold text-white">Kompletní fotogalerie</h3>
                <button
                  onClick={() => setShowGalleryModal(false)}
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryImages.map((img, idx) => (
                  <div 
                    key={idx}
                    className="relative group overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setLightboxIndex(idx)}
                  >
                    <ImageWithFallback src={img.src} alt={img.caption} className="w-full h-48 object-cover" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                      <p className="text-white text-xs font-medium line-clamp-2">{img.caption}</p>
                    </div>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                      <Eye className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setShowGalleryModal(false)}
                  className="bg-[#4a7c2c] hover:bg-[#5a9c3c] text-white px-8 py-3 rounded-full font-semibold transition-all shadow-lg"
                >
                  Zavřít galerii
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox - detail fotografie */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/98 z-[110] flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => setLightboxIndex((lightboxIndex - 1 + totalImages) % totalImages)}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
          >
            <ChevronDown className="w-6 h-6 rotate-90" />
          </button>

          <button
            onClick={() => setLightboxIndex((lightboxIndex + 1) % totalImages)}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
          >
            <ChevronDown className="w-6 h-6 -rotate-90" />
          </button>

          <div className="max-w-6xl w-full">
            <ImageWithFallback
              src={galleryImagesFullsize[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].caption}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg mt-4">
              <p className="text-white text-center font-medium">
                {galleryImages[lightboxIndex].caption}
              </p>
              <p className="text-white/60 text-center text-sm mt-1">
                Fotografie {lightboxIndex + 1} z {totalImages}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}