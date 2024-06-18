import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import useBalanceState from "@/context/useBalanceState";
import { ReactNode, useEffect, useState } from "react";

interface Props {
  title: string;
  IconCard: JSX.Element;
  children: ReactNode;
}
function CardComponent({ title, IconCard, children }: Props) {
  const [cashAmount, setCashAmount] = useState<string | null | undefined>(null);
  const [debitAmount, setDebitAmount] = useState<string | null | undefined>(null);

  const { balances, fetchBalances } = useBalanceState();

  useEffect(() => {
    fetchBalances();
  }, [fetchBalances]);

  useEffect(() => {
    const latestBalance = Object.values(balances)[0];
    if (latestBalance) {
      setCashAmount(latestBalance.cash_amount_available);
      setDebitAmount(latestBalance.debit_amount_available);
    }
  }, [balances]);

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
