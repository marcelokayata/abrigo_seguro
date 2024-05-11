import { z } from "zod";

export const SignInFormSchema = z.object({
  email: z
    .string({ message: "Necessário informar e-mail" })
    .email({ message: "Email inválido" }),
  password: z.string({ message: "Necessário informar senha" }),
});

export type tSignInFormValue = z.infer<typeof SignInFormSchema>;
