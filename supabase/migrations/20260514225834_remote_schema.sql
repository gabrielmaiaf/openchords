drop extension if exists "pg_net";


  create table "public"."song" (
    "id" uuid not null default gen_random_uuid(),
    "title" character varying not null,
    "created_at" timestamp with time zone not null default now(),
    "artist" character varying,
    "content" text not null,
    "language" character varying,
    "updated_at" timestamp with time zone not null default now(),
    "key" text
      );


alter table "public"."song" enable row level security;

CREATE UNIQUE INDEX song_pkey ON public.song USING btree (id);

alter table "public"."song" add constraint "song_pkey" PRIMARY KEY using index "song_pkey";

grant delete on table "public"."song" to "anon";

grant insert on table "public"."song" to "anon";

grant references on table "public"."song" to "anon";

grant select on table "public"."song" to "anon";

grant trigger on table "public"."song" to "anon";

grant truncate on table "public"."song" to "anon";

grant update on table "public"."song" to "anon";

grant delete on table "public"."song" to "authenticated";

grant insert on table "public"."song" to "authenticated";

grant references on table "public"."song" to "authenticated";

grant select on table "public"."song" to "authenticated";

grant trigger on table "public"."song" to "authenticated";

grant truncate on table "public"."song" to "authenticated";

grant update on table "public"."song" to "authenticated";

grant delete on table "public"."song" to "service_role";

grant insert on table "public"."song" to "service_role";

grant references on table "public"."song" to "service_role";

grant select on table "public"."song" to "service_role";

grant trigger on table "public"."song" to "service_role";

grant truncate on table "public"."song" to "service_role";

grant update on table "public"."song" to "service_role";


