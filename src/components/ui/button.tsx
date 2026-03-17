import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'ghost' }
>;

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'w-full rounded-2xl px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-accent/30',
        variant === 'primary'
          ? 'bg-ink text-white hover:bg-ink/90'
          : 'border border-ink/10 bg-white text-ink hover:bg-mist',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
