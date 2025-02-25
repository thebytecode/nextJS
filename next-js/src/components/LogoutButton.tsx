"use client"; // Ensure this runs on the client side

import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Clear session or token (modify as needed)
      await fetch("/api/logout", { method: "POST" });

      message.success("Logged out successfully!");

      // Redirect to login page
      router.push("/login");
    } catch (error) {
      message.error("Logout failed!");
    }
  };

  return (
    <Button type="primary" danger onClick={handleLogout}>
      Logout
    </Button>
    
  );
}
