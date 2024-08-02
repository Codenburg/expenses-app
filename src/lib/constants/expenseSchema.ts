import { getValues } from "@/lib/functions/enum";
import { z } from "zod";
import { Category, Method, State } from "../types/Expenses";

export const expenseSchema = z.object({
  amount: z.string({
    required_error: "El monto es requerido",
  }),
  state: z.enum(getValues(State), {
    errorMap: () => ({
      message: "Por favor selecciona un estado",
    }),
  }),
  category: z.enum(getValues(Category), {
    errorMap: () => ({ message: "Por favor seleccionna una categoria" }),
  }),
  method: z.enum(getValues(Method), {
    errorMap: () => ({ message: "por favor selecciona un metodo" }),
  }),
});
