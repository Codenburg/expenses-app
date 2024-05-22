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
  salud: "salud",
  supermercado: "supermercado",
  electronica: "electronica",
  servicios: "servicios",
} as const;
export type Category = (typeof Category)[keyof typeof Category];

export const Method = {
  debito: "debito",
  credito: "credito",
  efevtivo: "efectivo",
} as const;
export type Method = (typeof Method)[keyof typeof Method];
