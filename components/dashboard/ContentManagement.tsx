"use client";
import { useUserStore } from "@/contexts/UserStore";
import React from "react";

const ContentManagement = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="text-white py-8 px-2 xl:pl-24">
      <p>Welcome Back, {user?.firstName ?? ""}</p>
      <div className="mt-8 bg-[#1A1A1A] rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Content Management</h2>
        <p className="mb-6 text-gray-300">
          Manage homepage banners, static texts, and featured sections.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#232323] rounded-lg p-4">
            <h3 className="font-semibold mb-2">Homepage Banner</h3>
            <input
              className="w-full p-2 rounded bg-[#181818] text-white mb-2"
              placeholder="Banner Title"
            />
            <textarea
              className="w-full p-2 rounded bg-[#181818] text-white mb-2"
              placeholder="Banner Description"
            />
            <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition">
              Update Banner
            </button>
          </div>
          <div className="bg-[#232323] rounded-lg p-4">
            <h3 className="font-semibold mb-2">Featured Section</h3>
            <input
              className="w-full p-2 rounded bg-[#181818] text-white mb-2"
              placeholder="Section Title"
            />
            <textarea
              className="w-full p-2 rounded bg-[#181818] text-white mb-2"
              placeholder="Section Description"
            />
            <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded hover:bg-yellow-400 transition">
              Update Section
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentManagement;
