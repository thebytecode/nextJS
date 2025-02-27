"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import {Card, Input, Button, Form, message, Layout } from "antd";
import Sidebar from "@/components/Sidebar";

interface BlogPost {
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
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
export default function EditPost() {
  const router = useRouter();
  const params = useParams();
  const { postId, userId } = params;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [form] = Form.useForm();

  // Fetch the existing post data
  useEffect(() => {
    fetch(`${API_BASE_URL}/blogs/${postId}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        form.setFieldsValue(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [postId, form]);

  // Handle Form Submission
  const handleSubmit = async (values: Partial<BlogPost>) => {
    const response = await fetch(`${API_BASE_URL}/blogs/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      message.success("Post updated successfully!");
      router.push(`/users/${userId}/posts/${postId}`);
    } else {
      message.error("Failed to update the post.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found.</p>;

  return (
   

      <div className="p-3 pt-0 w-full max-w-none h-screen ">
      <div className="flex justify-center items-center min-h-screen bg-gray-100 ">
      <Card className="w-full  shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Title" name="title" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Slug" name="slug" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Content" name="content" rules={[{ required: true }]}>
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Image URL" name="image_url">
            <Input />
          </Form.Item>

          <Form.Item label="Category" name="category">
            <Input />
          </Form.Item>

          <Form.Item label="Tags" name="tags">
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Post
            </Button>
          </Form.Item>
        </Form>
        </Card>
      </div>
      </div>
   
  );
}