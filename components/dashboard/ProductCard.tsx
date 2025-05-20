import React from 'react'
import { ProductType } from '@/utils/lib/types'
import Image from 'next/image'

const ProductCard = ({product}:{product:ProductType}) => {
  return (
    <div draggable className={`transition-all duration-300 border-[#373737] border bg-[#101010] shadow-[#303030] p-3 flex flex-col md:p-0 shadow-xs rounded-xl mt-5 gap-3  md:gap-5  md:grid md:grid-cols-6`}>
        
        <div className='flex justify-center md:justify-start md:p-2 items-center'>
            <Image
                src={product.variants[0].images[0]} 
                sizes='(max-width: 768px) 100vw' 
                width={80} 
                height={80} 
                alt='Product Image'
                className='w-full rounded-md h-auto sm:w-1/2 md:w-20 md:h-20'
            />
        </div>
        
        <div className='flex gap-1 mt-3 md:mt-0 justify-start items-center'>
            <span className='inline-block md:hidden text-white text-xs'>Name:</span>
            <p className='text-white text-xs'>{product.name}</p>
        </div>
        
        <div className='flex justify-start gap-1 items-center'>
            <span className='inline-block md:hidden text-xs text-white'>Price:</span>
            <p className='text-white text-xs'>Birr {product.variants[0].price}</p>
        </div>

        <div className='flex justify-start gap-1 items-center'>
            <span className='inline-block md:hidden text-xs text-white'>Category:</span>
            <p className='text-white text-xs'>{product.category}</p>
        </div>

        <div className='flex justify-start gap-1 items-center border-[#373737] border-r'>
            <span className='inline-block md:hidden text-xs text-white'>Total Stock:</span>
            <p className='text-white text-xs'>{product.totalStock}</p>
        </div>
        
        <div className='flex justify-between gap-5 pr-3 items-center'>
            
            <button className='text-center text-xs  bg-[#121212] hover:bg-[#1A1A1A]  text-amber-400 cursor-pointer md:shadow-[#303030] shadow-md  rounded-md w-1/3 md:w-10/12 p-1   md:p-2 '>
                Edit
            </button>

            <button className='text-center text-xs   bg-[#121212] hover:bg-[#1A1A1A]  text-red-500 cursor-pointer md:shadow-[#303030] shadow-md  rounded-md w-1/3 md:w-10/12 p-1   md:p-2 '>
                Delete
            </button>
        </div>

       
    </div>
  )
}

export default ProductCard
