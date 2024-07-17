import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
} from "@/components/ui";
import useBalanceState from "@/context/useBalanceStore";
import { useEffect, useState } from "react";

// interface Props {
//   title: string;
// }

function CardBalances() {
  //mejorar el useState para que sea un objeto con las propiedades debit_amount_available y cash_amount_available y que se actualice cuando se actualice el balance

  const [cashAmount, setCashAmount] = useState<string | null | undefined>(null);
  const [debitAmount, setDebitAmount] = useState<string | null | undefined>(
    null
  );

  const { balances } = useBalanceState();

  useEffect(() => {
    const latestBalance = Object.values(balances)[0];
    if (latestBalance) {
      setCashAmount(latestBalance.cash_amount_available);
      setDebitAmount(latestBalance.debit_amount_available);
    }
  }, [balances]);

  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription>Total Disponible</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">$45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription>Efectivo</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{`$${
            cashAmount || "No disponible"
          }`}</div>
          <p className="text-xs text-muted-foreground">
            Ultimo monto ingresado el 20/10/2024
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription>Debito</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{`$${
            debitAmount || "No disponible"
          }`}</div>
          <p className="text-xs text-muted-foreground">
            Ultimo monto ingresado el 20/12/2024
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
export default CardBalances;
