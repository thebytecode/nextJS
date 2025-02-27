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





export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider theme={{ token: {} }}>
          
         
           {children}
          
        </ConfigProvider>
      </body>
    </html>
  );
}


