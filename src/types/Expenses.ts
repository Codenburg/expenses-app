export type Expenses = {
  id: string;
  amount: number;
  status: "pendiente" | "atrasado" | "pagado";
  category: "salud" | "supermercado" | "electronica" | "servicios";
  method: "credito" | "debito" | "efectivo";
};
