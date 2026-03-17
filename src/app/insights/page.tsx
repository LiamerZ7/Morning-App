import { AppHeader } from '@/components/layout/app-header';
import { PageTitle } from '@/components/layout/page-title';
import { Card } from '@/components/ui/card';
import { insightCards } from '@/lib/mock-data';

export default function InsightsPage() {
  return (
    <main>
      <AppHeader />
      <PageTitle title="Insights" subtitle="Lightweight analytics for your attention patterns." />
      <div className="grid gap-3 md:grid-cols-2">
        {insightCards.map((card) => (
          <Card key={card.label}>
            <p className="text-sm text-ink/60">{card.label}</p>
            <p className="mt-1 text-xl font-semibold">{card.value}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
