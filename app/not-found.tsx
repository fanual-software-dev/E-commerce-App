'use client'
import React from 'react'
import { RefreshCcw } from 'lucide-react'

const NotFound = () => {

    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    function refreshPage(){

        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
            window.location.reload();
        }, 1000);
        
    }


  return (
    <div className='mt-15 md:mt-35'>
        <p className='flex flex-col md:flex-row justify-center items-center gap-1  p-3 text-white'>
            <span>Opps the requested page is not found or inaccessible.</span>
            <span>Either refresh the page or visit again with the required credentials.</span>

        </p>

        <div className='flex justify-center items-center gap-5 p-5'>
            <button onClick={refreshPage} className='btn btn-lg btn-accent flex items-center gap-2'>
                <RefreshCcw className='font-bold' size={18}/>
                Refresh
            </button>
        </div>

    </div>
  )
}

export default NotFound
