alter table "public"."balances" drop constraint "balances_pkey";

drop index if exists "public"."balances_pkey";

alter table "public"."balances" drop column "balances_id";

alter table "public"."balances" add column "balance_id" bigint generated by default as identity not null;

CREATE UNIQUE INDEX balances_pkey ON public.balances USING btree (balance_id);

alter table "public"."balances" add constraint "balances_pkey" PRIMARY KEY using index "balances_pkey";


