'use client'
import { useUserStore } from '@/contexts/UserStore'
import React from 'react'
import dynamic from "next/dynamic";

const BarChart = dynamic(() => import("@/components/dashboard/charts/BarChart"), { ssr: false });
const PieChart = dynamic(() => import("@/components/dashboard/charts/PieChart"), { ssr: false });

const ProductManagement = () => {
    const user = useUserStore((state)=>state.user)
  return (
    <div className='text-white py-8 pl-24'>
      <p>Welcome Back {user?.firstName!},</p>
      <div className='w-full flex justify-center items-center py-10'>
          <div className='w-1/2'>
              <BarChart />
          </div>
        {/* <div className='w-1/3'>
            <PieChart/>
        </div> */}

      </div>

      
    </div>
  )
}

export default ProductManagement
