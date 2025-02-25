import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css"; // Tailwind & Global Styles
import { ConfigProvider } from "antd";
import { Layout } from "antd";
import React from "react";

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



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={{ token: {} }}>
          <Layout className="min-h-screen flex">
         
            <Layout className="p-6">{children}</Layout>
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}


