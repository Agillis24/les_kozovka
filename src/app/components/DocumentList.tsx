import { useState } from 'react';
import { ExternalLink, FileText } from 'lucide-react';
import type { DocumentItem } from '../content';

/** Od kolika dokumentů se starší položky sbalí. */
const COLLAPSE_FROM = 9;
/** Kolik nejnovějších dokumentů zůstane vidět ve sbaleném stavu. */
const VISIBLE_WHEN_COLLAPSED = 6;

interface DocumentListProps {
  documents: DocumentItem[];
}

/**
 * Seznam odkazů na dokumenty. Dlouhé seznamy ukazují jen nejnovější položky
 * a starší schovají pod tlačítko. Skryté odkazy zůstávají v HTML, takže je
 * vyhledávače vidí.
 */
export function DocumentList({ documents }: DocumentListProps) {
  const [expanded, setExpanded] = useState(false);
  const collapsible = documents.length >= COLLAPSE_FROM;
  const hiddenCount = collapsible ? documents.length - VISIBLE_WHEN_COLLAPSED : 0;

  return (
    <div className="space-y-2">
      {collapsible && (
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="w-full py-2 rounded-lg border border-dashed border-[#4a7c2c]/40 text-sm font-semibold text-[#4a7c2c] hover:bg-[#f0f7eb] hover:text-[#2d5016] transition-colors"
        >
          {expanded ? 'Skrýt starší dokumenty' : `Zobrazit starší dokumenty (${hiddenCount})`}
        </button>
      )}
      {documents.map((doc, idx) => (
        <a
          key={doc.url}
          href={doc.url}
          target="_blank"
          rel="noopener noreferrer"
          hidden={collapsible && !expanded && idx < hiddenCount}
          className="flex items-center justify-between gap-3 p-3 rounded-lg bg-gray-50 hover:bg-[#f0f7eb] transition-colors group"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 flex-shrink-0 text-[#4a7c2c]" />
            <div>
              <p className="text-sm font-semibold text-gray-800 group-hover:text-[#2d5016]">{doc.name}</p>
              {doc.date && <p className="text-xs text-gray-500">{doc.date}</p>}
            </div>
          </div>
          <ExternalLink className="w-4 h-4 flex-shrink-0 text-gray-400 group-hover:text-[#4a7c2c] transition-colors" />
        </a>
      ))}
    </div>
  );
}
