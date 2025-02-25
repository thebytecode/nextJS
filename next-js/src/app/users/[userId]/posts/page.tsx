"use client";
import { Layout, Card, Pagination } from "antd";

import { useParams } from "next/navigation";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Sidebar from "@/components/Sidebar";

const { Content } = Layout;
interface Blog {
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
}


export default function users() {
  const params = useParams();
  
  const userId = params?.userId as string;
 // const { userId } = useParams();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  let message="All Blog Posts";


  useEffect(() => {
    if (!userId) return;

    fetch(`/api/blogs?user_id=${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userId]);

  if (loading) return <p>Loading blogs...</p>;
  if (blogs.length === 0) message = "<p>No blogs found for this user.</p>";

  return (
    <Layout className="min-h-screen">
    <Sidebar params={{
        userId: userId
      }}  />
      <div className="p-6">
      <h1 className="text-2xl font-bold">Blogs by User {userId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {message}
        {blogs.map((blog) => (
          <div key={blog.id} className="border p-4 rounded shadow-lg">
            <img src={blog.image_url} alt={blog.title} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.category}</p>
            <a href={`/users/${userId}/post/${blog.id}`} className="text-blue-500">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
      </Layout>
  );
}
