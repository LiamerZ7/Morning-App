import { AppHeader } from '@/components/layout/app-header';
import { PageTitle } from '@/components/layout/page-title';
import { Card } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <main>
      <AppHeader />
      <PageTitle title="Settings" subtitle="Tune reminders, audio, and account preferences." />
      <Card className="space-y-3 text-sm">
        <label className="space-y-1">
          <span>Morning reminder time</span>
          <input type="time" className="w-full rounded-xl border border-ink/10 p-2" defaultValue="07:00" />
        </label>
        <label className="space-y-1">
          <span>Evening reminder time</span>
          <input type="time" className="w-full rounded-xl border border-ink/10 p-2" defaultValue="21:30" />
        </label>
        <label className="flex items-center justify-between rounded-xl border border-ink/10 p-3">
          <span>Notifications</span>
          <input type="checkbox" defaultChecked />
        </label>
        <label className="flex items-center justify-between rounded-xl border border-ink/10 p-3">
          <span>Audio guidance</span>
          <input type="checkbox" defaultChecked />
        </label>
        <label className="flex items-center justify-between rounded-xl border border-ink/10 p-3">
          <span>Dark mode (placeholder)</span>
          <input type="checkbox" />
        </label>
        <p className="text-ink/60">Account profile and billing links are next-phase stubs.</p>
      </Card>
    </main>
  );
}
