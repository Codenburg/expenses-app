import {
  Card,
  CardDescription,
  CardHeader,
  Button,
  CardContent,
} from "@/components/ui";

function CashCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardDescription>Efectivo</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">25000</p>
        <p className="text-xs text-muted-foreground pb-4 ">
          Ultimo monto ingresado el 20/10/2024
        </p>
        <Button className="w-full ">Añadir</Button>
      </CardContent>
    </Card>
  );
}

export default CashCard;
