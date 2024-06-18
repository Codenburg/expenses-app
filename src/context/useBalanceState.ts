import { supabase } from "../../db/supabase";
import { create } from "zustand";

interface Balance {
  balance_id: number;
  cash_amount_available: string | null;
  debit_amount_available: string | null;
}

interface BalanceStore {
  balances: Record<string, Partial<Balance>>;
  fetchBalances: () => Promise<void>;
}

const useBalanceState = create<BalanceStore>((set) => ({
  balances: {},
  fetchBalances: async () => {
    const balancesData = await fetchBalances();
    set({ balances: balancesData });
  },
}));

const fetchBalances = async (): Promise<Record<string, Partial<Balance>>> => {
  const { data: balances, error } = await supabase
    .from("balances")
    .select(`balance_id, cash_amount_available, debit_amount_available`)
    .order("balance_id", { ascending: false })
    .limit(1).returns<Balance[]>();
  if (error) {
    console.log("balances fetch error:", error);
    return {};
  }
  const balancesMap = balances.reduce((acc, balance) => {
    acc[balance.balance_id.toString()] = {
      cash_amount_available: balance.cash_amount_available,
      debit_amount_available: balance.debit_amount_available,
    };
    return acc;
  }, {} as Record<string, Partial<Balance>>);
  return balancesMap;
};

export default useBalanceState;
