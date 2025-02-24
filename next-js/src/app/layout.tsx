import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div >
      {/* Dynamic Content */}
      <main className="">{children}</main>
    </div>

      </body>
    </html>
  );
}
