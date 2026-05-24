
create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text,
  programme text,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Public can insert (contact form)
create policy "Anyone can submit a contact form"
on public.contact_submissions
for insert
to anon, authenticated
with check (true);

-- No select policy => nobody can read via the API (only via backend dashboard)
