-- Morning Brain Supabase MVP schema suggestions
-- Uses auth.users as source of truth for authentication.

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  timezone text default 'UTC',
  created_at timestamptz not null default now()
);

create table if not exists public.morning_sessions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  session_date date not null,
  dont_scroll_confirmed boolean default false,
  urge_pause_completed boolean default false,
  breathing_completed boolean default false,
  journal_completed boolean default false,
  one_thing_set boolean default false,
  reminders_completed boolean default false,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (user_id, session_date)
);

create table if not exists public.journal_entries (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  morning_session_id uuid references public.morning_sessions(id) on delete set null,
  context text not null check (context in ('morning', 'night')),
  prompt text,
  entry text not null,
  created_at timestamptz not null default now()
);

create table if not exists public.one_things (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  target_date date not null,
  content text not null,
  completed boolean default false,
  created_at timestamptz not null default now(),
  unique (user_id, target_date)
);

create table if not exists public.urge_rescue_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  trigger_type text not null check (trigger_type in ('scroll', 'anxious', 'overstimulated', 'avoidance', 'stimulation')),
  intervention_type text not null,
  duration_seconds int not null,
  completed boolean default false,
  occurred_at timestamptz not null default now()
);

create table if not exists public.night_resets (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  reset_date date not null,
  brain_dump text,
  tomorrow_priority text,
  small_win text,
  audio_used boolean default false,
  sleep_timer_minutes int,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  unique (user_id, reset_date)
);

create table if not exists public.user_settings (
  user_id uuid primary key references public.users(id) on delete cascade,
  notifications_enabled boolean default true,
  morning_reminder_time time default '07:00:00',
  evening_reminder_time time default '21:30:00',
  audio_enabled boolean default true,
  theme text default 'system' check (theme in ('light', 'dark', 'system')),
  updated_at timestamptz not null default now()
);

-- Use a view for habit summaries so streaks stay derived and always accurate.
create or replace view public.habit_summaries as
select
  u.id as user_id,
  count(ms.*) filter (where ms.completed_at is not null) as mornings_completed,
  count(nr.*) filter (where nr.completed_at is not null) as night_resets_completed,
  count(ure.*) as rescue_events_total
from public.users u
left join public.morning_sessions ms on ms.user_id = u.id
left join public.night_resets nr on nr.user_id = u.id
left join public.urge_rescue_events ure on ure.user_id = u.id
group by u.id;
