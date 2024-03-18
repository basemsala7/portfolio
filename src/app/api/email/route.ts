import { NextResponse } from "next/server";
export async function POST(request: Request) {
  const body = await request.json();

  try {
    const res = await fetch("https://basem-portfolio.onrender.com/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(body),
    });
    if (!res.ok) throw Error("faild");
    const data = await res.json();
    return NextResponse.json({ message: "Done", data }, { status: 200 });
    return data;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "server erro " }, { status: 500 });
  }
}
