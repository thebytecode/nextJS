import { NextResponse } from "next/server";

const blogs = [
  {
    id: 1,
    user_id: 1,
    title: "Mastering Next.js: A Beginner’s Guide",
    slug: "mastering-nextjs-a-beginner-s-guide",
    content: "This blog covers Mastering Next.js: A Beginner’s Guide in detail...",
    image_url: "https://example.com/mastering-nextjs-a-beginner-s-guide.jpg",
    category: "React",
    tags: ["Next.js", "React", "SSR"],
    status: "published",
    created_at: "2024-02-01T00:00:00.000Z",
    updated_at: "2024-02-02T00:00:00.000Z"
  },
  {
    id: 2,
    user_id: 1,
    title: "React Performance Optimization",
    slug: "react-performance-optimization",
    content: "This blog covers React Performance Optimization in detail...",
    image_url: "https://example.com/react-performance-optimization.jpg",
    category: "React",
    tags: ["Next.js", "React", "SSR"],
    status: "published",
    created_at: "2024-02-02T00:00:00.000Z",
    updated_at: "2024-02-03T00:00:00.000Z"
  },
  {
    id: 3,
    user_id: 1,
    title: "Node.js Best Practices",
    slug: "node-js-best-practices",
    content: "This blog covers Node.js Best Practices in detail...",
    image_url: "https://example.com/node-js-best-practices.jpg",
    category: "React",
    tags: ["Next.js", "React", "SSR"],
    status: "published",
    created_at: "2024-02-03T00:00:00.000Z",
    updated_at: "2024-02-04T00:00:00.000Z"
  },
  {
    id: 4,
    user_id: 1,
    title: "Advanced JavaScript Concepts",
    slug: "advanced-javascript-concepts",
    content: "This blog covers Advanced JavaScript Concepts in detail...",
    image_url: "https://example.com/advanced-javascript-concepts.jpg",
    category: "React",
    tags: ["Next.js", "React", "SSR"],
    status: "published",
    created_at: "2024-02-04T00:00:00.000Z",
    updated_at: "2024-02-05T00:00:00.000Z"
  },
  {
    id: 5,
    user_id: 1,
    title: "CSS Animations for Beginners",
    slug: "css-animations-for-beginners",
    content: "This blog covers CSS Animations for Beginners in detail...",
    image_url: "https://example.com/css-animations-for-beginners.jpg",
    category: "React",
    tags: ["Next.js", "React", "SSR"],
    status: "published",
    created_at: "2024-02-05T00:00:00.000Z",
    updated_at: "2024-02-06T00:00:00.000Z"
  },
  {
    id: 6,
    user_id: 2,
    title: "Mastering Next.js: A Beginner’s Guide",
    slug: "mastering-nextjs-a-beginner-s-guide",
    content: "This blog covers Mastering Next.js: A Beginner’s Guide in detail...",
    image_url: "https://example.com/mastering-nextjs-a-beginner-s-guide.jpg",
    category: "Backend",
    tags: ["React", "Performance"],
    status: "published",
    created_at: "2024-02-06T00:00:00.000Z",
    updated_at: "2024-02-07T00:00:00.000Z"
  },
  {
    id: 7,
    user_id: 2,
    title: "React Performance Optimization",
    slug: "react-performance-optimization",
    content: "This blog covers React Performance Optimization in detail...",
    image_url: "https://example.com/react-performance-optimization.jpg",
    category: "Backend",
    tags: ["React", "Performance"],
    status: "published",
    created_at: "2024-02-07T00:00:00.000Z",
    updated_at: "2024-02-08T00:00:00.000Z"
  },
  {
    id: 8,
    user_id: 2,
    title: "Node.js Best Practices",
    slug: "node-js-best-practices",
    content: "This blog covers Node.js Best Practices in detail...",
    image_url: "https://example.com/node-js-best-practices.jpg",
    category: "Backend",
    tags: ["React", "Performance"],
    status: "published",
    created_at: "2024-02-08T00:00:00.000Z",
    updated_at: "2024-02-09T00:00:00.000Z"
  },
  {
    id: 9,
    user_id: 2,
    title: "Advanced JavaScript Concepts",
    slug: "advanced-javascript-concepts",
    content: "This blog covers Advanced JavaScript Concepts in detail...",
    image_url: "https://example.com/advanced-javascript-concepts.jpg",
    category: "Backend",
    tags: ["React", "Performance"],
    status: "published",
    created_at: "2024-02-09T00:00:00.000Z",
    updated_at: "2024-02-10T00:00:00.000Z"
  },
  {
    id: 10,
    user_id: 2,
    title: "CSS Animations for Beginners",
    slug: "css-animations-for-beginners",
    content: "This blog covers CSS Animations for Beginners in detail...",
    image_url: "https://example.com/css-animations-for-beginners.jpg",
    category: "Backend",
    tags: ["React", "Performance"],
    status: "published",
    created_at: "2024-02-10T00:00:00.000Z",
    updated_at: "2024-02-11T00:00:00.000Z"
  },
  // The pattern continues for users 3 to 10 with 5 blogs each...
];

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const post = posts.find((p) => p.id.toString() === params.id);
  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}
