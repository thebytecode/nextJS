import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

// Define the path to the JSON file
const filePath = path.join(process.cwd(), "data", "blogs.json");

// Read JSON file helper function
const getBlogs = () => {
  const data = fs.readFileSync(filePath, "utf8");
  return JSON.parse(data);
};

// Write to JSON file helper function
const saveBlogs = (blogs: any[]) => {
  fs.writeFileSync(filePath, JSON.stringify(blogs, null, 2), "utf8");
};

// DELETE request handler
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const blogs = getBlogs();
  const blogId = parseInt(params.id);

  // Filter out the blog to delete
  const updatedBlogs = blogs.filter((blog: any) => blog.id !== blogId);

  if (updatedBlogs.length === blogs.length) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  // Save the updated blogs back to the file
  saveBlogs(updatedBlogs);

  return NextResponse.json({ message: "Blog deleted successfully" });
}

export async function GET(req: Request, context: { params: { id: string } }) {
  const { params } = context; // Destructure params properly
  const blogs = await getBlogs(); // If getBlogs() is async, await it

  if (!blogs) {
    return Response.json({ error: "Blogs data not found" }, { status: 500 });
  }

  const post = blogs.find((p) => p.id.toString() === params.id);

  if (!post) {
    return Response.json({ error: "Post not found" }, { status: 404 });
  }

  return Response.json(post);
}

// API Route: Update Blog by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const blogs = getBlogs();
  const blogId = parseInt(params.id);
  const updatedBlog = await req.json();

  const blogIndex = blogs.findIndex((blog: any) => blog.id === blogId);
  if (blogIndex === -1) {
    return NextResponse.json({ message: "Blog not found" }, { status: 404 });
  }

  // Update blog data
  blogs[blogIndex] = { ...blogs[blogIndex], ...updatedBlog, updated_at: new Date().toISOString() };

  // Save the updated JSON
  saveBlogs(blogs);

  return NextResponse.json({ message: "Blog updated successfully", blog: blogs[blogIndex] });
}