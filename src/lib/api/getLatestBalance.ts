import { Balance } from "@/types/Balance";
import { supabase } from "../../../db/supabase";

export const getLatestBalances = async (): Promise<
  Record<string, Partial<Balance>>
> => {
  const { data: balances, error } = await supabase
    .from("balances")
    .select(`balance_id, cash_amount_available, debit_amount_available`)
    .order("balance_id", { ascending: false })
    .limit(1).returns<Balance[]>();
  if (error) {
    console.log("BALANCES GET ERROR:", error);
    return {};
  }
  const balancesMap = balances.reduce((acc, balance) => {
    acc[balance.balance_id] = {
      cash_amount_available: balance.cash_amount_available,
      debit_amount_available: balance.debit_amount_available,
    };
    return acc;
  }, {} as Record<string, Partial<Balance>>);
  return balancesMap;
};
