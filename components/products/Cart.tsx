'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import {Minus,Plus,Trash2} from 'lucide-react'
import { CartItem, useCartStore } from '@/contexts/CartStore'

const Cart = (props:CartItem) => {
    

    const decreaseItemQun = useCartStore((state)=>state.decreaseItemQun)
    const increaseItemQun = useCartStore((state)=>state.increaseItemQun)
    
    const removeFromCart = useCartStore(state=>state.removeFromCart)

    useEffect(()=>{
        if(props.quantity===0){
            removeFromCart(props.id)
        }
    },[props.quantity,removeFromCart,props.id])


  return (
    <div draggable className={`transition-all duration-300 border shadow-[#303030] p-3 flex flex-col md:p-0 shadow-xs rounded-xl mt-8 gap-3  md:gap-5  md:grid md:grid-cols-6`}>
        
        <div className='flex justify-center md:justify-start md:p-2 items-center'>
            <Image
                src={props.imgUrl} 
                sizes='(max-width: 768px) 100vw' 
                width={80} 
                height={80} 
                alt=''
                className='w-full h-auto md:w-20 md:h-20'
            />
        </div>
        
        <div className='flex gap-1 mt-3 md:mt-0 justify-start items-center'>
            <span className='inline-block md:hidden text-white text-xs'>Name:</span>
            <p className='text-white text-xs'>{props.name}</p>
        </div>
        
        <div className='flex justify-start gap-1 items-center'>
            <span className='inline-block md:hidden text-xs text-white'>Price:</span>
            <p className='text-white text-xs'>Birr {props.price}</p>
        </div>
        
        <div className='flex justify-start gap-1 items-center'>
            <span className='inline-block md:hidden text-xs text-white'>Amount:</span>
            <button className='flex text-xs items-center justify-between gap-2 md:bg-[#0f0f0f] md:shadow-[#303030] shadow-md  text-white rounded-md w-1/3 md:w-10/12 p-1   md:p-2 '>
                <Minus onClick={()=>decreaseItemQun(props.id)} className='text-white text-base cursor-pointer' size={18}/>
                {props.quantity}
                <Plus onClick={()=>increaseItemQun(props.id)} className='text-white text-base cursor-pointer' size={18}/>
            </button>
        </div>

        <div className='flex justify-start gap-1 items-center'>
            <span className='inline-block md:hidden text-xs text-white'>Subtotal:</span>
            <p className='text-white text-xs'>Birr {props.price*props.quantity}</p>
        </div>

        <div className='flex justify-end md:justify-start items-center'>
            <Trash2 onClick={()=>removeFromCart(props.id)} className='text-red-500 -mt-12 md:mt-0 cursor-pointer  hover:text-red-600'  size={18}/>
        </div>
    </div>
  )
}

export default Cart
