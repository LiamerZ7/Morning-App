# Morning Brain (MVP)

Morning Brain is a mobile-first brain-state app focused on dopamine regulation, attention control, urge management, and nightly shutdown.

## What is built

- Landing page with clear value proposition and CTA.
- Auth stubs (`/login`, `/signup`) ready for Supabase Auth wiring.
- Dashboard with key daily status snapshots.
- Morning Reset flow page with first-hour protocol.
- Urge Rescue flow page with fast intervention launch cards.
- Night Reset flow page for simple evening shutdown.
- Insights page with lightweight mock analytics.
- Settings page with reminder/audio/preferences placeholders.
- Suggested Supabase SQL schema in `supabase/schema.sql`.

## MVP status

### Implemented now

- Full route structure and reusable UI components.
- Mock data layer so app runs immediately without backend setup.
- Tailwind-based minimal premium visual language.

### Stubbed / mocked / next-phase

- Supabase auth integration (forms are placeholders).
- Persisting flow completion, rescue events, and settings.
- Real streak calculation and real analytics charts.
- Notification scheduling.
- Audio wind-down player and active sleep timer behavior.

## Tech stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Supabase client package (schema + future integration scaffolding)

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run dev server:

   ```bash
   npm run dev
   ```

3. Open:

   ```
   http://localhost:3000
   ```

## Environment variables

Create `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

The app runs without these values using mock data. Supabase client is safely nullable until configured.

## Suggested next steps

1. Wire `/login` and `/signup` to Supabase auth.
2. Add server actions/route handlers for morning, rescue, and night submissions.
3. Apply Row Level Security (RLS) policies for all user-owned tables.
4. Replace mock insights with SQL-backed aggregates from `habit_summaries`.
5. Add onboarding to set reminder times and baseline goals.

## Vercel deployment

- Push repo to GitHub.
- Import into Vercel.
- Add the same environment variables in project settings.
- Deploy (defaults are Vercel-ready).
