import React from 'react'
import './styles/shimmer.css'

const ProductCardAdminSkeleton = () => {
  return (
    <div draggable className={`transition-all duration-300 border-[#373737] border shadow-[#303030] p-3 flex flex-col md:p-0 shadow-xs rounded-xl mt-5 gap-3  md:gap-5  md:grid md:grid-cols-5`}>
            
            <div className='flex justify-center md:justify-start md:p-2 items-center'>
                <div className='relative bg-[#1A1A1A] overflow-hidden w-full h-auto sm:w-1/2 md:w-20 md:h-20'>
                    <span className='shimmer'></span>
                </div>
            </div>
            
            <div className='flex gap-1 mt-3 md:mt-0 justify-start items-center'>
                <p className='w-1/2 relative bg-[#1A1A1A] overflow-hidden  h-3 rounded-md inline-block md:hidden text-white text-xs'>
                    <span className='shimmer'></span>
                </p>
                <p className='w-1/2 md:w-full relative bg-[#1A1A1A] overflow-hidden h-3 rounded-md text-white text-xs'>
                    <span className='shimmer'></span>
                </p>
            </div>
            
            <div className='flex justify-start gap-1 items-center'>
                <span className='w-1/2 md:w-full h-2 overflow-hidden relative bg-[#1A1A1A] rounded-md inline-block md:hidden text-xs text-white'>
                    <span className='shimmer'></span>
                </span>
                <p className='w-1/2 md:w-full relative overflow-hidden h-3 rounded-md bg-[#1A1A1A] text-white text-xs'>
                    <span className='shimmer'></span>
                </p>
            </div>
    
            <div className='flex justify-start gap-1 pr-3 items-center border-[#373737] border-r'>
                <p className='w-1/2 md:w-full relative overflow-hidden h-3 rounded-md bg-[#1A1A1A] inline-block md:hidden text-xs text-white'>
                    <span className='shimmer'></span>
                </p>
                <p className='w-1/2 md:w-full relative overflow-hidden text-white bg-[#1A1A1A] h-3 rounded-md text-xs'>
                    <span className='shimmer'></span>
                </p>
            </div>
            
            <div className='flex justify-between gap-5 pr-3 items-center'>
                
                <p className='relative overflow-hidden cursor-pointer bg-[#1A1A1A] md:shadow-[#303030] shadow-md  text-white rounded-md w-1/3 md:w-10/12 h-8'>
                    <span className='shimmer'></span>
                </p>
    
                <p className='relative overflow-hidden cursor-pointer bg-[#1A1A1A] md:shadow-[#303030] shadow-md  text-white rounded-md w-1/3 md:w-10/12 h-8'>
                    <span className='shimmer'></span>
                </p>
            </div>
    
           
        </div>
  )
}

export default ProductCardAdminSkeleton
