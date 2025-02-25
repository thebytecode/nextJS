import { NextResponse } from "next/server";

// Sample JSON data (This should come from a database in real apps)
const blogs = [
  {
    id: 1,
    user_id: 1,
    title: "Mastering Next.js: A Beginner’s Guide",
    slug: "mastering-nextjs-beginners-guide",
    content: "Next.js simplifies React development with server-side rendering...",
    image_url: "https://example.com/nextjs-guide.jpg",
    category: "Web Development",
    tags: ["Next.js", "React", "SSR"],
    status: "published",
    created_at: "2024-02-20T12:00:00Z",
    updated_at: "2024-02-21T10:30:00Z",
  },
  {
    id: 2,
    user_id: 1,
    title: "React Performance Optimization",
    slug: "react-performance-optimization",
    content: "Boosting React performance involves techniques like memoization...",
    image_url: "https://example.com/react-performance.jpg",
    category: "React",
    tags: ["React", "Performance"],
    status: "published",
    created_at: "2024-02-18T09:45:00Z",
    updated_at: "2024-02-19T11:00:00Z",
  },
  {
    id: 3,
    user_id: 5,
    title: "Node.js Best Practices",
    slug: "nodejs-best-practices",
    content: "Writing scalable Node.js applications requires following best practices...",
    image_url: "https://example.com/nodejs-best-practices.jpg",
    category: "Backend",
    tags: ["Node.js", "Backend"],
    status: "published",
    created_at: "2024-02-15T08:30:00Z",
    updated_at: "2024-02-16T12:15:00Z",
  },
];

// API Route: GET /api/blogs?user_id=3
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("user_id");

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  // Filter blogs by user_id
  const userBlogs = blogs.filter((blog) => blog.user_id === parseInt(userId));

  return NextResponse.json(userBlogs);
}


