"use client"; // Add this only if you're using App Router

import { useRouter } from "next/navigation";
import React from "react";
import { LogIn } from "lucide-react";

export default function UnauthorizedPage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-md text-center">
        <h1 className="text-3xl flex gap-3 items-center justify-center font-bold text-red-600 mb-4">
          Access Denied
          <LogIn className="text-red-600" />
        </h1>
        <p className="text-gray-700 mb-6">
          You are not authorized to view this page.
        </p>
        <button
          onClick={handleRedirect}
          className="px-6 py-2 bg-blue-600 cursor-pointer text-white rounded-md hover:bg-blue-700 transition"
        >
          Go to Login
        </button>
      </div>
    </div>
  );
}
