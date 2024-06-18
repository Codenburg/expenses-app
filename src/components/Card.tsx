import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ReactNode, useEffect, useState } from "react";
import { supabase } from "../../db/supabase";

interface Props {
  title: string;
  IconCard: JSX.Element;
  children: ReactNode;
}
function CardComponent({ title, IconCard, children }: Props) {
  const [cashAmount, setCashAmount] = useState(null);
  const [debitAmount, setDebitAmount] = useState(null);

  useEffect(() => {
    const fetchAmounts = async () => {
      const { data: balances, error } = await supabase
        .from("balances")
        .select(`cash_amount_available, debit_amount_available`)
        .order("balances_id", { ascending: false })
        .limit(1);
      if (balances && balances.length > 0) {
        console.log(balances);
        setCashAmount(balances[0].cash_amount_available);
        setDebitAmount(balances[0].debit_amount_available);
      } else {
        console.log("error", error);
      }
    };
    fetchAmounts();
  }, []);
  
  // guardar en store el monto en debito y en efectivo

  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl">{title}</CardTitle>
        {IconCard}
      </CardHeader>

      <CardContent className="grid gap-2 ">
        <Label className="text-xl font-semibold ">
          Efectivo:{" "}
          <Label className="text-xl">
            {cashAmount ? `$${cashAmount}` : "Cargando..."}
          </Label>
        </Label>
        <Label className="text-xl font-semibold ">
          Debito:{" "}
          <Label className="text-xl ">
            {debitAmount ? `$${debitAmount}` : "Cargando..."}
          </Label>
        </Label>
        {children}
      </CardContent>
    </Card>
  );
}
export default CardComponent;
