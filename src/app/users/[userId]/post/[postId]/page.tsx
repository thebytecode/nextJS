"use client";
import {Avatar, Button,  Tag, Skeleton,Layout, Card, Pagination } from "antd";


import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const { Content } = Layout;

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
  const params = useParams();
  const { postId } = useParams();
  const userId = params?.userId as string;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/blogs/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [postId]);

  if (loading) return <Skeleton active />;
  if (!post) return <p className="text-center mt-10 text-gray-500">Post not found.</p>;



  return (
                                                        
    
       <Content className="flex-1 ml-64 p-6 overflow-auto bg-gray-200  shadow-lg rounded-2xl p-8">
    
      <Card className="p-6 w-full max-w-4xl mx-auto bg-white  shadow-lg">
        <img src={post.image_url} alt={post.title} className="w-full h-[400px] object-cover rounded" />
        <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
        <p className="text-gray-600 text-sm">Published on {new Date(post.created_at).toLocaleDateString()}</p>
        <p className="mt-4">{post.content}</p>
        <div className="mt-4">
          {post.tags.map((tag) => (
            <Tag color="blue" key={tag}>{tag}</Tag>
          ))}
        </div>
      </Card>
    
    </Content>
   
  );
}

    
