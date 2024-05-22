import { Expenses } from "@/types/Expenses";

export const expensesData: Expenses[] = [
  {
    id: "1",
    amount: 2456,
    state: "pendiente",
    category: "electronica",
    method: "debito",
  },
  {
    id: "2",
    amount: 245425,
    state: "atrasado",
    category: "salud",
    method: "credito",
  },
  {
    id: "3",
    amount: 12455,
    state: "pagado",
    category: "supermercado",
    method: "efectivo",
  },
];
