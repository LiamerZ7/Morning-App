import { AppHeader } from '@/components/layout/app-header';
import { PageTitle } from '@/components/layout/page-title';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { morningFlow } from '@/lib/mock-data';

export default function MorningPage() {
  return (
    <main>
      <AppHeader />
      <PageTitle title="Morning Reset" subtitle="Protect your first hour and set direction." />
      <Card className="space-y-3">
        <p className="rounded-xl bg-calm px-3 py-2 text-sm font-medium">Don’t scroll yet. Start the protocol.</p>
        <ul className="space-y-2 text-sm text-ink/70">
          {morningFlow.map((step, idx) => (
            <li key={step}>
              {idx + 1}. {step}
            </li>
          ))}
        </ul>
        <Button>Start 90-second urge pause</Button>
        <Button variant="ghost">Mark morning flow complete (mock)</Button>
      </Card>
    </main>
  );
}
