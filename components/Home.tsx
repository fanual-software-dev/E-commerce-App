'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ServicesData from '@/ServicesData.json'
import Services from './Services'
import { ArrowUpRight } from "lucide-react";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href; // Check if the link is active
   
  
    return (
      <Link
        href={href}
        className={`border-2 border-[#171717] border-dashed rounded-lg  text-xs px-4 py-2 ${
          isActive ? "bg-[#C7BAAA] border-none text-black" : "bg-transparent text-[#676665]"
        }`}
      >
        {children}
      </Link>
    );
  }

const Home = () => {
  return (
    <>
        <div className='border-2 px-5 border-dashed border-[#171717] flex flex-col gap-5 p-3 md:mt-15'>
            <div className='flex justify-center'>
                <Image src="/homepic.svg" width={600} height={600} alt='Instagram icon'/>
            </div>
            <div className='flex  md:justify-center flex-wrap md:flex-nowrap gap-4 mt-8'>
                <NavLink href="/products/clothes/all">All</NavLink>
                <NavLink href='/products/clothes/men'>Men's</NavLink>
                <NavLink href='/products/clothes'>Women's</NavLink>
                <NavLink href='/products/clothes/kid'>Kid's</NavLink>
                <NavLink href='/products/clothes/kid'>Men's Footwear</NavLink>
                <NavLink href='/products/clothes/kid'>Women's Footwear</NavLink>
                <NavLink href='/products/clothes/kid'>Accessories</NavLink>
                <NavLink href='/products/clothes/kid'>Electronics</NavLink>
            </div>
            <h1 className='text-xl px-5 md:text-2xl font-bold text-white mt-5'>
                Elevate Your Style with Sheba Market
            </h1>
            <p className='text-xs px-5 text-[#676665]'>
                Explore a world of fashion at Sheba Market, where trends meet affordability. Immerse yourself in the latest styles and seize exclusive promotions.
            </p>
            <h1 className='text-xl px-5 md:text-2xl font-bold text-white mt-5'>
                Crafting Trends, Inspiring Confidence
            </h1>
            <p className='text-xs px-5 text-[#676665]'>
                Explore a world of fashion at Sheba Market.
            </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md lg:grid-cols-3  mt-8'>
            {ServicesData.map((service,index)=>(
                <Services key={index} props={service} />
            ))}
        </div>

        <div className='border-2 rounded-lg border-dashed border-[#171717] mt-25 '>
            <p className='flex flex-col gap-5 p-5 md:p-10'>
                <span className='text-white text-xl md:text-2xl font-bold'>
                    Navigating Sheba Markets Fashion Journey.
                </span>

                <span className='text-xs text-[#676665]'>
                    At Sheba Market, we've designed a straightforward shopping experience to make fashion accessible.
                </span>
            </p>
            <div className='grid items-stretch grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  mt-8'>
                <div className='flex border-t-2  border-dashed border-[#171717] flex-col gap-5 p-5'>
                    <span className='text-xs text-[#676665]'>Step 01</span>
                    <h1 className='text-lg md:text-xl font-bold text-white mt-5'>
                        Discover Trends
                    </h1>
                    <p className='text-xs text-[#676665]'>
                        Explore our curated collection of over 1000 styles, spanning global fashion trends.
                    </p>
                </div>

                <div className='flex flex-col border-t-2 border-x-2 border-dashed border-[#171717]  gap-5 p-5'>
                    <span className='text-xs text-[#676665]'>Step 02</span>
                    <h1 className='text-lg md:text-xl font-bold text-white mt-5'>
                        Effort Navigation
                    </h1>
                    <p className='text-xs text-[#676665]'>
                        Intuitive filters and categories help you find the perfect pieces tailored to your style.
                    </p>
                </div>

                <div className='flex flex-col border-t-2 border-r-2 border-dashed border-[#171717]  gap-5 p-5'>
                    <span className='text-xs text-[#676665]'>Step 03</span>
                    <h1 className='text-lg md:text-xl font-bold text-white mt-5'>
                        Secure Checkout
                    </h1>
                    <p className='text-xs text-[#676665]'>
                        Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase.
                    </p>
                </div>

                <div className='flex flex-col border-t-2 border-dashed border-[#171717]  gap-5 p-5'>
                    <span className='text-xs text-[#676665]'>Step 04</span>
                    <h1 className='text-lg md:text-xl font-bold text-white mt-5'>
                        Unbox Happiness
                    </h1>
                    <p className='text-xs text-[#676665]'>
                        Unbox a fashion-forward experience delivered right to your door, ready to elevate your style.
                    </p>
                </div>
            
            </div>
        </div>

        <div className='border-2 rounded-lg border-dashed border-[#171717] mt-25 '>
            <div className='flex flex-col gap-5 p-5 md:p-10'>
                <span className='text-white text-xl md:text-2xl font-bold'>
                    HAVE QUESTIONS? WE HAVE ANSWERS.
                </span>

                <span className='text-xs text-[#676665]'>
                    Ease into the world of Sheba Market with clarity. Our FAQs cover a spectrum of topics.
                </span>

                <div className='flex flex-wrap md:flex-nowrap gap-4 mt-8'>
                    <NavLink href="/products/clothes/all">All</NavLink>
                    <NavLink href='/products/clothes/men'>Ordering</NavLink>
                    <NavLink href='/'>Shipping</NavLink>
                    <NavLink href='/products/clothes/kid'>Returns</NavLink>
                    <NavLink href='/products/clothes/kid'>Support</NavLink>
                </div>
            </div>

            <div className='grid items-stretch grid-cols-1 sm:grid-cols-2  mt-8'>
                <div className='flex border-t-2  border-dashed border-[#171717] flex-col gap-5 p-5'>

                    <h1 className='  text-white mt-5'>
                        How can I place an order on Sheba Market?
                    </h1>
                    <p className='text-xs text-[#676665]'>
                        Ordering is easy! Simply browse our website, add items to your cart, and proceed to checkout. Follow the prompts to enter your details and complete your purchase
                    </p>
                </div>

                <div className='flex flex-col border-t-2 border-l-2 border-dashed border-[#171717]  gap-5 p-5'>

                    <h1 className=' text-white mt-5'>
                        Can I modify or cancel my order after placing it?
                    </h1>
                    <p className='text-xs text-[#676665]'>
                        Unfortunately, once an order is confirmed, modifications or cancellations may not be possible. Please review your order carefully before completing the purchase.
                    </p>
                </div>

                <div className='flex flex-col border-t-2 border-dashed border-[#171717]  gap-5 p-5'>
 
                    <h1 className=' text-white mt-5'>
                        What payment methods do you accept?
                    </h1>
                    <p className='text-xs text-[#676665]'>
                        We accept a variety of payment methods, including mobile banking, chapa, and tele birr. Choose the option that suits you best during checkout.
                    </p>
                </div>

                <div className='flex flex-col border-t-2 border-l-2 border-dashed border-[#171717]  gap-5 p-5'>
                    
                    <h1 className=' text-white mt-5'>
                        How do I initiate a return?
                    </h1>
                    <p className='text-xs text-[#676665]'>
                        Visit our Returns page and follow the provided instructions. Ensure your item meets our return criteria, and our team will guide you through the process.
                    </p>
                </div>

                <div className='flex flex-col border-t-2 border-dashed border-[#171717]  gap-5 p-5'>
                    
                    <h1 className=' text-white mt-5'>
                        How can I track my order?
                    </h1>
                    <p className='text-xs text-[#676665]'>
                        Once your order is dispatched, you'll receive a tracking number via email. Use this number to track your package in real-time on our website.
                    </p>
                </div>

                <div className='flex flex-col border-t-2 border-l-2 border-dashed border-[#171717]  gap-5 p-5'>
                    
                    <h1 className=' text-white mt-5'>
                        Do you offer exchanges for products?
                    </h1>
                    <p className='text-xs text-[#676665]'>
                        At this time, we don't offer direct product exchanges. If you'd like a different item, please initiate a return and place a new order.
                    </p>
                </div>
            
            </div>
        </div>

        <div className='mx-1 gap-5 lg:gap-0 md:ml-4 lg:ml-0 flex flex-col sm:flex-row justify-between items-center mt-25 bg-[#C2B4A3] p-5 md:p-15 rounded-lg'>
            
            <div className='w-4/5 flex flex-col gap-2 lg:w-auto'>
                <h1 className='text-[#0F0F0F] text-xl sm:text-3xl font-bold'>
                    ELEVATE YOUR WARDROBE
                </h1>

                <p className='text-[#0F0F0F] text-xs'>
                    Don't miss out – experience the epitome of fashion by clicking 'Buy Now' and embrace a world of chic elegance delivered to your doorstep. Your style journey begins here.
                </p>
            </div>

            <Link href='/' className='w-36 gap-2 bg-[#1F1F1F] px-3 py-2 rounded-md text-xs text-white flex justify-center items-center'>
                SHOP NOW
                <ArrowUpRight className='text-white' size={24} strokeWidth={1}/>
            </Link>

        </div>

        
    </>
  )
}

export default Home
