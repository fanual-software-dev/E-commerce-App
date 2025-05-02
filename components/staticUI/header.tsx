'use client'
import React, { useMemo } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { ShoppingCart,Menu,X } from "lucide-react";
import { useCartStore } from '@/contexts/CartStore';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cartItems = useCartStore(state=>state.cartItems)
  const length = useMemo(()=>cartItems.length,[cartItems])
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='w-full p-3 pb-5 md:pt-10 md:pb-5    border-dashed border-[#171717] border-b-2 flex justify-between  items-center'>
      
      <div className='hidden sm:flex items-center gap-4'>
          <Link href='/' className='border-[#171717]  bg-[#1A1A1A] border-dashed border  rounded-lg text-white text-xs  px-4 py-2'>Home</Link>
          <Link href='/products/clothes' className='border-[#171717]  bg-[#1A1A1A] border-dashed  border rounded-lg text-white text-xs  px-4 py-2'>Products</Link>
      </div>

      <p className='text-amber-300  font-bold md:text-2xl'>SHEBA MARKET</p>

      <div className='hidden sm:flex items-center gap-4'>
        <Link href='/products/cart' className={`bg-[#1A1A1A] border-dashed space-x-2 relative border-[#171717] rounded-lg text-white text-xs  px-5 py-2`}>
            <ShoppingCart className='text-white' size={18}/>
            <span className={`absolute  justify-center pb-0.5 items-center -top-2 -right-1 ${ length > 0 ? 'flex' : 'hidden'} bg-red-500 text-white text-xs w-5 h-5 rounded-full`}>
              {length}
            </span>

        </Link>

        <Link href='/' className='bg-amber-300 hover:bg-amber-400 transition-all duration-300 text-[#0F0F0F] font-serif  px-6 py-2 font-bold text-xs rounded-lg'>Signup/Login</Link>
      </div>

      <Menu onClick={toggleMenu} className='text-white btn btn-xs btn-accent sm:hidden' size={20}/>

     
      <div className={`bg-[#000000] absolute ${isOpen ? 'top-0':'-top-full'} w-full  right-0 px-6 pb-6 pt-4 flex flex-col gap-3 transition-all duration-500`}>
        
        <X onClick={toggleMenu} className='text-white btn btn-xs btn-accent absolute top-3 right-3' size={20}/>         
        
        <Link href='/' className='w-1/2 flex items-center gap-1 bg-[#0b0b0b] hover:bg-[#111111] transition-all duration-300 border-dashed  border-gray-500 rounded-lg text-white text-xs  px-5 py-2'>
            Home
        </Link>

        <Link href='/products/clothes' className='w-1/2 flex items-center gap-1 bg-[#0b0b0b] hover:bg-[#111111] transition-all duration-300 border-dashed  border-gray-500 rounded-lg text-white text-xs  px-5 py-2'>
            Products
        </Link>

        <Link href='/products/cart' className='w-1/2 relative flex items-center gap-1 bg-[#0b0b0b] hover:bg-[#111111] transition-all duration-300 border-dashed  border-gray-500 rounded-lg text-white text-xs  px-5 py-2'>
            <ShoppingCart className='text-white' size={16}/>
            Cart
            <span className={`absolute  justify-center items-center -top-2 right-0 ${ length > 0 ? 'flex' : 'hidden'} bg-red-500 text-white text-xs w-5 h-5 rounded-full`}>
              {length}
            </span>
        </Link>

      </div>
      
    </div>
  )
}

export default Header
