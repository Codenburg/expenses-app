alter table "public"."expenses" alter column "amount" set default '0'::numeric;

alter table "public"."expenses" alter column "amount" set not null;


