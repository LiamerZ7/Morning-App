import Link from 'next/link';

const links = [
  ['Dashboard', '/dashboard'],
  ['Morning', '/morning'],
  ['Rescue', '/urge-rescue'],
  ['Night', '/night-reset'],
  ['Insights', '/insights'],
  ['Settings', '/settings'],
] as const;

export function AppHeader() {
  return (
    <header className="mb-6">
      <Link href="/" className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
        Morning Brain
      </Link>
      <nav className="mt-3 flex gap-2 overflow-x-auto pb-2">
        {links.map(([label, href]) => (
          <Link
            key={href}
            href={href}
            className="rounded-full border border-ink/10 bg-white px-3 py-1.5 text-xs font-medium text-ink/70"
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
