import { AppHeader } from '@/components/layout/app-header';
import { PageTitle } from '@/components/layout/page-title';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { urgeOptions } from '@/lib/mock-data';

export default function UrgeRescuePage() {
  return (
    <main>
      <AppHeader />
      <PageTitle title="Urge Rescue" subtitle="Fast interventions for high-risk moments." />
      <div className="grid gap-3">
        {urgeOptions.map((option) => (
          <Card key={option.id} className="space-y-2">
            <h2 className="text-base font-semibold">{option.label}</h2>
            <p className="text-sm text-ink/60">
              {option.tool} · {option.seconds} sec
            </p>
            <Button>Launch intervention (mock)</Button>
          </Card>
        ))}
      </div>
    </main>
  );
}
