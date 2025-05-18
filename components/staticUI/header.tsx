'use client'
import React, { useEffect, useMemo } from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart,Menu,X, Search } from "lucide-react";
import { useCartStore } from '@/contexts/CartStore';
import { useUserStore } from '@/contexts/UserStore'
import ProfileDropdown from './ProfileDropdown'
import { usePathname } from 'next/navigation'


const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cartItems = useCartStore(state=>state.cartItems)
  const length = useMemo(()=>cartItems.length,[cartItems])
  const user = useUserStore(state=>state.user)
  const [visibility, setVisibility] = useState<boolean>(false)
  const currentURL = usePathname()
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(()=>{
    const toggler = ()=>{

      const clickListener = (e: MouseEvent)=>{
        
        if (!e.target || ((e.target as HTMLElement).id!=="toggler" && (e.target as HTMLElement).id!=="toggler2")){
            setVisibility(false)
        }
        
      }

      document.addEventListener('click',clickListener)

      const scrollListener = ()=>{
        setVisibility(false)
        
      }

      window.addEventListener('scroll',scrollListener)

      return () => {
        window.removeEventListener('scroll',scrollListener); 
        document.removeEventListener('click',clickListener)
      }
    }

    toggler();
  },[visibility])

  return (
    <div className={`w-full gap-2 sm:gap-0 px-1 py-3 sm:p-3 pb-5 md:pt-10 md:pb-5  border-dashed border-[#171717] sm:border-b-2 flex ${user?.isAdmin && (currentURL.startsWith('/admin-dashboard')) ? 'justify-end' : 'justify-between'}   items-center`}>
      
      { !user?.isAdmin || (!currentURL.startsWith('/admin-dashboard')) && <div className='hidden sm:flex items-center gap-4'>
          <Link href='/' className='border-[#171717]  bg-[#1A1A1A] border-dashed border  rounded-md text-white text-xs  px-4 py-3'>Home</Link>
          <Link href='/products' className='border-[#171717]  bg-[#1A1A1A] border-dashed  border rounded-md text-white text-xs  px-4 py-3'>Products</Link>
        </div>
      }

      {!user?.isAdmin || (!currentURL.startsWith('/admin-dashboard')) &&  <div className='flex items-center justify-center gap-2'>
          <Image src='/logo.png' className='hidden md:block' width={50} height={50} alt='Logo'/>
          <p className='font-bold text-2xl md:text-3xl text-white'>Sheba Market</p>
        </div>
      }

      {user?.isAdmin && (currentURL.startsWith('/admin-dashboard')) &&
        <div className='w-full md:w-3/4 flex items-center justify-center gap-2'>
          <div className='w-full relative flex md:w-3/5 items-center justify-center gap-2'>
            <input
              type="search"
              placeholder='Type to search...'
              className='w-3/4 h-6 md:h-10 accent-white bg-[#1A1A1A] border-dashed border-[#171717] border rounded-sm md:rounded-md text-white text-xs md:text-base  px-4 pl-10 py-3 placeholder:text-xs md:placeholder:text-base'
            />

            <button
              className='w-1/4 h-6 md:h-10 flex justify-center items-center bg-[#1A1A1A] border-dashed border-[#171717] border rounded-sm md:rounded-md text-xs md:text-base text-[#a9a9a9] hover:text-white cursor-pointer  px-4 py-3'
            >
              Search
            </button>
            <Search className='absolute  left-3 text-gray-500 cursor-pointer' size={20}/>
          </div>
        </div>
      }

      <div className='hidden relative sm:flex items-center gap-4'>
        <Link href='/products/cart' className={`bg-[#1A1A1A] border-dashed space-x-2 relative border-[#171717] rounded-md text-white text-xs  px-5 py-2.5`}>
            <ShoppingCart className='text-white' size={18}/>
            <span className={`absolute  justify-center pb-0.5 items-center -top-2 -right-1 ${ length > 0 ? 'flex' : 'hidden'} bg-red-500 text-white text-xs w-5 h-5 rounded-full`}>
              {length}
            </span>

        </Link>

        {!user && <Link href='/' className='bg-[#1A1A1A] hover:bg-[#272727] transition-all duration-300 text-white   px-6 py-3 font-bold text-xs rounded-md'>Signup/Login</Link>}
        {user && <span id='toggler' onClick={()=>setVisibility(!visibility)} className='cursor-pointer bg-[#1A1A1A] hover:bg-[#272727] transition-all duration-300 text-white   px-6 py-3 font-bold text-xs rounded-md'>{user.firstName + " " + user.lastName[0] + '.'}</span>}
        {visibility && 
          <div className='absolute hidden md:block top-3 right-0'>
            <ProfileDropdown/>
            <X onClick={()=>setVisibility(!visibility)} className='cursor-pointer absolute top-12 z-20 right-3 text-white' size={20}/>  
          </div>
        }
      </div>

      <Menu  onClick={toggleMenu} className='text-white cursor-pointer sm:hidden' size={24}/>

     
      <div className={`bg-[#1A1A1A] absolute ${isOpen ? 'top-0':'-top-full'} w-full md:hidden  right-0 px-6 pb-6 pt-4 flex flex-col gap-3 transition-all duration-500`}>
        
        {!visibility && <X onClick={toggleMenu} className='text-white cursor-pointer absolute top-3 right-3' size={20}/> }        
        
        <Link href='/' className='w-1/2 flex items-center gap-1 bg-[#303030]  transition-all duration-300 border-dashed  border-gray-500 rounded-lg text-white text-xs  px-5 py-2'>
            Home
        </Link>

        <Link href='/products' className='w-1/2 flex items-center gap-1 bg-[#303030] transition-all duration-300 border-dashed  border-gray-500 rounded-lg text-white text-xs  px-5 py-2'>
            Products
        </Link>

        <Link href='/products/cart' className='w-1/2 relative flex items-center gap-1 bg-[#303030] transition-all duration-300 border-dashed  border-gray-500 rounded-lg text-white text-xs  px-5 py-2'>
            {/* <ShoppingCart className='text-white' size={16}/> */}
            Cart
            <span className={`absolute  justify-center items-center -top-2 right-0 ${ length > 0 ? 'flex' : 'hidden'} bg-red-500 text-white text-xs w-5 h-5 rounded-full`}>
              {length}
            </span>
        </Link>

        {user && <span id='toggler2' onClick={()=>setVisibility(!visibility)} className='cursor-pointer bg-[#303030] hover:bg-[#272727] transition-all duration-300 text-white w-1/2 overflow-ellipsis px-5 py-2 font-bold text-xs rounded-lg'>{user.firstName}</span>}
        {visibility && 
          <div className='absolute z-50  md:hidden top-3 right-0'>
            <ProfileDropdown/>
            <X onClick={()=>setVisibility(!visibility)} className='cursor-pointer absolute top-12 z-50 right-3 text-white' size={20}/>  
          </div>
        }

      </div>
      
    </div>
  )
}

export default Header
