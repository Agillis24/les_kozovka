import type { ReactNode } from 'react';
import { cn } from './ui/utils';

interface SectionHeadingProps {
  children: ReactNode;
  /** Doplňkové třídy, typicky spodní okraj (mb-12) nebo velikost písma. */
  className?: string;
}

/** Nadpis sekce se zelenou linkou pod textem. */
export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn('text-4xl font-bold text-center text-[#2d5016] mb-12 relative pb-4', className)}>
      {children}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#4a7c2c] rounded-full"
      />
    </h2>
  );
}
