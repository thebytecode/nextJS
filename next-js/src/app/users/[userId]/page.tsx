"use client";
import { Layout, Card, Pagination } from "antd";

import { useParams } from "next/navigation";
import axios from 'axios';
import React from 'react';
import Sidebar from "@/components/Sidebar";

const { Content } = Layout;

const blogs = [
  {
    id: 1,
    userId: 1,
    title: "Are you ready to buy a new modern home?",
    description:
      "The thing is that it’s a rare find out here. I think that’s a property...",
    date: "August 11, 2022",
    image: "/blog1.jpg",
  },
  {
    id: 2,
    userId: 1,
    title: "The world is at your door step...",
    description: "Effort would equate with who we often be. Lain still...",
    date: "July 18, 2022",
    image: "/blog2.jpg",
  },
];


export default function users() {
  const params = useParams();
  
  const userId = params?.userId as string;
  return (
    <Layout className="min-h-screen">
    <Sidebar params={{
        userId: userId
      }}  />
      <Layout className="p-6">
        <Content className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">All Blog Posts</h1>
          {blogs.map((blog) => (
            <Card key={blog.id} className="mb-4">
              <div className="flex">
                <img src={blog.image} alt={blog.title} className="w-24 h-24 rounded-md" />
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{blog.title}</h2>
                  <p className="text-gray-500 text-sm">{blog.description}</p>
                  <p className="text-xs text-gray-400 mt-2">{blog.date}</p>
                </div>
              </div>
            </Card>
          ))}
          <Pagination defaultCurrent={1} total={50} className="mt-4" />
        </Content>
      </Layout>
      </Layout>
  );
}
