import * as zod from "zod";

const onlyLetters = /^[A-Za-z]+$/;

export const SignUpFormSchema = zod.object({
  firstName: zod.string().min(1, { message: "Ingrese su nombre" }).max(50, {
    message: "Really bro?",
  }).refine((value) => onlyLetters.test(value), {
    message: "El nombre solo puede contener letras",
  }),
  lastName: zod.string().min(1, { message: "Ingrese su apellido" }).max(
    50,
    { message: "Bro, u've this last name?" },
  ).refine((value) => onlyLetters.test(value), {
    message: "El apellido solo puede contener letras",
  }),
  email: zod.string().email({ message: "Ingrese un email válido" }),
  password: zod.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres",
  }),
  confirmPassword: zod.string().min(8, {
    message: "La contraseña debe tener al menos 8 caracteres",
  }),
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "Las contraseñas no coinciden",
      path: ["confirmPassword"],
    });
  }
});

export type SignUpFormSchema = zod.infer<typeof SignUpFormSchema>;
