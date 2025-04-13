import React from 'react'
import Image from 'next/image';

interface ServiceProps{
    title:string;
    description:string;
    icon:string;
}

const Services = ({props}:{props:ServiceProps}) => {
  return (
    <div className='border-l-2 border-b-2 border-dashed border-[#171717]  p-5 flex flex-col gap-3'>
      <div className='border-[#6766651f]  flex justify-center items-center rounded-full h-14 w-14 border-2 border-dashed'>
          <p className='bg-[#6766650e]  rounded-full h-10 w-10 flex justify-center items-center '>
              <Image className='' src={props.icon} width={20} height={20} alt='Service Icon'/>
          </p>
      </div>
      <h2 className='text-white text-lg font-bold'>{props.title}</h2>
      <p className='text-xs text-[#676665]'>{props.description}</p>
    </div>
  )
}

export default Services
