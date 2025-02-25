
import { Layout, Menu } from "antd";
import { LogoutOutlined, UserOutlined, FileTextOutlined, SettingOutlined } from "@ant-design/icons";

import Link from "next/link";
import {  HomeOutlined, FileOutlined } from "@ant-design/icons";
import LogoutButton from "@/components/LogoutButton";
const { Sider } = Layout;
import { useState, useEffect } from "react";
import Image from "next/image";
import router from "next/router";

const handleLogout = () => {
    localStorage.removeItem("token"); // Clear authentication token
    router.push("/login"); // Redirect to login page
  };

export default function Sidebar({ params }: { params: { userId: string } }) {
  return (
    <Sider width={250} className="h-screen bg-white shadow-md">
      <div className="p-4 text-center border-b">
        
    <img src={`/images/users/${params.userId}.jpg`} alt="User" className="w-14 h-14 rounded-full mx-auto" />
        
        <h3 className="mt-2 font-semibold">Allie Simon</h3>
        <p className="text-gray-500 text-sm">Live metrics</p>
      </div>
      <Menu theme="light" mode="inline" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1" icon={<HomeOutlined />}>
          <Link href="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileOutlined />}>
          <Link href="/blogs">Blogs</Link>
        </Menu.Item>
        <Menu.Item key="logout" icon={<LogoutOutlined />} onClick={handleLogout} danger>
          Logout
        </Menu.Item>
        
      </Menu>
    </Sider>
  );
};


