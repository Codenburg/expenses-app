import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  Button,
} from "@/components/ui";

function CardBalances() {
  const balance = {
    cash_amount_available: 45231.89,
    debit_amount_available: 12345.67,
  };
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription>Total Disponible</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">$45,231.89</p>
          <p className="text-xs text-muted-foreground pb-4">
            +20.1% from last month
          </p>
          <Button className="w-full" variant="outline">
            Ver Historial
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription>Efectivo</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{`$${
            balance.cash_amount_available || "No disponible"
          }`}</p>
          <p className="text-xs text-muted-foreground pb-4 ">
            Ultimo monto ingresado el 20/10/2024
          </p>
          <Button className="w-full ">Añadir</Button>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardDescription>Debito</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{`$${
            balance.debit_amount_available || "No disponible"
          }`}</p>
          <p className="text-xs text-muted-foreground pb-4">
            Ultimo monto ingresado el 20/12/2024
          </p>
          <Button className="w-full ">Añadir</Button>
        </CardContent>
      </Card>
    </div>
  );
}
export default CardBalances;
