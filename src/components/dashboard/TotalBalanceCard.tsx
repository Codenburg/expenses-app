import {
  CardHeader,
  Card,
  CardDescription,
  CardContent,
  Button,
} from "@/components/ui";

function TotalBalanceCard() {
  return (
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
  );
}
export default TotalBalanceCard;
