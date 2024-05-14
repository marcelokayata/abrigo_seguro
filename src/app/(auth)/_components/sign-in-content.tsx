"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import { AuthForm } from "@/components/forms/auth-form";
import { Label } from "@/components/ui/label";
import { SignInFormSchema } from "@/helpers/schemas/sign-in.schema";

export function SignInContent(): React.ReactElement {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: {
    email: string;
    password: string;
  }): Promise<void> => {
    setIsLoading(true);
    const url = "http://localhost:3000/api/sign-in";

    const validationForm = SignInFormSchema.safeParse(data);

    if (!validationForm.success) {
      toast.error("Preencha os campos corretamente.");
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        toast.success(responseData?.message);
        router.push("/dashboard");
      } else {
        toast.error(responseData?.message);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error("Algo de errado aconteceu ao tentar fazer login.");
    }
  };

  return (
    <section className="relative flex w-full flex-col justify-center p-8">
      <Label className="absolute right-8 top-8 font-bold">Login</Label>
      <div>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-4xl font-bold">Fazer login</h1>
          <p className="mb-8 text-muted-foreground">
            Faça login e visualize as informações dos abrigos.
          </p>
        </div>
        <AuthForm
          onSubmit={handleSubmit}
          httpStates={{ isLoading: isLoading }}
        />
      </div>
    </section>
  );
}
