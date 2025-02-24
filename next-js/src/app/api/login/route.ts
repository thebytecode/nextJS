import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Dummy user data (replace with real database check)
  const validUser = email === "user@example.com" && password === "password123";

  if (!validUser) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful", user: { email } });
}
