"use client";

import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { Input } from "../ui/input";

import {
  SignInFormSchema,
  tSignInFormValue,
} from "@/helpers/schemas/sign-in.schema";
import { SubmitButton } from "../buttons/submit-button";

interface AuthFormProps {
  className?: string;
  onSubmit: (data: tSignInFormValue) => Promise<void>;
  httpStates: {
    isLoading: boolean;
  };
}

export function AuthForm({
  className,
  onSubmit,
  httpStates: { isLoading },
}: AuthFormProps): React.ReactElement {
  const form = useForm<tSignInFormValue>({
    resolver: zodResolver(SignInFormSchema),
  });

  return (
    <div className={cn("grid gap-6", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="gap-2">
          <div className="grid gap-8">
            <div className="grid gap-1">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">E-mail</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="seu-email@aqui.com"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Senha</FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        placeholder="Digite sua senha"
                        type="password"
                        disabled={isLoading}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <SubmitButton isLoading={isLoading}>Login</SubmitButton>
          </div>
        </form>
      </Form>
    </div>
  );
}
