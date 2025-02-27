"use client";
import { Table, Button, Layout, Tag, Skeleton, Space, Popconfirm, message, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Sidebar from "@/components/Sidebar";

const { Search } = Input;
const { Option } = Select;

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

export default function PostList() {
  const params = useParams();
  const router = useRouter();
  const userId = params?.userId as string;
  const [posts, setPosts] = useState<Post[]>([]);
  
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<"ascend" | "descend" | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  useEffect(() => {
    fetch(`/api/blogs?userId=${userId}`)
    .then((res) => res.json())
    .then((data) => {
      if (Array.isArray(data)) {
        setPosts(data);
      } else {
        console.error("Invalid data format:", data);
        setPosts([]); // Ensure posts is always an array
      }
      setLoading(false);
    })
    .catch(() => {
      setLoading(false);
      setPosts([]); // Fallback to empty array on error
    });
  }, [userId]);

  const handleDelete = (postId: number) => {
    fetch(`/api/blogs/${postId}`, { method: "DELETE" })
      .then(() => {
        message.success("Post deleted successfully");
        setPosts(posts.filter((post) => post.id !== postId));
      })
      .catch(() => message.error("Failed to delete post"));
  };

  const filteredPosts = posts
    .filter((post) => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((post) => (categoryFilter ? post.category === categoryFilter : true))
    .sort((a, b) => (sortOrder === "ascend" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)));

  const columns = [
    {
      title: "Image",
      dataIndex: "image_url",
      key: "image",
      render: (image: string) => <img src={image} alt="Post" className="w-16 h-16 rounded object-cover" />,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: true,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      filters: [
        { text: "Web Development", value: "Web Development" },
        { text: "Backend", value: "Backend" },
      ],
      onFilter: (value: any, record: Post) => record.category === value,
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags: string[]) => (
        <>
          {tags.map((tag) => (
            <Tag color="blue" key={tag}>
              {tag}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: "Published Date",
      dataIndex: "created_at",
      key: "created_at",
      sorter: (a: Post, b: Post) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Post) => (
        <Space>
          <Button type="link" onClick={() => router.push(`/users/${userId}/post/${record.id}`)}>
            View
          </Button>
          <Button type="link" onClick={() => router.push(`/users/${userId}/post/${record.id}/edit`)}>
            Edit
          </Button>
          <Popconfirm title="Are you sure?" onConfirm={() => handleDelete(record.id)} okText="Yes" cancelText="No">
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Layout className="min-h-screen">
      <Sidebar params={{ userId }} />
      <div className="p-6">
        <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">Post List</h1>
          <div className="flex gap-4 mb-4">
            <Search placeholder="Search by title" onChange={(e) => setSearchTerm(e.target.value)} allowClear />
            <Select placeholder="Filter by category" onChange={setCategoryFilter} allowClear>
              <Option value="Web Development">Web Development</Option>
              <Option value="Backend">Backend</Option>
            </Select>
          </div>
          {loading ? <Skeleton active /> : <Table dataSource={filteredPosts} columns={columns} pagination={{ pageSize }} />}
        </div>
      </div>
    </Layout>
  );
}
