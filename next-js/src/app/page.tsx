"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4">Welcome to My App</h1>
        <p className="text-gray-600 mb-6">Your amazing Next.js app with Ant Design</p>
        
        <Button 
          type="primary" 
          size="large" 
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
}
