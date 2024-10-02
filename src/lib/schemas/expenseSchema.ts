import { z } from "zod";
import { Categories,States,Methods } from "../../types/Expenses";

export const expenseSchema = z.object({
  amount: z.string({
    required_error: "El monto es requerido",
  }),
  state: z.enum((States), {
    errorMap: () => ({
      message: "Por favor selecciona un estado",
    }),
  }),
  category: z.enum((Categories), {
    errorMap: () => ({ message: "Por favor seleccionna una categoria" }),
  }),
  method: z.enum((Methods), {
    errorMap: () => ({ message: "por favor selecciona un metodo" }),
  }),
});
