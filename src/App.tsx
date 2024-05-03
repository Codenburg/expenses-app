import { useEffect, useState } from "react";
import { Database } from "./types/schema";
import { supabase } from "../db/supabase.ts";

function App() {
  const [amount, setAmount] =
    useState<Database["public"]["Tables"]["expenses"]["Row"]["amount"]>();

  useEffect(() => {
    const fetchAmount = async () => {
      const { data: expenses, error } = await supabase
        .from("expenses")
        .select(`*`);
      if (expenses && expenses.length > 0) {
        setAmount(expenses[0].amount);
      } else {
        console.log("error:", error);
      }
    };
    fetchAmount();
  }, []);

  return (
    <div>
      <h1> amount : {`${amount}`} </h1>
    </div>
  );
}

export default App;
