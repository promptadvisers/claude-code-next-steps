alter table public.workspaces drop constraint workspace_shape;
alter table public.workspaces add constraint workspace_shape check (
 jsonb_typeof(data)='object' and data ?& array['clients','meetings','events','tasks','created_at'] and
 jsonb_typeof(data->'clients')='array' and jsonb_typeof(data->'meetings')='array' and
 jsonb_typeof(data->'events')='array' and jsonb_typeof(data->'tasks')='array' and
 octet_length(data::text)<1048576
);
