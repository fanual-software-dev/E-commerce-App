import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from "lucide-react";
import { ProductType } from '@/utils/lib/types';


const ProductCard = ({props}:{props:ProductType}) => {
  return (
    <div 
        className={`w-full p-3 border-dashed border-2  border-[#171717] border-r-0 md:${props.averageRating === 0 ? 'border-l-0' : 'border-l-0'}`}
    >
        <Image 
            className='w-full rounded-tl-lg rounded-tr-lg' 
            src={props.variants[0].images[0]} 
            alt="Product Image" 
            width={300}
            height={300}
        />

        <div 
            className='w-full flex justify-between items-center mt-5'
        >
            
            <p className='bg-[#1A1A1A] px-3 py-2 text-xs text-[#B3B3B2] rounded-3xl'>{props.category}</p>
            
            
            <Link href='/' className='bg-[#1A1A1A] text-[#B3B3B2] p-2 text-xs rounded-lg flex items-center gap-1'>
                Shop Now
                <ArrowUpRight className='text-[#B3B3B2]' size={18}/>

            </Link>

        </div>

        {/* <p className=' px-3 py-2 text-xs text-[#B3B3B2] mt-3'>{props.subCategory}</p> */}

        <p className='mt-5 text-sm text-white'>{props.name}</p>

        <div className='flex justify-between items-center mt-3'>
            
            <p className='text-xs  text-[#B3B3B2]'><span>Fit : </span> {props.variants[0].size}</p>
            <p className='text-xs  text-[#B3B3B2]'><span>Price : </span> Birr {props.variants[0].price}</p>
        
        </div>
    </div>
  )
}

export default ProductCard
