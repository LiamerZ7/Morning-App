import { AppHeader } from '@/components/layout/app-header';
import { PageTitle } from '@/components/layout/page-title';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function NightResetPage() {
  return (
    <main>
      <AppHeader />
      <PageTitle title="Night Reset" subtitle="End the day clean. Protect tomorrow's focus." />
      <Card className="space-y-3 text-sm">
        <textarea className="h-20 w-full rounded-xl border border-ink/10 p-3" placeholder="Brain dump" />
        <input className="w-full rounded-xl border border-ink/10 p-3" placeholder="Tomorrow’s main priority" />
        <input className="w-full rounded-xl border border-ink/10 p-3" placeholder="One small win from today" />
        <p className="text-ink/60">Audio wind-down and sleep timer are MVP placeholders.</p>
        <Button>Complete night reset (mock)</Button>
      </Card>
    </main>
  );
}
