import React from 'react'
import { Star } from 'lucide-react'

const Ratings = () => {
  return (
    <>
        <div className='flex py-5'>
            <div className='p-5'>
              <span className='text-white text-2xl'>
                4.8
              </span>

              <div className='flex gap-1 my-2'>

                <Star className='fill-amber-400 stroke-amber-400' size={14}/>
                <Star className='fill-amber-400 stroke-amber-400' size={14}/>
                <Star className='fill-amber-400 stroke-amber-400' size={14}/>
                <Star className='fill-amber-400 stroke-amber-400' size={14}/>
                <Star className='fill-amber-400 stroke-amber-400' size={14}/>
                
              </div>

              <span className='text-[#81807E] text-xs'>
                49 Ratings  
              </span>

            </div>
            <div className='pl-4 md:pl-8 flex flex-col gap-3'>
              <div className='flex gap-2 items-center'>
                <Star className='fill-amber-400 stroke-amber-400' size={14}/>
                <span className='text-[#81807E] text-xs'>05</span>
                <p className='w-40 lg:w-50 h-3 bg-[#1A1A1A] rounded-full px-2 py-1 flex items-center justify-between'>
                  <span className='inline-block h-1 bg-[#AE9B84] rounded-full w-full'></span>
                </p>
              </div>

              <div className='flex gap-2 items-center'>
                <Star className='fill-amber-400 stroke-amber-400' size={14}/>
                <span className='text-[#81807E] text-xs'>04</span>
                <p className='w-40 lg:w-50 h-3 bg-[#1A1A1A] rounded-full px-2 py-1 flex items-center justify-between'>
                  <span className='inline-block h-1 bg-[#AE9B84] rounded-full w-4/5'></span>
                </p>
              </div>

              <div className='flex gap-2 items-center'>
                <Star className='fill-amber-400 stroke-amber-400' size={14}/>
                <span className='text-[#81807E] text-xs'>03</span>
                <p className='w-40 lg:w-50 h-3 bg-[#1A1A1A] rounded-full px-2 py-1 flex items-center justify-between'>
                  <span className='inline-block h-1 bg-[#AE9B84] rounded-full w-3/5'></span>
                </p>
              </div>

              <div className='flex gap-2 items-center'>
                <Star className='fill-amber-400 stroke-amber-400' size={14}/>
                <span className='text-[#81807E] text-xs'>02</span>
                <p className='w-40 lg:w-50 h-3 bg-[#1A1A1A] rounded-full px-2 py-1 flex items-center justify-between'>
                  <span className='inline-block h-1 bg-[#AE9B84] rounded-full w-2/5'></span>
                </p>
              </div>

              <div className='flex gap-2 items-center'>
                <Star className='fill-amber-400 stroke-amber-400' size={14}/>
                <span className='text-[#81807E] text-xs'>01</span>
                <p className='w-40 lg:w-50 h-3 bg-[#1A1A1A] rounded-full px-2 py-1 flex items-center justify-between'>
                  <span className='inline-block h-1 bg-[#AE9B84] rounded-full w-1/5'></span>
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Ratings
