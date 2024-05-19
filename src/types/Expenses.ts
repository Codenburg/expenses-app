export type Expenses = {
  id: string;
  amount: number;
  status: "pending" | "failed" | "processing" | "success";
  category: "salud" | "supermercado" | "electronica" | "servicios";
};
