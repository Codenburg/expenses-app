create type "public"."balances_methods" as enum ('debito', 'efectivo');

alter table "public"."balances" add column "balances_methods" balances_methods default 'efectivo'::balances_methods;

alter table "public"."categories" alter column "category_name" set default ''::text;

create policy "Enable read access for all users"
on "public"."balances"
as permissive
for select
to public
using (true);


create policy "Enable read access for all users"
on "public"."categories"
as permissive
for select
to public
using (true);



