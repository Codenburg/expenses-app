import { Balance } from "@/types/Balance";
import { supabase } from "db/supabase";

export const getLatestBalances = async (): Promise<
  Record<string, string>
> => {
  const { data: balances, error } = await supabase
    .from("balances")
    .select(`cash_amount_available, debit_amount_available`)
    .order("balance_id", { ascending: false })
    .limit(1).returns<Balance[]>();
  if (error) {
    console.log("BALANCES GET ERROR:", error);
    return {};
  }
  const balancesObj: Record<string, string> = {
    cash_amount_available: balances[0].cash_amount_available,
    debit_amount_available: balances[0].debit_amount_available,
  };
  return balancesObj;
};
