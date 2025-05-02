'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import {Minus,Plus,Trash2} from 'lucide-react'
import { CartItem, useCartStore } from '@/contexts/CartStore'

const Cart = (props:CartItem) => {
    
    // const [ itemQuantity, setItemQuantity ] = React.useState<number>(1)

    // const handleIncrement = () => {
    //     setItemQuantity(itemQuantity + 1) 
    // }

    // const handleDecrement = () => {
    //     if (itemQuantity > 0) {
    //     setItemQuantity(itemQuantity - 1)
    //     }
    // } 

    const decreaseItemQun = useCartStore((state)=>state.decreaseItemQun)
    const increaseItemQun = useCartStore((state)=>state.increaseItemQun)
    
    const removeFromCart = useCartStore(state=>state.removeFromCart)

    useEffect(()=>{
        if(props.quantity===0){
            removeFromCart(props.id)
        }
    },[props.quantity])


  return (
    <div draggable className={`transition-all duration-300 border shadow-[#303030] shadow-xs rounded-xl mt-8  gap-5  grid grid-cols-6`}>
        
        <div className='flex justify-start p-2 items-center'>
            <Image src={props.imgUrl} width={80} height={80} alt=''/>
        </div>
        
        <div className='flex justify-start items-center'>
            <p className='text-white text-xs'>{props.name}</p>
        </div>
        
        <div className='flex justify-start items-center'>
            <p className='text-white text-xs'>Birr {props.price}</p>
        </div>
        
        <div className='flex justify-start items-center'>
            <button className='flex text-xs items-center justify-between gap-2 bg-[#0f0f0f] shadow-[#303030] shadow-md  text-white rounded-md w-10/12   p-2 '>
                <Minus onClick={()=>decreaseItemQun(props.id)} className='text-white text-base cursor-pointer' size={18}/>
                {props.quantity}
                <Plus onClick={()=>increaseItemQun(props.id)} className='text-white text-base cursor-pointer' size={18}/>
            </button>
        </div>

        <div className='flex justify-start items-center'>
            <p className='text-white text-xs'>Birr {props.price*props.quantity}</p>
        </div>

        <div className='flex justify-start items-center'>
            <Trash2 onClick={()=>removeFromCart(props.id)} className='text-red-500 cursor-pointer  hover:text-red-600'  size={18}/>
        </div>
    </div>
  )
}

export default Cart
