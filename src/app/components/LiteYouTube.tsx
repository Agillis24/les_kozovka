import { useState } from 'react';
import { Play } from 'lucide-react';

interface LiteYouTubeProps {
  id: string;
  title: string;
}

/**
 * Lehký náhled YouTube videa. Do kliknutí se načte jen obrázek náhledu,
 * teprve po kliknutí se vloží skutečný přehrávač (šetří ~1 MB skriptů na video).
 */
export function LiteYouTube({ id, title }: LiteYouTubeProps) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
        title={title}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      aria-label={`Přehrát video: ${title}`}
      className="relative w-full h-full bg-black group"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-16 h-16 rounded-full bg-[#e67e22] group-hover:bg-[#d35400] flex items-center justify-center shadow-2xl transition-colors">
          <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
        </span>
      </span>
    </button>
  );
}
