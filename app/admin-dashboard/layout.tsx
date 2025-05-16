'use client'
import SideBar from '@/components/dashboard/SideBar'
import { useUserStore } from '@/contexts/UserStore'
import React from 'react'

const layout = ({children}:{children: React.ReactNode}) => {

    const user= useUserStore(state=>state.user)

  return (
    <div className='w-full min-h-screen'>
        {user?.isAdmin && <SideBar/>}
        {children}
    </div>
  )
}

export default layout
