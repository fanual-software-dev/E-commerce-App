import { baseAPI } from '@/schemas/AxiosInstance'
import * as zodSchemas from '@/schemas/ProductValidation'
import React, { useState } from 'react'

const AddProduct = () => {

    const [productData,setProductData] =  useState<zodSchemas.ProductValidationFormType>({
            name: '',
            description:'',
            category:'',
            subcategory:'',
            brand: '',
            status:'',
            totalStock:-1,
            weight:0,
            tags: "",
            
    })

    const [zodError,setZodError] = useState<zodSchemas.ProductValidationFormType>({
            name: '',
            description:'',
            category:'',
            subcategory:'',
            brand: '',
            status:'',
            totalStock:-1,
            weight:0,
            tags: "",
           

    })

    const [dimensions,setDimensions] = useState<zodSchemas.DimensionsValidationType>({
        width:-1,
        height:-1,
        length:-1
    })

    const [dimensionsError,setDimensionsError] = useState<zodSchemas.DimensionsValidationType>({
        width:-1,
        height:-1,
        length:-1
    })

    const [variants,setVariants] = useState<zodSchemas.VariantsVaidationType>({
        color:'',
        size:-1,
        sku: -1,
        price: -1,
        stock: -1,
        images: "",

    })

    const [variantsError,setVariantsError] = useState<zodSchemas.VariantsVaidationType>({
        color:'',
        size:-1,
        sku: -1,
        price: -1,
        stock: -1,
        images: "",

    })

    
    const [loading,setLoading] = useState<boolean>(false)
    const [error,setError] = useState<boolean|string>(false)

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{

        const id = e.target.id 
        const value = e.target.value
        

       

        if (id.startsWith('dimensions')){
            setDimensions({...dimensions,[id.split(" ")[1]]: value? parseFloat(value): value})
        }

        else if (id.startsWith('variants')){
            const splitted = id.split(' ')[1]
            setVariants({...variants,[splitted]: splitted==="color" || splitted==="images" || !value ?  value : parseFloat(value)})
        }

        else{
            setProductData({
                ...productData,
                [id]: (!['weight','totalStock'].includes(id)) || !value ? value : parseFloat(value)
            })
        }

       

    }

    const SubmitForm = async(e: React.FormEvent<HTMLButtonElement>)=>{

        e.preventDefault()

        setLoading(true)
        setError(false)
        setZodError(
            {
                name: '',
                description:'',
                category:'',
                subcategory:'',
                brand: '',
                status:'',
                totalStock:-1,
                weight:0,
                tags: "",

            }
        )

        setVariantsError({
            color:'',
            size:-1,
            sku: -1,
            price: -1,
            stock: -1,
            images: "",

        })

        setDimensionsError({
            width:-1,
            height:-1,
            length:-1
        })


        const validationResult = zodSchemas.ProductValidationForm.safeParse(productData)
        const dimensionResult = zodSchemas.DimensionsValidation.safeParse(dimensions)
        const variantsResult = zodSchemas.VariantsVaidation.safeParse(variants)

        if (!validationResult.success){
            const fieldErrors = validationResult.error.flatten().fieldErrors
            console.log(typeof(productData.totalStock),"Here is total stock")
            setZodError({
                name: fieldErrors.name ? fieldErrors.name[0] : '',
                description: fieldErrors.description ? fieldErrors.description[0] : '',
                category: fieldErrors.category ? fieldErrors.category[0] : '',
                subcategory: fieldErrors.subcategory ? fieldErrors.subcategory[0] : '',
                brand: fieldErrors.brand ? fieldErrors.brand[0] : '',
                status: fieldErrors.status ? fieldErrors.status[0] : '',
                totalStock: fieldErrors.totalStock ? -2 : -1,
                weight: fieldErrors.weight ? -1 : 0,
                tags: fieldErrors.tags ? fieldErrors.tags[0] : '',
            })

            
        }

        if (!variantsResult.success){
            const fieldErrors = variantsResult.error.formErrors.fieldErrors
            setVariantsError({
                color: fieldErrors.color ? fieldErrors.color[0] : '',
                size: fieldErrors.size ? -2 : 0,
                sku: fieldErrors.sku ? -2 : 0,
                price: fieldErrors.price ? -2 : 0,
                stock: fieldErrors.stock ? -2 : 0,
                images: fieldErrors.images ? fieldErrors.images[0] : "",
            })
        }

        if (!dimensionResult.success){
            const fieldErrors = dimensionResult.error.formErrors.fieldErrors
            setDimensionsError({
                width:fieldErrors.width ? -2 : 0,
                length:fieldErrors.length ? -2 : 0,
                height:fieldErrors.height ? -2 : 0,
            })
        }

        

        

        if (!validationResult.success || !variantsResult.success || !dimensionResult.success){
          
            setLoading(false)
            return
        }

        
        try {

            const cleanedProductData = {...productData,tags:productData.tags.split(','), variants:{...variants,images:variants.images.split(',')},dimensions}
            const serverResponse = await baseAPI.post('/api/product/createProduct',cleanedProductData,{withCredentials:true})

            if (serverResponse.status===201){
                setError(false)
                
            }

            else{
                setError("Error occured while creating product. Please try again")

            }

            console.log(serverResponse)
            
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError("An unknown error occurred.")
            }
        }

        

        setLoading(false)

        

        
    }

    return (
        <div className='w-full bg-[#000000] p-5 '>
            <p className='text-white  text-2xl mt-4 mb-8 text-center border-b py-5'>ADD PRODUCT</p>
        
            <form action="" className='flex flex-col gap-5 mt-5'>
                <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='text-white text-xs'>Product Name</label>
                        <input
                            id="name"
                            onChange={HandleChange}
                            value={productData.name}
                            type="text"
                            className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                            placeholder='Type product name'
                        />

                        {zodError.name && <span className='text-amber-600 text-xs'>{zodError.name}</span>}
                    </div>

                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='text-white text-xs'>Product Brand</label>
                        <input
                            id='brand'
                            onChange={HandleChange}
                            value={productData.brand}
                            type="text"
                            className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                            placeholder='Type product brand'
                        />

                        {zodError.brand && <span className='text-amber-600 text-xs'>{zodError.brand}</span>}
                    </div>
                
                </div>

                <label htmlFor="name" className='text-white text-xs'>Product Total Stock</label>
                <input
                    id="totalStock"
                    onChange={HandleChange}
                    value={productData.totalStock!==-1? productData.totalStock : ''}
                    type="number"
                    inputMode='numeric'
                    className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                    placeholder='Type product total stock'
                />

                {zodError.totalStock===-2 && <span className='text-amber-600 text-xs'>Total stock is required and can&apos;t be negative</span>}

                <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='text-white text-xs'>Product Category</label>
                        <input
                            id='category'
                            onChange={HandleChange}
                            value={productData.category}
                            type="text"
                            className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                            placeholder='Type product category'
                        />

                        {zodError.category && <span className='text-amber-600 text-xs'>{zodError.category}</span>}
                    </div>

                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='text-white text-xs'>Product Subcategory</label>
                        <input
                            id='subcategory'
                            onChange={HandleChange}
                            value={productData.subcategory}
                            type="text"
                            className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                            placeholder='Type product subcategory'
                        />

                        {zodError.subcategory && <span className='text-amber-600 text-xs'>{zodError.subcategory}</span>}
                    </div>
                
                </div>

                <div className='my-5 flex flex-col gap-5'>
                    <p className='text-white text-lg text-center'>Variants</p>

                    <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                        <div className='flex flex-col gap-5'>
                            <label htmlFor="name" className='text-white text-xs'>Product Price</label>
                            <input
                                id='variants price'
                                onChange={HandleChange}
                                value={variants.price!==-1 ? variants.price : ''}
                                type="number"
                                inputMode='numeric'
                                className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                                placeholder='Type product price'
                            />

                            {variantsError.price === -2 && <span className='text-amber-600 text-xs'>Price is required and can only be +ve value</span>}
                        </div>

                        <div className='flex flex-col gap-5'>
                            <label htmlFor="name" className='text-white text-xs'>Product Stock</label>
                            <input
                                id='variants stock'
                                onChange={HandleChange}
                                value={variants.stock!==-1 ? variants.stock : ''}
                                type="number"
                                inputMode='numeric'
                                className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                                placeholder='Type product stock'
                            />

                            {variantsError.stock && variantsError.stock===-2 && <span className='text-amber-600 text-xs'>Stock is required and can only be +ve value</span>}
                        </div>
                    
                    </div>

                        <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                        <div className='flex flex-col gap-5'>
                            <label htmlFor="name" className='text-white text-xs'>Product SKU</label>
                            <input
                                id='variants sku'
                                onChange={HandleChange}
                                value={variants.sku!==-1 ? variants.sku : ''}
                                type="number"
                                inputMode='numeric'
                                className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                                placeholder='Type product SKU'
                            />

                            {variantsError.sku && variantsError.sku === -2 && <span className='text-amber-600 text-xs'>SKU is required and can only be +ve value</span>}
                        </div>

                        <div className='flex flex-col gap-5'>
                            <label htmlFor="name" className='text-white text-xs'>Product Size</label>
                            <input
                                id='variants size'
                                onChange={HandleChange}
                                value={variants.size!==-1 ? variants.size : ''}
                                type="number"
                                inputMode='numeric'
                                className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                                placeholder='Type product size'
                            />

                            {variantsError.size && variantsError.size === -2 && <span className='text-amber-600 text-xs'>Size is required and can only be +ve value</span>}
                        </div>
                    
                    </div>

                    <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                        <div className='flex flex-col gap-5'>
                            <label htmlFor="name" className='text-white text-xs'>Product Color</label>
                            <div className='flex justify-between items-center w-full gap-5'>
                                <input
                                    id='variants color'
                                    value={variants.color}
                                    onChange={HandleChange}
                                    type="color"
                                    className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                                    placeholder='Type product color'
                                />

                                <p className='text-white text-xs'>{variants.color ? variants.color : 'NA'}</p>
                            </div>

                            {variantsError.color && <span className='text-amber-600 text-xs'>{variantsError.color}</span>}
                        </div>

                        <div className='flex flex-col gap-5'>
                            <label htmlFor="name" className='text-white text-xs'>Product Image</label>
                            <textarea
                                id='variants images'
                                onChange={HandleChange}
                                value={variants.images}
                                className='text-white bg-[#1A1A1A] text-sm rounded-md px-4 py-2 flex items-center placeholder:text-xs'
                                placeholder='Type product images url' 
                            />

                            {variantsError.images && <span className='text-amber-600 text-xs'>{variantsError.images}</span>}
                        </div>
                    
                    </div>
                </div>


                <div className='mb-5 flex flex-col gap-5'>
                    <p className='text-white text-lg text-center'>Dimensions</p>

                    <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                        <div className='flex flex-col gap-5'>
                            <label htmlFor="name" className='text-white text-xs'>Product Height</label>
                            <input
                                id='dimensions height'
                                onChange={HandleChange}
                                value={dimensions.height!==-1 ? dimensions.height : ''}
                                type="number"
                                inputMode='numeric'
                                className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                                placeholder='Type product height'
                            />

                            {dimensionsError.height === -2 && <span className='text-amber-600 text-xs'>Height is required and can only be +ve value</span>}
                        </div>

                        <div className='flex flex-col gap-5'>
                            <label htmlFor="name" className='text-white text-xs'>Product Length</label>
                            <input
                                id='dimensions length'
                                onChange={HandleChange}
                                value={dimensions.length!==-1 ? dimensions.length : ''}
                                type="number"
                                inputMode='numeric'
                                className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                                placeholder='Type product length'
                            />

                            {dimensionsError.length === -2 && <span className='text-amber-600 text-xs'>Length is required and can only be +ve value</span>}
                        </div>
                    
                    </div>

                    <div className='flex flex-col sm:flex-row justify-between w-full gap-5'>
                        <div className='flex flex-col gap-5'>
                            <label htmlFor="name" className='text-white text-xs'>Product Width</label>
                            <input
                                id='dimensions width'
                                onChange={HandleChange}
                                value={dimensions.width!==-1 ? dimensions.width : ''}
                                type="number"
                                inputMode='numeric'
                                className=' text-white text-sm bg-[#1A1A1A] rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                                placeholder='Type product width'
                            />

                            {dimensionsError.width && dimensionsError.width === -2 && <span className='text-amber-600 text-xs'>Width is required and can only be +ve value</span>}

                        </div>

                        {/* <div className='flex flex-col gap-5'>
                            <label htmlFor="name" className='text-white text-xs'>Product image</label>
                            <input
                                id='image'
                                onChange={()=>console.log()}
                                type="text"
                                className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                                placeholder='Type product image'
                            />
                        </div> */}
                    
                    </div>
                </div>

                <label htmlFor="name" className='text-white text-xs'>Product Description</label>
                <textarea
                    id='description'
                    onChange={HandleChange}
                    value={productData.description}
                    className='text-white bg-[#1A1A1A] text-sm rounded-md px-4 py-2 flex items-center placeholder:text-xs'
                    placeholder='Type product description...' 
                />

                {zodError.description && <span className='text-amber-600 text-xs'>{zodError.description}</span>}

                <label htmlFor="name" className='text-white text-xs mt-5'>Product Tags</label>
                <textarea
                    id='tags'
                    onChange={HandleChange}
                    value={productData.tags}
                    className='text-white bg-[#1A1A1A] text-sm rounded-md px-4 py-2 flex items-center placeholder:text-xs'
                    placeholder='Type product tags' 
                />

                {zodError.tags && <span className='text-amber-600 text-xs'>{zodError.tags}</span>}
               

                <div className='flex flex-col sm:flex-row justify-between w-full gap-5 mt-5'>
                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='text-white text-xs'>Product Weight</label>
                        <input
                            id='weight'
                            onChange={HandleChange}
                            value={productData.weight !==0 ? productData.weight : ''}
                            type="number"
                            inputMode='numeric'
                            className='text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                            placeholder='Type product weight' 
                        />

                        {zodError.weight === -1 && <span className='text-amber-600 text-xs'>Weight is required field and can only be +ve value</span>}
                    </div>

                    <div className='flex flex-col gap-5'>
                        <label htmlFor="name" className='text-white text-xs'>Product Status</label>
                        <input
                            id='status'
                            onChange={HandleChange}
                            value={productData.status}
                            type="text"
                            className=' text-white bg-[#1A1A1A] text-sm rounded-md px-3 py-2 flex items-center placeholder:text-xs'
                            placeholder='Type product status'
                        />

                        {zodError.status && <span className='text-amber-600 text-xs'>{zodError.status}</span>}
                    </div>
            
                </div>

                <div className='w-full flex justify-center'>
                    <button
                        onClick={SubmitForm}
                        type='submit'
                        className='text-white bg-[#121212] hover:bg-[#1A1A1A] px-8 py-2 cursor-pointer shadow-sm shadow-[#5d5d5d]  rounded-md my-5'
                    >
                        { loading? <span className='loading loading-dots loading-lg'></span> : 'ADD PRODUCT'}
                    </button>
                </div>

                {error && <p className='text-amber-600 text-xs'>{error}</p>}

            </form>
        </div>
    )
}

export default AddProduct
