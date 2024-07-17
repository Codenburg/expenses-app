import { getValues } from "@/lib/functions/enum";
import { z } from "zod";
import { Method } from "../../types/Expenses";

export const amountSchema = z.object({
  amount: z.string({
    required_error: "El monto es requerido",
  }),
  method: z.enum(getValues(Method), {
    errorMap: () => ({ message: "por favor selecciona un metodo" }),
  }),
});
