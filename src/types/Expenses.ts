export type Expenses = {
  id: string;
  amount: number;
  description?: string;
  status: "pendiente" | "atrasado" | "pagado";
  category: "salud" | "supermercado" | "electronica" | "servicios";
  method: "credito" | "debito" | "efectivo";
};
