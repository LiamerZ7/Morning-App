import { AppHeader } from '@/components/layout/app-header';
import { PageTitle } from '@/components/layout/page-title';
import { Card } from '@/components/ui/card';
import { dashboardStats } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <main>
      <AppHeader />
      <PageTitle title="Dashboard" subtitle="Your daily attention control board." />
      <div className="grid gap-3">
        <Card>
          <p className="text-sm text-ink/60">Current streak</p>
          <p className="text-3xl font-semibold">{dashboardStats.streak} days</p>
        </Card>
        <Card className="space-y-2 text-sm">
          <p>Morning status: {dashboardStats.morningStatus}</p>
          <p>Today&apos;s One Thing: {dashboardStats.oneThing}</p>
          <p>Rescue uses today: {dashboardStats.rescueUses}</p>
          <p>Night reset: {dashboardStats.nightStatus}</p>
          <p className="font-medium text-ink">Weekly trend: {dashboardStats.weeklyTrend}</p>
        </Card>
      </div>
    </main>
  );
}
