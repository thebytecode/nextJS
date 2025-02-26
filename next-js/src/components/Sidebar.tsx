
import { Layout, Menu } from "antd";
import { LogoutOutlined, UserOutlined, FileTextOutlined, SettingOutlined } from "@ant-design/icons";

import Link from "next/link";
import {  HomeOutlined, FileOutlined } from "@ant-design/icons";
import LogoutButton from "@/components/LogoutButton";
const { Sider } = Layout;
import { useState, useEffect } from "react";
import Image from "next/image";
import router from "next/router";
import Avatar from "antd/es/avatar/Avatar";

const handleLogout = () => {
    localStorage.removeItem("token"); // Clear authentication token
    router.push("/login"); // Redirect to login page
  };


 

export default function Sidebar({ params }: { params?: { userId?: string; postId?: string } }) {
  
  let userId: string= null;

  useEffect(() => {
    if (typeof window !== "undefined") {
     
     
      
        if (typeof params.userId !== "undefined") {
      //  const sessionUser = localStorage.getItem("user");
      //  const userData = JSON.parse(sessionUser);
      //  userId=userData.user.id;
      //  router.push("/users/"+);
      }else{
        userId=params.userId;
      }
    }
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
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      danger: true,
      onClick: handleLogout, // Logout function
    },
  ];

 
  return (
    <Sider width={250} className="h-screen bg-white shadow-md">
      <div className="p-4 text-center border-b">
        
    <img src={`/images/users/${userId}.jpg`} alt="User" className="w-14 h-14 rounded-full mx-auto" />
        
        <h3 className="mt-2 font-semibold">Allie Simon</h3>
        <p className="text-gray-500 text-sm">Live metrics</p>
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={["2"]} items={menuItems} />
    
    </Sider>
  );
};


