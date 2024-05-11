import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const res = await request.json();

  if (res.email === "" || res.password === "") {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          NextResponse.json(
            { message: "Preencha os campos corretamente." },
            { status: 400 },
          ),
        );
      }, 2000);
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        NextResponse.json(
          { message: `Seja bem-vindo, ${res.email}` },
          { status: 200 },
        ),
      );
    }, 2000);
  });
}
