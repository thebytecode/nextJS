import { NextResponse } from "next/server";

export async function POST() {
  // Clear session (if using cookies, JWT, etc.)
  return NextResponse.json({ message: "Logged out" }, {
    status: 200,
    headers: {
      "Set-Cookie": `token=; HttpOnly; Path=/; Max-Age=0`, // Clears token
    },
  });
}
