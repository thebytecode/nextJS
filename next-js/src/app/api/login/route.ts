import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";






  const { email, password } = await req.json();

  // Dummy user data (replace with real database check)
  const validUser = email === "user@example.com" && password === "password123";

  if (!validUser) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  return NextResponse.json({ message: "Login successful", user: { email } });
}
