import { getLatestBalances } from "@/lib/api/getLatestBalance";
import { Balance } from "@/types/Balance";
import { create } from "zustand";

interface useBalanceStore {
  balances: Record<string, Partial<Balance>>;
  getLatestBalances: () => Promise<void>;
}

const useBalanceState = create<useBalanceStore>((set) => ({
  balances: {},
  getLatestBalances: async () => {
    const balancesData = await getLatestBalances();
    set({ balances: balancesData });
  },
}));

useBalanceState.getState().getLatestBalances();

export default useBalanceState;
