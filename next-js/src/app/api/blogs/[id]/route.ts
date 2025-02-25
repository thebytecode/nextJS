import { NextResponse } from "next/server";

const posts = [
  {
    id: 1,
    user_id: 3,
    title: "Mastering Next.js: A Beginner’s Guide",
    slug: "mastering-nextjs-beginners-guide",
    content: "Next.js simplifies React development with server-side rendering and static site generation...",
    image_url: "https://example.com/nextjs-guide.jpg",
    category: "Web Development",
    tags: ["Next.js", "React", "SSR"],
    status: "published",
    created_at: "2024-02-20T12:00:00Z",
    updated_at: "2024-02-21T10:30:00Z",
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
  }
];

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id.toString() === params.id);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
