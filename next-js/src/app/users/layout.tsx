import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
import React from "react";
import { Layout, Card, Pagination } from "antd";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blogs",
  description: "BLOGs Web Application",
};

// async function getUserData() {
//   const res = await fetch("http://localhost:3000/users/", { cache: "no-store" }); // No cache to fetch every time
//   if (!res.ok) {
//     throw new Error("Failed to fetch user data");
//   }
//   return res.json();
// }


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await getUserData();
  return (
   
      
    <Layout className="min-h-screen">
     
      {/* Dynamic Content */}
     
      {/* Dynamic Content */}
      {children}
      </Layout>

  );
}
