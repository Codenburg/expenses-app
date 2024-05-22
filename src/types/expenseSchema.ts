import { getValues } from "@/lib/enum";
import { z } from "zod";
import { Category, Method, State } from "./Expenses";

export const expenseSchema = z.object({
  amount: z.number({
    required_error: "El monto es requerido",
    invalid_type_error: "El monto debe ser un número",
  }).nonnegative().safe(),
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
