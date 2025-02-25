"use client";
import { Layout, Card, Pagination } from "antd";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {  Tag, Skeleton } from "antd";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Avatar, Button, Card } from "antd";
import Sidebar from "@/components/Sidebar";

interface Post {
  id: number;
  user_id: number;
  title: string;
  slug: string;
  content: string;
  image_url: string;
  category: string;
  tags: string[];
  status: string;
  created_at: string;
  updated_at: string;
}

export default function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [postId]);

  if (loading) return <Skeleton active />;
  if (!post) return <p className="text-center mt-10 text-gray-500">Post not found.</p>;





interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserProfile() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        const foundUser = data.find((u: User) => u.id == id);
        setUser(foundUser || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found.</p>;

  return (

    <Layout className="min-h-screen">
    <Sidebar params={{
        userId: userId
      }}  />
    <div className="p-6">
      <Card className="max-w-md mx-auto">
        <div className="flex items-center space-x-4">
          <Avatar src={`/images/users/${user.id}.jpg`} size={80} />
          <div>
            <h2 className="text-2xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
        <Button 
          type="primary" 
          className="mt-4 w-full" 
          onClick={() => router.push(`/users/${user.id}/posts`)}
        >
          View Posts
        </Button>
      </Card>
    </div></Layout>
  );
}

    <div className="p-6 max-w-3xl mx-auto">
      <Card className="shadow-lg">
        <img src={post.image_url} alt={post.title} className="w-full h-64 object-cover rounded" />
        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
        <p className="text-gray-600 text-sm">Published on {new Date(post.created_at).toLocaleDateString()}</p>
        <p className="mt-4">{post.content}</p>
        <div className="mt-4">
          {post.tags.map((tag) => (
            <Tag color="blue" key={tag}>{tag}</Tag>
          ))}
        </div>
      </Card>
    </div>
  );
}
