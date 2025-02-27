"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Avatar, Button, Card } from "antd";
import { Layout, Pagination } from "antd";
import axios from 'axios';
import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        const foundUser = data.find((u: User) => u.id === Number(userId));
        setUser(foundUser || null);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div className="max-w-5xl mx-auto bg-white  rounded-lg shadow-md ">
      <Card className=" ">
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
    </div>
  );
}
