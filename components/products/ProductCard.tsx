import React from 'react'
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";


interface ProductCardProps {
    imgPath: string;
    clothType: string;
    clothName: string;
    price: number;
    fit: string;
    key:number
}

const ProductCard = ({props}:{props:ProductCardProps}) => {
  return (
    <div 
        className={`w-full p-3 border-dashed border-2  border-[#171717] border-r-0 md:${props.key%4 === 0 ? 'border-l-0' : ''}`}
    >
        <img 
            className='w-full rounded-tl-2xl rounded-tr-2xl' 
            src={props.imgPath} 
            alt="Product Image" 
        />

        <div 
            className='w-full flex justify-between items-center mt-5'
        >
            
            <p className='bg-[#1A1A1A] px-3 py-2 text-xs text-[#B3B3B2] rounded-3xl'>{props.clothType}</p>
            
            <Link href='/' className='bg-[#1A1A1A] text-[#B3B3B2] p-2 text-xs rounded-lg flex items-center gap-1'>
                Shop Now
                <ArrowUpRight className='text-[#B3B3B2]' size={18}/>

            </Link>

        </div>

        <p className='mt-5 text-sm text-white'>{props.clothName}</p>

        <div className='flex justify-between items-center mt-3'>
            
            <p className='text-xs  text-[#B3B3B2]'><span>Fit : </span> {props.fit}</p>
            <p className='text-xs  text-[#B3B3B2]'><span>Price : </span> Birr {props.price}</p>
        
        </div>
    </div>
  )
}

export default ProductCard
