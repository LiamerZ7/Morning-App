import type { PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

export function Card({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={cn('rounded-3xl border border-ink/10 bg-white p-4 shadow-soft', className)}>
      {children}
    </section>
  );
}
