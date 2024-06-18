alter table "public"."balances" alter column "cash_amount_available" drop default;

alter table "public"."balances" alter column "cash_amount_available" drop not null;

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.set_default_amounts()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$BEGIN
    IF NEW.cash_amount_available IS NULL THEN
        NEW.cash_amount_available := (
            SELECT cash_amount_available
            FROM public.balances
            ORDER BY balances_id DESC
            LIMIT 1
        );
    END IF;
    
    IF NEW.debit_amount_available IS NULL THEN
        NEW.debit_amount_available := (
            SELECT debit_amount_available
            FROM public.balances
            ORDER BY balances_id DESC
            LIMIT 1
        );
    END IF;
    
    RETURN NEW;
END;$function$
;

CREATE TRIGGER before_insert_amounts BEFORE INSERT ON public.balances FOR EACH ROW EXECUTE FUNCTION set_default_amounts();


