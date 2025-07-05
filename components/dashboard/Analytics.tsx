"use client";
import { useUserStore } from "@/contexts/UserStore";
import React from "react";
import dynamic from "next/dynamic";

const BarChart = dynamic(
  () => import("@/components/dashboard/charts/BarChart"),
  { ssr: false },
);

const Analytics = () => {
  const user = useUserStore((state) => state.user);
  return (
    <div className="text-white py-8 px-2 xl:pl-24">
      <p>Welcome Back, {user?.firstName ?? ""}</p>
      <div className="w-full flex flex-col justify-center items-center pb-10">
        <h1 className="text-xl mb-5 p-3 rounded-md shadow-md shadow-gray-400 font-normal italic">
          Analytics based on the past seven months collected data
        </h1>
        <div className="w-full">
          <BarChart />
        </div>
        {/* <div className='w-1/3'>
            <PieChart/>
        </div> */}
      </div>
    </div>
  );
};

export default Analytics;
