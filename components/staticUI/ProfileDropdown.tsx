import React from 'react'
import Link from 'next/link'
import {
  Settings,
  LogOut,
  User,       // for Profile
  ShoppingCart, // or Package for Orders
  Heart,        // for Wishlist
  X
} from 'lucide-react';


const ProfileDropdown = () => {
  return (
    <div className='absolute z-10 top-10 right-0 w-[238px] flex flex-col gap-5 p-3 bg-[#1A1A1A] rounded-lg '>
        <Link href={'/profile'} className='flex items-center mt-8 rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <User className='text-[white]' size={18}/>
            Profile
        </Link>
        <Link href={'/orders'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <ShoppingCart className='text-[white]' size={18}/>
            Orders
        </Link>
        <Link href={'/whishlists'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <Heart className='text-[white]' size={18}/>
            Whishlists
        </Link>
        <Link href={'/settings'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <Settings className='text-[white]' size={18}/>
            Settings
        </Link>
        <Link href={'/logout'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
            <LogOut className='text-[white]' size={18}/>
            Logout
        </Link>

        
      
    </div>
  )
}

export default ProfileDropdown
