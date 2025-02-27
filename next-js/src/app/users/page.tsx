"use client";

import { useEffect, useState } from "react";
import { Table, Avatar } from "antd";
import { useRouter } from "next/navigation";
import { Layout, Card, Pagination } from "antd";
interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();


  
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const columns = [
    {
      title: "Avatar",
      dataIndex: "id",
      key: "avatar",
      render: (id: number) => <Avatar src={`/images/users/${id}.jpg`} size={50} />
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    }
  ];

  return (
  
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      <Table 
        dataSource={users} 
        columns={columns} 
        loading={loading} 
        rowKey="id" 
        bordered 
        onRow={(record) => ({
          onClick: () => router.push(`/users/${record.id}`)
        })}
        className="cursor-pointer"
      />
    </div>
  );
}
