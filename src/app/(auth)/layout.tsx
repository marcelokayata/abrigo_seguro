interface SignInLayoutProps {
  children?: React.ReactNode;
}

export default function AuthLayout({ children }: SignInLayoutProps) {
  return (
    <section className="grid min-h-screen min-w-full grid-cols-1 p-4 md:grid-cols-2">
      <section className="bg-foreground hidden rounded-bl-2xl rounded-tl-2xl p-9 md:block">
        <h1 className="text-secondary mb-5 text-4xl font-bold">Logo</h1>
        <p className="text-secondary/50">
          Podemos adicionar um imagem de fundo aqui tbm
        </p>
      </section>
      {children}
    </section>
  );
}
