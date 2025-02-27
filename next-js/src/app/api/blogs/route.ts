import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
// Sample JSON data (This should come from a database in real apps)


// Define the path to the JSON file
const filePath = path.join(process.cwd(), "data", "blogs.json");

// Read JSON file helper function
const getBlogs = () => { 
  if (!fs.existsSync(filePath)) {
    console.error("File not found:", filePath);
    return [filePath,"HELLO"]; // Return an empty array if file doesn't exist
  }
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};


// API Route: GET /api/blogs?user_id=3
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  const blogs = getBlogs();

  // Filter blogs by user_id
  const userBlogs = blogs.filter((blog: { user_id: number; }) => blog.user_id === parseInt(userId));

  return NextResponse.json(userBlogs);
}


