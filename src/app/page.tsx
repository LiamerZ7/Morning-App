import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <main>
      <section className="space-y-4 pt-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">Morning Brain</p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight">
          Win the first hour. Own the rest of the day.
        </h1>
        <p className="text-base text-ink/70">
          Less scrolling. More focus. Better sleep. Morning Brain gives you fast brain-state resets for
          mornings, urges, and nights.
        </p>
        <div className="grid gap-2 sm:max-w-xs">
          <Link href="/morning">
            <Button>Get started</Button>
          </Link>
        </div>
      </section>

      <section className="mt-8 grid gap-3">
        {[
          ['Morning Reset', 'No scrolling. Guided sequence. One clear priority.'],
          ['Urge Rescue', '60–120 second interventions for stress, boredom, and avoidance.'],
          ['Night Reset', 'Clean shutdown that protects tomorrow’s focus.'],
        ].map(([title, copy]) => (
          <Card key={title}>
            <h2 className="text-base font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-ink/65">{copy}</p>
          </Card>
        ))}
      </section>

      <section className="mt-8">
        <Card>
          <h2 className="text-base font-semibold">How it works</h2>
          <ol className="mt-3 space-y-2 text-sm text-ink/70">
            <li>1. Start each morning with a no-scroll first hour protocol.</li>
            <li>2. Use Urge Rescue the second your attention starts drifting.</li>
            <li>3. Close each day with a 3-minute night shutdown.</li>
          </ol>
        </Card>
      </section>
    </main>
  );
}
