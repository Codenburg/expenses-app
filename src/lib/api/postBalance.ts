import { supabase } from "db/supabase";

export const postBalance = async () => {
    // TODO: Implement the logic to post a balance
    const { data: balance, error } = await supabase
        .from("balances")
        .insert({ cash_amount_available: 10000, debit_amount_available: 10000 })
        .select();
    return { balance, error };
};
