import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
export default  function login({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const user = await getUserData();
return (
  <div>
    {/* Dynamic Content */}
    {children}
  </div>
);
}
