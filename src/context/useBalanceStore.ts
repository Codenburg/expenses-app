import { getLatestBalances } from "@/lib/api/getLatestBalance";
import { create } from "zustand";

interface useBalanceStore {
  balances: Record<string, string>; 
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
