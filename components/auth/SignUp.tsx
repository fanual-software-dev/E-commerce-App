'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Eye, EyeOffIcon,Mail,ShoppingCart,PhoneIcon,User } from 'lucide-react'
import { RegisterSchema, RegisterSchemaType } from '@/schemas/Form'
import { useRouter } from 'next/navigation'
import { baseAPI } from '@/schemas/AxiosInstance'



const SignUp = () => {
    const navigate = useRouter()
    const [showPassword,setShowPassword] = useState(false)
    const [formData, setFormData] = useState<RegisterSchemaType>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
    })

    const [errors, setErrors] = useState<RegisterSchemaType>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }   
    
    const RegisterUser = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        setErrors({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phone: ''
        })

        setIsSubmitting(false)
        setIsSubmitting(true)

        const result = RegisterSchema.safeParse(formData)
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors
            setErrors({
                firstName: fieldErrors.firstName ? fieldErrors.firstName[0] : '',
                lastName: fieldErrors.lastName ? fieldErrors.lastName[0] : '',
                email: fieldErrors.email ? fieldErrors.email[0] : '',
                password: fieldErrors.password ? fieldErrors.password[0] : '',
                phone: fieldErrors.phone ? fieldErrors.phone[0] : ''
            })
            setIsSubmitting(false)
            return
        }

        setIsSubmitting(true)

        const serverResponse = await baseAPI.post('/api/auth/register', formData)
        
        if (serverResponse.status === 201) {
            setIsSuccess(true)
            setIsSubmitting(false)
            localStorage.setItem('email', formData.email)
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phone: ''
            })

            navigate.push('/verification')
        }
        else {
            setIsSuccess(false)
            setIsSubmitting(false)
        }
        console.log(serverResponse.data)
        


    }

  return (
    <div className='md:p-5 flex justify-center  gap-10' >
       {/* <div className='hidden sm:flex py-10 gap-10 flex-col h-full items-center justify-center'>
            <h1 className='text-lg md:text-2xl -mt-5 lg:text-4xl text-white font-serif font-bold uppercase'>Sheba Market</h1>
           
            <p className='text-white font-serif font-bold  text-lg text-center -mt-5 italic'>Make Your Shopping Experience Simple With Sheba Market</p>
       </div> */}

       <div className='w-full sm:w-8/12 md:w-1/2 p-4 lg:p-10 flex flex-col'>
            <div className='flex items-center justify-center gap-2 mb-3'>
                {/* <p className='w-10 h-10 p-2 rounded-full bg-amber-300 flex items-center justify-center'>
                    <ShoppingCart className='' size={20}/>
                </p> */}
                <p className='font-bold text-4xl text-amber-300'>Signin</p>
            </div>
            <p className='text-gray-300 text-sm font-serif mb-7 mt-2 italic text-center'>Register now and use our service</p>
            <form action="" className=' mt-2 flex flex-col gap-7'>
                {/* <p className='text-white  text-xs  font-serif'>Enter your details below</p> */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className='relative mb-2 w-full flex items-center'>
                        <input
                            onChange={HandleChange}
                            value={formData.firstName}
                            name='firstName'
                            className='text-black w-full bg-gray-200 outline-0 font-sans  shadow-accent rounded-lg p-3 text-xs placeholder:text-black placeholder:font-semibold placeholder:italic'
                            type="text"
                            placeholder='First name'
                        />
                        <User
                            className='absolute right-3  text-black'
                            size={16}
                    
                        />
                        {errors.firstName && <p className='text-amber-500 absolute -bottom-6 text-xs'>{errors.firstName}</p>}
                    </div>
                    <div className='relative mb-2 w-full flex items-center'>
                        <input
                            onChange={HandleChange}
                            value={formData.lastName}
                            name='lastName'
                            className='text-black w-full bg-gray-200 outline-0 font-sans  shadow-accent rounded-lg p-3 text-xs placeholder:text-black placeholder:font-semibold placeholder:italic'
                            type="text"
                            placeholder='Last name'
                        />
                        <User
                            className='absolute right-3  text-black'
                            size={16}
                    
                        />
                        {errors.lastName && <p className='text-amber-500 absolute -bottom-6 text-xs'>{errors.lastName}</p>}
                    </div>
                </div>
                
                <div className='relative mb-2 w-full flex items-center'>
    
                    <input
                        onChange={HandleChange}
                        value={formData.email}
                        name='email'
                        className='text-black w-full bg-gray-200 outline-0 font-sans  shadow-accent rounded-lg p-3 text-xs placeholder:text-black placeholder:font-semibold placeholder:italic'
                        type="email"
                        placeholder='Email address'
                    />

                    <Mail 
                        className='absolute right-3  text-black'
                        size={16}
                        
                    />

                    {errors.email && <p className='text-amber-500 absolute -bottom-6 text-xs'>{errors.email}</p>}
                </div>

                <div className='relative mb-2 w-full flex items-center'>
    
                    <input
                        onChange={HandleChange}
                        value={formData.phone}
                        name='phone'
                        className='text-black w-full bg-gray-200 outline-0 font-sans  shadow-accent rounded-lg p-3 text-xs placeholder:text-black placeholder:font-semibold placeholder:italic'
                        type="phone"
                        placeholder='Phone number'
                    />

                    <PhoneIcon 
                        className='absolute right-3  text-black'
                        size={16}
                        
                    />

                    {errors.phone && <p className='text-amber-500 absolute -bottom-6 text-xs'>{errors.phone}</p>}
                </div>

                <div className='relative w-full mb-2   flex items-center'>

                    <input
                        onChange={HandleChange}
                        value={formData.password}
                        name='password'
                        className='text-black bg-gray-200 w-full  rounded-lg outline-0 font-sans  shadow-accent p-3 text-xs placeholder:text-black placeholder:font-semibold placeholder:italic'
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Password'
                    />

                    { showPassword ? 
                    
                        <Eye
                            onClick={()=>setShowPassword(!showPassword)}
                            className='absolute cursor-pointer   right-3 text-black'
                            size={16}
                            
                        /> :
                        
                        <EyeOffIcon
                            onClick={()=>setShowPassword(!showPassword)}
                            className='absolute cursor-pointer   right-3 text-black'
                            size={16} 
                           
                        />
                    }

                    {errors.password && <p className='text-amber-500 absolute -bottom-6 text-xs'>{errors.password}</p>}
                </div>
                
                <div className='flex justify-end md:justify-between items-center'>
                    <div className='hidden md:flex items-center gap-2'>
                        
                        <input 
                            type="checkbox"
                            className='w-4 h-4 cursor-pointer accent-accent' 
                        />

                        <p className='text-white text-xs'>Remember Me</p>
                    </div>
                   
                </div>
                <div className='flex flex-row-reverse justify-end md:justify-between items-center gap-5'>
                    <button onClick={(e)=>RegisterUser(e)} className='text-black text-base w-full btn rounded-lg btn-warning '>
                        {isSubmitting ? <span className='loading loading-dots loading-lg'></span> : 'Sign Up'}
                    </button>
                </div>

                <div className='flex mt-3 justify-center items-center gap-2'>
                    <div className='w-25 h-[.5px] bg-gray-300'></div>
                    <p className=' text-slate-300 font-serif  text-sm'>  Or signup with </p>
                    <div className='w-25 h-[.5px] bg-gray-300'></div>
                </div>

                <div className='flex gap-2 sm:gap-8 justify-between'>
                    <button className='text-white w-2/5 btn rounded-md bg-transparent flex items-center justify-center gap-2'>
                        <Image src='/google.png' alt='google' width={20} height={20}/>
                        Google
                    </button>

                    <button className='text-white w-2/5 btn rounded-md bg-transparent flex items-center justify-center gap-2'>
                        <Image src='/facebook.png' alt='google' width={20} height={20}/>
                        Facebook
                    </button>
                </div>

                <p className='text-white justify-center text-xs flex gap-2'>
                        Already have an account?  
                        <Link
                            href='/'
                            className='underline inline-block text-accent cursor-pointer'
                        > 
                            Login here

                        </Link>
                </p>

                
            </form>

       </div>
    </div>
  )
}

export default SignUp
