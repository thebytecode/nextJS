import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import React from "react";


export default function Home() {
  return (
    <div>
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <p className="mt-4 text-gray-600">
      Welcome to your dashboard. This is the main content area.
    </p>
    <Link href="/users/1/post/1">
          <Button type="primary" size="large" className="bg-blue-500 hover:bg-blue-600">
            Go to Post
          </Button>
        </Link>
  </div>
  );
}
