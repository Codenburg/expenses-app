import { getValues } from "@/lib/enum";

export type Expenses = {
  readonly id: string;
  amount: number;
  description?: string;
  state: State;
  category: Category;
  method: Method;
};

export const State = {
  pendiente: "pendiente",
  atrasado: "atrasado",
  pagado: "pagado",
} as const;
export type State = (typeof State)[keyof typeof State];

export const Category = {
  Salud: "salud",
  Supermercado: "supermercado",
  Electronica: "electronica",
  Deportes: "deportes",
  Hogar: "hogar",
  Cuentas: "cuentas",
  Impuestos: "impuestos",
  Indumentaria: "indumentaria",
  Transporte: "transporte",
} as const;
export type Category = (typeof Category)[keyof typeof Category];

export const Method = {
  debito: "debito",
  credito: "credito",
  efectivo: "efectivo",
} as const;
export type Method = (typeof Method)[keyof typeof Method];

export const estados = getValues(State);
export const categorias = getValues(Category);
export const metodos = getValues(Method);
