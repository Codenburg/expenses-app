import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  Button,
} from "@/components";

function DebitCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardDescription>Debito</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">20000</p>
        <p className="text-xs text-muted-foreground pb-4">
          Ultimo monto ingresado el 20/12/2024
        </p>
        <Button className="w-full">Añadir</Button>
      </CardContent>
    </Card>
  );
}

export default DebitCard;
