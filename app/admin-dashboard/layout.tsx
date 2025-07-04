"use client";
import SideBar from "@/components/dashboard/SideBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-screen">
      {<SideBar />}
      {children}
    </div>
  );
};

export default layout;
