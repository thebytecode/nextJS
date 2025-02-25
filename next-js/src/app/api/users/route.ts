import { NextResponse } from "next/server";

const users = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  { id: 4, name: "David Williams", email: "david@example.com" },
  { id: 5, name: "Emma Davis", email: "emma@example.com" },
  { id: 6, name: "Frank Miller", email: "frank@example.com" },
  { id: 7, name: "Grace Lee", email: "grace@example.com" },
  { id: 8, name: "Henry Wilson", email: "henry@example.com" },
  { id: 9, name: "Isla Moore", email: "isla@example.com" },
  { id: 10, name: "Jack Taylor", email: "jack@example.com" }
];

export async function GET() {
  return NextResponse.json(users);
}
