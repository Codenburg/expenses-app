alter table "public"."balances" drop column "balances_methods";

alter table "public"."balances" add column "cash_amount_available" bigint not null default '0'::bigint;

alter table "public"."balances" add column "debit_amount_available" bigint not null;


