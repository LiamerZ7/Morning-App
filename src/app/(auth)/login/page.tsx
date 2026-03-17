import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <main className="flex items-center">
      <Card className="w-full space-y-4">
        <h1 className="text-xl font-semibold">Welcome back</h1>
        <p className="text-sm text-ink/60">Auth wiring is next-phase.</p>
        <input className="w-full rounded-xl border border-ink/10 p-3 text-sm" placeholder="Email" />
        <input
          className="w-full rounded-xl border border-ink/10 p-3 text-sm"
          type="password"
          placeholder="Password"
        />
        <Button>Sign in</Button>
        <p className="text-sm text-ink/60">
          No account?{' '}
          <Link className="font-medium text-ink" href="/signup">
            Create one
          </Link>
        </p>
      </Card>
    </main>
  );
}
