import { z } from "zod";
import { Methods } from "../../types/Expenses";

export const amountSchema = z.object({
  amount: z.string({
    required_error: "El monto es requerido",
  }),
  method: z.enum(Methods, {
    errorMap: () => ({ message: "por favor selecciona un metodo" }),
  }),
});
