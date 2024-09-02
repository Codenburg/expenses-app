import { z } from "zod";

export const LoginUserFormSchema = z.object({
  email: z.string().email({ message: "Ingrese un email válido" }),
  password: z.string(),
}).superRefine(({ password }, ctx) => {
  if (password === "") {
    ctx.addIssue({
      code: "custom",
      message: "La contraseña no puede estar vacía",
      path: ["password"],
    });
  }
});

export type LoginUserFormSchema = z.infer<typeof LoginUserFormSchema>;
