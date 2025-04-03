'use client'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart,Menu,X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='w-full p-3 md:pt-10 md:pb-5   border-dashed border-b-[1px] flex justify-between  items-center'>
      
      <div className='hidden md:flex items-center gap-4'>
          <Link href='/' className='bg-[#1A1A1A] border-dashed  border-gray-500  rounded-lg text-white text-xs  px-4 py-2'>Home</Link>
          <Link href='/' className='bg-[#1A1A1A] border-dashed  border-gray-500 rounded-lg text-white text-xs  px-4 py-2'>Products</Link>
      </div>

      <p className='text-gray-50 md:text-2xl'>SHEBA MARKETS</p>

      <div className='hidden md:flex items-center gap-4'>
        <Link href='/' className='bg-[#1A1A1A] border-dashed  border-gray-500 rounded-lg text-white text-xs  px-3 py-2'>
            <ShoppingCart className='text-white' size={18}/>
        </Link>

        <Link href='/' className='bg-[#AE9B84] text-[#0F0F0F]  px-6 py-2 font-bold text-xs rounded-lg'>Contact</Link>
      </div>

      <div className='md:hidden gap-4'>
        
        <Menu onClick={toggleMenu} className='text-white md:hidden' size={20}/>
        
        <div className={`${isOpen ? 'top-0':'-top-full'} w-full bg-[#1A1A1A] absolute  right-0 px-6 pb-6 pt-10 flex flex-col gap-3 transition-all duration-500`}>
          <X onClick={toggleMenu} className='text-white absolute top-3 right-3' size={16}/>
          <Link href='/' className='flex items-center gap-1 bg-[#0b0b0b] border-dashed  border-gray-500 rounded-lg text-white text-xs  px-5 py-2'>
              Home
          </Link>

          <Link href='/' className='flex items-center gap-1 bg-[#0b0b0b] border-dashed  border-gray-500 rounded-lg text-white text-xs  px-5 py-2'>
              Products
          </Link>
          <Link href='/' className='flex items-center gap-1 bg-[#0b0b0b] border-dashed  border-gray-500 rounded-lg text-white text-xs  px-5 py-2'>
              <ShoppingCart className='text-white' size={16}/>
              Cart
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
