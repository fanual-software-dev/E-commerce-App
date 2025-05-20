'use client'
import { useUserStore } from '@/contexts/UserStore'
import { baseAPI } from '@/schemas/AxiosInstance'
import { ProductType } from '@/utils/lib/types'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import ProductCardAdminSkeleton from '../skeletons/ProductCardAdminSkeleton'
import AddProduct from './AddProduct'
import { X } from 'lucide-react'


const ProductManagement = () => {
    const user = useUserStore((state)=>state.user)
    const [products,setProducts] = useState<ProductType[]>([])
    const [paginationNumber,setPaginationNumber] = useState<number>(1) 
    const [error,setError] = useState<boolean | string>(false)
    const [loading,setLoading] = useState<boolean>(true)
    const [addOpen,setAddOpen] = useState<boolean>(false)
    const skeletonArray = [1,2,3,4,5,6,7,8,9,10]
    const paginationArray = [1,2,3,4,5,6,7,8,9,10]
    
    

    const PaginationButtons = ({num}:{num:number})=>{
      return (
        <button id={num + ''} className={`bg-[#1A1A1A] w-10 py-1 cursor-pointer rounded-md ${paginationNumber===num? 'bg-[#595959] ' : 'bg-[#1A1A1A]' }`}>{num}</button>
      )
    }

    const paginationHandler = (e: React.MouseEvent<HTMLDivElement>)=>{

      // Event Delegation

      e.preventDefault()

      const buttonClicked = e.target as HTMLElement
      if (buttonClicked.tagName === "BUTTON" && buttonClicked.id){
        setPaginationNumber(parseInt(buttonClicked.id))
      }
      
    }
    
    
    useEffect(()=>{
        const toggler = ()=>{

          const clickListener = (e: MouseEvent)=>{
            
            if (!e.target || ((e.target as HTMLElement).id!=="opener" && !(e.target as HTMLElement).closest('#form-container'))){
                setAddOpen(false)
            }
            
          }

          document.addEventListener('click',clickListener)

          // const scrollListener = ()=>{
          //   setAddOpen(false)
            
          // }

          // window.addEventListener('scroll',scrollListener)

          return () => {
            // window.removeEventListener('scroll',scrollListener); 
            document.removeEventListener('click',clickListener)
          }
        }

      toggler();

      const fetchAllProducts = async ()=>{
        setProducts([])
        setLoading(true)
        try {

          const allProducts = await baseAPI.get('/api/product/getProducts',{
            params:{
              page:paginationNumber
            },
          })
          const productData = allProducts.data.data
          console.log(productData,"ProductData")

          if (allProducts.status === 200 && productData.length>0){
            
            setError(false)
            setProducts(productData)

          }

          else if(allProducts.status === 200 && productData.length===0){
            setError("No product found.")
          }

          else{
            setError("Error fetching products. Please try again.")
          }
          
        } catch (err) {
          if (err instanceof Error) {
            setError(err.message)
          } else {
            setError("An unknown error occurred.")
          }
        }

        setLoading(false)
      }

      fetchAllProducts();

    },[paginationNumber])

  return (
    <div className='text-white py-8 px-2 xl:pl-24'>
      <p>Welcome Back {user?.firstName!},</p>

      <div className='mt-5 flex flex-col gap-5'>

        <div className='w-full hidden md:grid md:grid-cols-6 bg-[#1A1A1A]  shadow-md shadow-[#1b1b1b] px-5 gap-5 mt-5'>
            <p className='text-white py-5 text-xs border-[#373737] border-r-2'>Product</p>
            <p className='text-white py-5 text-xs border-[#373737] border-r-2'>Name</p>
            <p className='text-white py-5 text-xs border-[#373737] border-r-2'>Price</p>
            <p className='text-white py-5 text-xs border-[#373737] border-r-2'>Category</p>
             <p className='text-white py-5 text-xs border-[#373737] border-r-2'>Total Stock</p>
            <p className='text-white py-5 text-xs'>Actions</p>
            
        </div>

        <div className='flex justify-end mt-5'>
          <button id='opener' onClick={()=>setAddOpen(!addOpen)} className='flex justify-center gap-1 items-center w-28 text-base bg-[#121212] hover:bg-[#1A1A1A] cursor-pointer text-green-500 md:shadow-[#303030] shadow-md rounded-md p-1 '>
              Add
          </button>
        </div>
        
        
        <div id='form-container' className={`w-full md:py-4 h-screen  md:w-3/5 xl:w-1/3 fixed overflow-y-scroll ${addOpen ? 'block' : 'hidden'} right-0 top-0 z-50  transition-all duration-500`}>
          <X  onClick={()=>setAddOpen(!addOpen)} className='absolute cursor-pointer right-5 top-10' size={20}/>
          <AddProduct/>
        </div>

        {loading && skeletonArray.map((index)=>(
          <ProductCardAdminSkeleton key={index}/>
        ))}

        {products?.map((items,index)=>(
          <ProductCard product={items} key={index}/>
          ))
        }

        

        {error && <p className='text-red-500 text-center text-xl'>{error}</p>}

      </div>

      {products && 
        <div onClick={paginationHandler} className='grid grid-cols-5 md:flex md:justify-center md:flex-wrap md:gap-5 gap-y-5 mt-5'>
          {paginationArray.map((item,index)=>(
            <PaginationButtons num={item} key={index}/>
          ))}
        </div>
      }
      
    </div>
  )
}

export default ProductManagement
