import React from 'react'
import Link from 'next/link'
import {
  
  
  User,       // for Profile
  ShoppingCart, // or Package for Orders
  BarChart,
  Tag,
  PackageMinus,
  Layout,
  LayoutTemplate,
  Ticket
} from 'lucide-react';

const SideBar = () => {
  return (
    <div className='absolute z-10 top-0 left-0 h-screen w-[238px] flex flex-col gap-5 p-3 bg-[#1A1A1A] rounded-lg '>
        <h1 className='text-white text-2xl text-center mt-8'>Sheba Market</h1>
        <Link href={'/profile'} className='flex items-center mt-8 rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <User className='text-[white]' size={18}/>
            Users
        </Link>
        <Link href={'/orders'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <PackageMinus className='text-[white]' size={18}/>
            Products
        </Link>
        <Link href={'/whishlists'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <ShoppingCart className='text-[white]' size={18}/>
            Orders
        </Link>
        <Link href={'/settings'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <BarChart className='text-[white]' size={18}/>
            Analytics
        </Link>

        <Link href={'/settings'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <Tag className='text-[white]' size={18}/>
            Promotions/Discounts
        </Link>

         <Link href={'/settings'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <LayoutTemplate className='text-[white]' size={18}/>
            Content Management
        </Link>

         <Link href={'/settings'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <Ticket className='text-[white]' size={18}/>
            Support and Tickets
        </Link>


        
      
    </div>
  )
}

export default SideBar
