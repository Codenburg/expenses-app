alter table "public"."balances" alter column "cash_amount_available" set default '0'::bigint;

alter table "public"."balances" alter column "debit_amount_available" set default '0'::bigint;


