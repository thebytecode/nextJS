import { NextResponse } from "next/server";
import path from "path";
import fs from "fs/promises";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Read users.json file
    const fileData = await fs.readFile(filePath, "utf-8");
    const users = JSON.parse(fileData);

    // Find user by email
    const user = users.find((u: any) => u.email === email);

    if (!user || user.password !== password) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    // Remove password before sending response
    const { password: _, ...userData } = user;

    return NextResponse.json({ message: "Login successful", user: userData });
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
