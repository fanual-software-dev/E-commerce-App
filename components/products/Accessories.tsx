'use client'
import React, { useState,useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import ProductCardSkeleton from '../skeletons/ProductCardSkeleton'
import ProductCard from './ProductCard'
import { ArrowUpRight } from "lucide-react";
import { baseAPI } from '@/schemas/AxiosInstance'
import { ProductType } from '@/utils/lib/types'


function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    const pathname = usePathname();
    const isActive = pathname === href; // Check if the link is active
   
  
    return (
      <Link
        href={href}
        className={`border-2 border-[#171717] border-dashed rounded-lg  text-xs px-4 py-2 ${
          isActive ? "bg-[#C7BAAA] border-none text-black" : "bg-transparent text-white"
        }`}
      >
        {children}
      </Link>
    );
  }

const Accessories = () => {
    const [priceRange,setPrinceRange] = useState<string>("10")
    const [accessories,setAccessories] = useState<ProductType[]>([])
    const [loading,setLoading] = useState<boolean>(true)
    const [productNotFound,setProductNotFound] = useState<boolean>(false)
    const [error,setError] = useState<string>("")
    const skeletonArray = [1,2,3,4,5,6,7,8]

    useEffect(()=>{
        const fetchProduct = async ()=>{
            console.log("fetching product")
            setError("")
            setProductNotFound(false)
            const serverResponse = await baseAPI.get('/api/product/getProducts',{
                params: {
                    category: 'Accessory',
                },
                withCredentials: false,
            })
            console.log(serverResponse.data,"server response")

            if (serverResponse.status === 200) {
                const data = serverResponse.data.data
                if (data.length === 0) {
                    setProductNotFound(true)
                }
                setLoading(false)
                setError("")
                setAccessories(data)

            } else {
                setProductNotFound(false)
                setLoading(false)
                setError("Failed to fetch products");
                
            }
        }

        fetchProduct();
    },[])


    return (
        <div className='rounded-xl p-3 md:p-5 border-dashed border-[#171717] border-2 my-5 md:my-16'>
        <div className='flex flex-col gap-4'>
            <h1 className="text-xl md:text-3xl font-bold text-white">
                Sheba Market: The Details Matter
            </h1>
            <p className="text-gray-200 text-xs">Browse our diverse range of accessories to find those unique pieces that truly reflect your personal flair.</p>
        </div>

        <div className='flex flex-wrap gap-4 mt-8'>
            <NavLink href="/products/accessories/all">All</NavLink>
            <NavLink href='/products/accessories/jewelery'>Jewelery</NavLink>
            <NavLink href='/products/accessories'>Bags</NavLink>
            <NavLink href='/products/accessories/watches'>Watches</NavLink>
            <NavLink href='/products/accessories/hats'>Hats</NavLink>
            <NavLink href='/products/accessories/glasses'>Glasses</NavLink>
            <NavLink href='/products/accessories/others'>Others</NavLink>
        </div>

        <div className='hidden md:block w-full bg-[#C2B4A3] mt-8 px-3 md:px-5 pt-3 rounded-2xl'>
            <p>FILTERS</p>

            <div className='p-3 md:p-5 flex flex-col gap-5'>
                
                <div className='grid grid-cols-2 md:flex  md:justify-center items-center gap-5'>
                    
                    <select
                        name="" 
                        id=""
                        className='w-full md:w-1/3 outline-none bg-white border-dashed border-gray-500 rounded-lg text-black text-xs py-3 px-2 '
                    >
                        <option value="">Sort By</option>
                        <option value="">Price</option>

                    </select>

                    <select 
                        name="" 
                        id=""
                        className='w-full md:w-1/3 outline-none bg-white border-dashed border-gray-500 rounded-lg text-black text-xs py-3 px-2 '
                    >
                        <option value="">Category</option>
                    </select>
                    
                    <select 
                        name="" 
                        id=""
                        className='col-span-full md:w-1/3 outline-none bg-white border-dashed border-gray-500 rounded-lg text-black text-xs py-3 px-2 '
                    >
                        <option value="">Brand</option>
                    </select>

                </div>

                <div className='grid grid-cols-2 md:flex justify-center items-center gap-5'>
                    
                    <select
                        name="" 
                        id=""
                        className='w-full md:w-1/3 outline-none bg-white border-dashed border-gray-500 rounded-lg text-black text-xs py-3 px-2 '
                    >
                        <option value="">Color</option>

                    </select>

                    <select 
                        name="" 
                        id=""
                        className='w-full md:w-1/3 outline-none bg-white border-dashed border-gray-500 rounded-lg text-black text-xs py-3 px-2 '
                    >
                        <option value="">Style</option>
                    </select>
                    
                    <div className='col-span-full md:w-1/3'>
                        <div className=' w-full flex justify-between mb-2'>
                            <label className='text-xs text-black' htmlFor="">Price Range Selected</label>
                            <p className='text-xs'>Birr 1 - {priceRange}</p>
                        </div>
                        <input
                            type="range"
                            className='w-full accent-black'
                            value={priceRange}
                            min="1"
                            max="10000"
                            onChange={(e)=>setPrinceRange(e.target.value)} 
                        />
                    </div>

                </div>

            </div>

        </div>

        <div className='mt-12 md:mt-24'>
            
            <div className='flex mb-3 justify-between items-center'>
                <p className=' font-bold  text-slate-100'>TRENDING</p>
                <Link href='/' className='bg-[#1A1A1A] px-3 py-2 rounded-xl text-xs text-[#B3B3B2] flex items-center'>
                    VIEW ALL
                    <ArrowUpRight className='text-[#B3B3B2]' size={18}/>
                </Link>
            </div>

            {productNotFound && (
                <p className='text-center text-white'>No products found for this category</p>)
            }
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-2'>
                {accessories.map((item:ProductType, index:number) => (
                    <ProductCard
                    key={index}
                    props={item}
                    />
                ))}

                {loading && skeletonArray.map((index:number) => (
                    <ProductCardSkeleton key={index}/>
                ))}
            </div>
        </div>

        <div className='mt-12 md:mt-24'>
            
            <div className='flex mb-3 justify-between items-center'>
                <p className=' font-bold  text-slate-100'>NEWEST</p>
                <Link href='/' className='bg-[#1A1A1A] px-3 py-2 rounded-xl text-xs text-[#B3B3B2] flex items-center'>
                    VIEW ALL
                    <ArrowUpRight className='text-[#B3B3B2]' size={18}/>
                </Link>
            </div>

            {productNotFound && (
                <p className='text-center text-white'>No products found for this category</p>)
            }
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-2'>
                {accessories.map((item:ProductType, index:number) => (
                    <ProductCard
                    key={index}
                    props={item}
                    />
                ))}

                {loading && skeletonArray.map((index:number) => (
                    <ProductCardSkeleton key={index}/>
                ))}
            </div>
        </div>

        <div className='mt-12 md:mt-24'>
            
            <div className='flex mb-3 justify-between items-center'>
                <p className=' font-bold  text-slate-100'>ON SALES</p>
                <Link href='/' className='bg-[#1A1A1A] px-3 py-2 rounded-xl text-xs text-[#B3B3B2] flex items-center'>
                    VIEW ALL
                    <ArrowUpRight className='text-[#B3B3B2]' size={18}/>
                </Link>
            </div>

            {productNotFound && (
                <p className='text-center text-white'>No products found for this category</p>)
            }
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-y-2'>
                {accessories.map((item:ProductType, index:number) => (
                    <ProductCard
                    key={index}
                    props={item}
                    />
                ))}

                {loading && skeletonArray.map((index:number) => (
                    <ProductCardSkeleton key={index}/>
                ))}
            </div>
        </div>

        </div>
    )
}

export default Accessories
