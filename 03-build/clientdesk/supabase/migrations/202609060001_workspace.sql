-- An isolated teaching workspace is a small transactional document.
-- Domain entities retain explicit client/meeting/source IDs inside data.
create table if not exists public.workspaces (
 owner_id uuid primary key references auth.users(id) on delete cascade,
 data jsonb not null,
 version bigint not null default 1 check(version>0),
 updated_at timestamptz not null default now(),
 constraint workspace_shape check (
  jsonb_typeof(data)='object' and
  jsonb_typeof(data->'clients')='array' and
  jsonb_typeof(data->'meetings')='array' and
  jsonb_typeof(data->'events')='array' and
  jsonb_typeof(data->'tasks')='array' and
  octet_length(data::text)<1048576
 )
);
alter table public.workspaces enable row level security;
revoke all on public.workspaces from anon;
grant select,insert,update on public.workspaces to authenticated;
create policy workspace_read on public.workspaces for select to authenticated using(owner_id=(select auth.uid()));
create policy workspace_create on public.workspaces for insert to authenticated with check(owner_id=(select auth.uid()));
create policy workspace_update on public.workspaces for update to authenticated using(owner_id=(select auth.uid())) with check(owner_id=(select auth.uid()));
create function public.touch_workspace() returns trigger language plpgsql set search_path='' as $$
begin new.updated_at=now(); return new; end; $$;
create trigger touch_workspace before update on public.workspaces for each row execute function public.touch_workspace();
comment on table public.workspaces is 'Fictional course workspaces. One authenticated owner per document. Updates use version compare-and-swap.';
