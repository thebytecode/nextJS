"use client";
import { Layout, Menu } from "antd";
import { LogoutOutlined, UserOutlined, FileTextOutlined, SettingOutlined } from "@ant-design/icons";

import Link from "next/link";
import {  HomeOutlined, FileOutlined } from "@ant-design/icons";
import LogoutButton from "@/components/LogoutButton";
const { Sider } = Layout;
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Avatar from "antd/es/avatar/Avatar";


 

export default function Sidebar({ params }: { params?: { userId?: string; postId?: string } }) {
 
  const [userId, setUserId] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/logout", { method: "POST" });
    sessionStorage.removeItem("user");
    localStorage.removeItem("user");
    router.push("/login");
  };

  useEffect(() => {
   

    if (typeof window !== "undefined") {
    
      const sessionUser = sessionStorage.getItem("user");
      if (sessionUser) {
        try {
          const userData = JSON.parse(sessionUser);
          console.log("userData",userData);
          setUserId(userData.id); // Set user ID from stored data

        } catch (error) {
          console.error("Error parsing user data:", error);
         
        }
      }
    }
    
    console.log("User ID:", userId); // Debugging output
  }, []);


  const menuItems = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: <Link href="/users">Dashboard</Link>,
    },
    {
      key: "2",
      icon: <UserOutlined />,
      label: <Link href={`/users/${userId}`}>My Profile</Link>,
    },
    {
      key: "3",
      icon: <FileOutlined />,
      label: <Link href={`/users/${userId}/posts`}>Blogs</Link>,
    },
    {
      key: "4",
      icon: <LogoutOutlined />,
      label: "Logout",
      danger: true,
      onClick: handleLogout, // Logout function
      
    },
  ];

 
  return (
    <Sider  width={250}
    collapsible
    collapsed={collapsed}
    onCollapse={(value) => setCollapsed(value)}
    className="h-screen fixed left-0 top-0 shadow-md bg-white"
    >
      <div className="p-4 text-center border-b">
        
    <img src={`/images/users/${userId}.jpg`} alt="User" className="w-14 h-14 rounded-full mx-auto" />
        
        <h3 className="mt-2 font-semibold">Allie Simon</h3>
        <p className="text-gray-500 text-sm">Live metrics</p>
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={["2"]} items={menuItems} />
    
    </Sider>
  );
};


