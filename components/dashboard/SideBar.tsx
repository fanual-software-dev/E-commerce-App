'use client'
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import {
  User,       // for Profile
  ShoppingCart, // or Package for Orders
  BarChart,
  Tag,
  PackageMinus,
  LayoutTemplate,
  Ticket,
  ArrowRightCircle,
  ArrowLeftCircle
} from 'lucide-react';

const SideBar = () => {
    const [openSideBar,setOpenSideBar] = useState<boolean>(false)

    useEffect(()=>{
        const toggler = ()=>{

            // const clickListener = (e: MouseEvent)=>{
            //     if (!e.target || (e.target as HTMLElement).id!=="sideBarOpener"){
                    
            //         setOpenSideBar(false)
            //     }
            
            // }

            // document.addEventListener('click',clickListener)

            const scrollListener = ()=>{
                setOpenSideBar(false)
            
            }

            window.addEventListener('scroll',scrollListener)

            return () => {
                window.removeEventListener('scroll',scrollListener); 
                // document.removeEventListener('click',clickListener)
            }
        }

        toggler();
    },[openSideBar])

  return (
    <div>
        <div className={`fixed xl:absolute z-10 top-0 ${openSideBar ? 'left-0':'-left-full'} transition-all duration-500 xl:left-0 h-screen w-[238px] flex flex-col gap-5 p-3 bg-[#1A1A1A] rounded-lg `}>
            <h1 className='text-white text-2xl text-center mt-8'>Sheba Market</h1>
            <Link href={'/admin-dashboard/users'} className='flex items-center mt-8 rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
                <User className='text-[white]' size={18}/>
                Users
            </Link>
            <Link href={'/admin-dashboard/products'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
                <PackageMinus className='text-[white]' size={18}/>
                Products
            </Link>
            <Link href={'/admin-dashboard/orders'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
                <ShoppingCart className='text-[white]' size={18}/>
                Orders
            </Link>
            <Link href={'/admin-dashboard/analytics'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
                <BarChart className='text-[white]' size={18}/>
                Analytics
            </Link>
            <Link href={'/admin-dashboard/promotions'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
                <Tag className='text-[white]' size={18}/>
                Promotions/Discounts
            </Link>
             <Link href={'/admin-dashboard/content-management'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
                <LayoutTemplate className='text-[white]' size={18}/>
                Content Management
            </Link>
             <Link href={'/admin-dashboard/support'} className='flex items-center rounded-md p-2 bg-[#303030] gap-2 text-xs text-[#B3B3B2] hover:text-white'>
                <Ticket className='text-[white]' size={18}/>
                Support and Tickets
            </Link>
        
        
        </div>

        <span id='sideBarOpener' onClick={()=>setOpenSideBar(!openSideBar)} className={`xl:hidden p-0.5 rounded-full bg-sky-400 fixed cursor-pointer z-50 md:bottom-15 left-1 sm:left-3`}>
            {openSideBar ? <ArrowLeftCircle className='text-white'/> : <ArrowRightCircle className='text-white' size={24}/>}
        </span>
    </div>
  )
}

export default SideBar
