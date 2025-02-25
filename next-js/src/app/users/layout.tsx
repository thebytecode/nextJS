import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LogoutButton from "@/components/LogoutButton";
import "../globals.css";
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


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await getUserData();
  return (
   
      
      <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6 fixed h-full">
        <div className="mb-6">
          <img
            src="https://via.placeholder.com/80"
            alt="User Avatar"
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-center mt-3 text-lg font-semibold">John Doe</h2>
        </div>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="/" className="block p-2 bg-gray-700 rounded hover:bg-gray-600">
                Dashboard
              </a>
            </li>
            <li>
              
              <LogoutButton />
            </li>
            
          </ul>
        </nav>
      </aside>

      {/* Dynamic Content */}
      <main className="ml-64 p-6 flex-1 overflow-auto">{children}</main>
    </div>

  );
}
