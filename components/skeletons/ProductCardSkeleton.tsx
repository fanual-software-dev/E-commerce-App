import React from 'react'
import './styles/shimmer.css'

const ProductCardSkeleton = () => {
  return (
        <div 
        className={`w-full p-3 border-dashed border-2  border-[#171717] border-r-0 md:border-l-0`}
    >
        <div className=' relative overflow-hidden w-full h-40 bg-[#1A1A1A] rounded-tl-lg rounded-tr-lg' >
            
            <span className='shimmer'></span>
        </div> 

        <div 
            className='w-full flex justify-between items-center mt-5'
        >
            
            <p className='relative overflow-hidden bg-[#1A1A1A] w-1/3  h-2 rounded-3xl'>
                <span className='shimmer py-1'></span>
            </p>
            
            
            <p className='relative overflow-hidden bg-[#1A1A1A] w-1/3  h-2 rounded-3xl'>
                <span className='shimmer py-1'></span>
            </p>

        </div>

        {/* <p className=' px-3 py-2 text-xs text-[#B3B3B2] mt-3'>{props.subCategory}</p> */}

        <p className='relative overflow-hidden m-5 bg-[#1A1A1A] h-2 w-1/2 rounded-md'>
            <span className='shimmer p-1'></span>
        </p>

        <div className='flex justify-between items-center mt-3'>
            
            <p className='bg-[#1A1A1A] relative overflow-hidden h-2 w-1/3 rounded-md'><span className='shimmer p-1'></span></p>
            <p className='bg-[#1A1A1A] relative overflow-hidden h-2 w-1/3 rounded-md'><span className='shimmer p-1'></span></p>
        
        </div>
    </div>
  )
}

export default ProductCardSkeleton
