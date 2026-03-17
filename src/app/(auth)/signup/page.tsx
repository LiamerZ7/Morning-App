import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function SignupPage() {
  return (
    <main className="flex items-center">
      <Card className="w-full space-y-4">
        <h1 className="text-xl font-semibold">Create your Morning Brain account</h1>
        <p className="text-sm text-ink/60">Stub auth screen (email/password + OAuth to be wired).</p>
        <input className="w-full rounded-xl border border-ink/10 p-3 text-sm" placeholder="Email" />
        <input
          className="w-full rounded-xl border border-ink/10 p-3 text-sm"
          type="password"
          placeholder="Password"
        />
        <Button>Create account</Button>
        <p className="text-sm text-ink/60">
          Already signed up?{' '}
          <Link className="font-medium text-ink" href="/login">
            Log in
          </Link>
        </p>
      </Card>
    </main>
  );
}
