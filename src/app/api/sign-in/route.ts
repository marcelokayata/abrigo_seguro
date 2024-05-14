async function handler(req: Request) {
  if (req.method !== "POST") {
    return Response.json({ message: "Método não permitido" });
  }

  const body = await req.json();

  const { email, password } = body;

  if (!email || !password) {
    return Response.json({ message: "Preencha os campos corretamente." });
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  return Response.json({ message: `Seja bem-vindo, ${email}` });
}

export { handler as GET, handler as POST };
