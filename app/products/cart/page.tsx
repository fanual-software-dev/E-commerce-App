'use client'
import React, { useMemo } from 'react'
import Cart from '@/components/products/Cart'
import { useCartStore } from '@/contexts/CartStore'


const Cartpage = () => {
  const now = new Date()
  const formattedDate = now.toLocaleString()

  const cartItems = useCartStore((state)=>state.cartItems)
  const subTotal = useMemo(()=>cartItems.reduce((total,item)=>(total+=(item.price*item.quantity)),0),[cartItems])
  const totalItems = useMemo(()=>cartItems.reduce((total,item)=>(total+=item.quantity),0),[cartItems])
  const totalAmount = useMemo(()=>subTotal+(subTotal*0.15),[subTotal])



  return (
    <div className='mt-15  gap-8 p-5'>
      <h1 className='text-white text-xl md:text-3xl'>Shopping Cart</h1>

    { cartItems.length>0 ? <div className='mt-10 md:mt-0 flex flex-col gap-16 md:gap-0 md:flex-row justify-between items-start'>
        
        <div className=' md:w-3/5'>
          <div className='w-full hidden md:grid md:grid-cols-6 bg-[#000000]  shadow-md shadow-[#1b1b1b] p-5 gap-5 mt-10'>
            <h1 className='text-white text-xs'>Product</h1>
            <h1 className='text-white text-xs'>Name</h1>
            <h1 className='text-white text-xs'>Price</h1>
            <h1 className='text-white text-xs'>Quantity</h1>
            <h1 className='text-white text-xs'>Subtotal</h1>
            <h1 className='text-white text-xs'>Remove</h1>
          </div>

          {cartItems.map((item,id) => (
            <Cart {...item} key={id}/>
          ))}
        </div>

        <div className=' shadow-[#414141] shadow-xs border box-border rounded-lg flex flex-col gap-5 w-full h-100 md:w-auto md:mt-10  p-6'>
          <h1 className='text-white rounded-lg mb-5 shadow-md shadow-[#202020] p-2 text-center text-lg font-bold'>Cart Totals</h1>
          <p className='text-white text-xs'>
            Total items: <span>{totalItems}</span>
          </p>

          <p className='text-white text-xs'>
            Subtotal amount: <span>Birr {subTotal}</span>
          </p>

          <p className='text-white text-xs'>
            VAT: <span>15%</span>
          </p>

          <p className='text-white text-xs'>
            Total amount: <span>Birr {totalAmount} </span>
          </p>

          <p className='text-white text-xs'>
            Last updated: <span>{formattedDate}</span>
          </p>

          <button className='w-full text-white  btn btn-sm md:btn-md btn-warning mt-8'>
            Checkout
          </button>

        </div>
      </div> : 
      <div className='mt-15 flex flex-col gap-5'>
        
        <h1 className='text-white text-center'>No items added to your cart yet.</h1>
        <p className='text-white text-center'>Add your choices to the cart now and ask for delivery.</p>
        
      </div>
      }
    </div>
  )
}

export default Cartpage
