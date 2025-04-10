import React from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'

export interface ReviewsProps {
    name:string,
    imgPath:string,
    rating:number,
    review:string,
    location:string,
    key:number
}

const Reviews = ({reiewsObject}:{reiewsObject:ReviewsProps}) => {
  return (
    <div className={`flex flex-col gap-5 p-8 ${reiewsObject.key%3==0?'':'border-l-2'} border-b-2 border-dashed border-[#171717] `}>
        <div className='flex justify-between'>
            <div className='flex items-center gap-2'>
                <Image className='rounded-full' src={reiewsObject.imgPath} width={50} height={50} alt='Profile Picture'/>
                <p className='flex flex-col gap-1'>
                    <span className='text-white'>{reiewsObject.name}</span>
                    <span className='text-[#81807E] text-xs'> {reiewsObject.location}</span>
                </p>
            </div>
            <Image src='/twitter.svg' width={20} height={20} alt='Twitter icon'/>        
        </div>

        <div className='flex gap-1 my-2'>
            
            <Star className='fill-amber-400 stroke-amber-400' size={14}/>
            <Star className='fill-amber-400 stroke-amber-400' size={14}/>
            <Star className='fill-amber-400 stroke-amber-400' size={14}/>
            <Star className='fill-amber-400 stroke-amber-400' size={14}/>
            <Star className='fill-amber-400 stroke-amber-400' size={14}/>
            
        </div>

        <p className='text-[#81807E] text-xs'>
            {reiewsObject.review}
        </p>

    </div>
  )
}

export default Reviews
