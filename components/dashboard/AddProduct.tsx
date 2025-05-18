import { X } from 'lucide-react'
import React from 'react'

const AddProduct = () => {

//     export type Variants = {
//     sku: string,
//     color: string,
//     size: string,
//     price: number,
//     stock: number,
//     images: string[],
//     attributes: {[key: string]: string | number}
// }

// export type ProductType = {
//     _id: number,
//     name: string,
//     description: string,
//     category: string,
//     subCategory: string,
//     brand: string,
//     variants: Variants[],
//     specifications: [{
//         key: string,
//         value: string | number
//     }],
    
//     reviews: [{
//         user: string,
//         rating: number,
//         comment: string,
//         createdAt: string
//     }],

//     averageRating: number,
//     status: string,
//     tags: string[],
//     weight: number,
//     dimensions: {
//         width: number,
//         height: number,
//         length: number
//     }
//     isfeatured: boolean,
//     totalStock: number,
//     createdAt: string,
//     updatedAt: string,
    
// }

  return (
    <div className='w-full bg-[#000000] p-5 '>
        <p className='text-white font-bold text-2xl my-8 text-center'>Add Product</p>
       
        <form action="" className='flex flex-col gap-5 mt-5'>
            <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                <div className='flex flex-col gap-5'>
                    <label htmlFor="name" className='text-white text-xs'>Product Name</label>
                    <input
                        id="name"
                        onChange={()=>console.log()}
                        type="text"
                        className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                        placeholder='Type product name'
                    />
                </div>

                <div className='flex flex-col gap-5'>
                    <label htmlFor="name" className='text-white text-xs'>Product Brand</label>
                    <input
                        id='brand'
                        onChange={()=>console.log()}
                        type="text"
                        className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                        placeholder='Type product brand'
                    />
                </div>
            
            </div>

            <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                <div className='flex flex-col gap-5'>
                    <label htmlFor="name" className='text-white text-xs'>Product Category</label>
                    <input
                        id='category'
                        onChange={()=>console.log()}
                        type="text"
                        className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                        placeholder='Type product category'
                    />
                </div>

                <div className='flex flex-col gap-5'>
                    <label htmlFor="name" className='text-white text-xs'>Product Subcategory</label>
                    <input
                        id='subcategory'
                        onChange={()=>console.log()}
                        type="text"
                        className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                        placeholder='Type product subcategory'
                    />
                </div>
            
            </div>

            <div className='my-5 flex flex-col gap-5'>
                <p className='text-white text-lg text-center'>Variants</p>

                <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='text-white text-xs'>Product price</label>
                        <input
                            id='price'
                            onChange={()=>console.log()}
                            type="number"
                            inputMode='numeric'
                            className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                            placeholder='Type product price'
                        />
                    </div>

                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='text-white text-xs'>Product Stock</label>
                        <input
                            id='stock'
                            onChange={()=>console.log()}
                            type="number"
                            inputMode='numeric'
                            className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                            placeholder='Type product stock'
                        />
                    </div>
                
                </div>

                <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='text-white text-xs'>Product color</label>
                        <input
                            id='color'
                            onChange={()=>console.log()}
                            type="color"
                            className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                            placeholder='Type product category'
                        />
                    </div>

                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='text-white text-xs'>Product image</label>
                        <input
                            id='image'
                            onChange={()=>console.log()}
                            type="text"
                            className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                            placeholder='Type product image'
                        />
                    </div>
                
                </div>
            </div>

            <label htmlFor="name" className='text-white text-xs'>Product description</label>
            <textarea
                onChange={()=>console.log()}
                className='text-white bg-[#1A1A1A] text-sm rounded-md px-4 py-2 flex items-center placeholder:text-xs'
                placeholder='Type product description...' 
            />

            

            <label htmlFor="name" className='text-white text-xs'>Product Name</label>
            <input
                onChange={()=>console.log()}
                type="text"
                className='text-white bg-[#1A1A1A] text-sm rounded-md px-4 py-2 flex items-center placeholder:text-xs'
                placeholder='Type product name' 
            />

            <label htmlFor="name" className='text-white text-xs'>Product Name</label>
            <input
                onChange={()=>console.log()}
                type="text"
                className='text-white text-sm bg-[#1A1A1A] rounded-md px-4 py-2 flex items-center placeholder:text-xs'
                placeholder='Type product name' 
            />
        </form>
    </div>
  )
}

export default AddProduct
