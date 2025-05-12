'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Eye, EyeOffIcon,Mail} from 'lucide-react'
import formSchema from '@/schemas/Form'
import { FormSchema } from '@/schemas/Form'
import { baseAPI } from '@/schemas/AxiosInstance'
import { useRouter } from 'next/navigation'
import { UserType, useUserStore } from '@/contexts/UserStore'


const Login = () => {

    const navigate = useRouter()
    const [showPassword,setShowPassword] = useState(false)
    const [formData, setFormData] = useState<FormSchema>({
        email: '',
        password: ''
    })

    const setUser = useUserStore((state)=>state.setUser)
    const setIsLoggedIn = useUserStore((state)=>state.setIsLoggedIn)
    

    const [errors, setErrors] = useState<FormSchema>({
        email: '',
        password: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    // const [isSuccess, setIsSuccess] = useState(false)

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }   
    
    const LoginUser = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        setErrors({
            email: '', 
            password:''
        })
        
        setIsSubmitting(false)
        setIsSubmitting(true)

        const result = formSchema.safeParse(formData)
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors
            setErrors({
                email: fieldErrors.email ? fieldErrors.email[0] : '',
                password: fieldErrors.password ? fieldErrors.password[0] : ''
            })
            return
        }

        const serverResponse = await baseAPI.post('/api/auth/login', formData,{
            withCredentials:false
        })
        if (serverResponse.status === 200) {
            // setIsSuccess(true)

            setFormData({
                email: '',
                password: ''
            })

            setUser(serverResponse.data.user as UserType)
            setIsLoggedIn(true)
            

            navigate.push('/home')
            
        } else {
            setErrors({
                email: 'Invalid email or password',
                password: ''
            })
            setIsSubmitting(false)
        }

        console.log(serverResponse.data)

        setIsSubmitting(false)
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
                <p className='font-bold text-4xl text-amber-300'>Login</p>
            </div>
            <p className='text-gray-300 text-sm font-serif mb-7 mt-2 italic text-center'>Please login to your account</p>
            <form action="" className=' mt-2 flex flex-col gap-7'>
                {/* <p className='text-white  text-xs  font-serif'>Enter your details below</p> */}
                
                <div className='relative mb-2 w-full flex items-center'>
    
                    <input
                        onChange={HandleChange}
                        value={formData.email}
                        name='email'
                        className='text-black w-full bg-gray-200 outline-0  font-sans shadow-accent rounded-lg p-3 text-xs placeholder:text-black placeholder:font-semibold placeholder:italic'
                        type="email"
                        placeholder='Email address'
                    />

                    <Mail 
                        className='absolute right-3  text-black'
                        size={16}
                        
                    />

                    {errors.email && <p className='text-amber-500 absolute -bottom-6 text-xs'>{errors.email}</p>}
                </div>
                <div className='relative w-full mb-2   flex items-center'>

                    <input
                        onChange={HandleChange}
                        value={formData.password}
                        name='password'
                        className='text-black bg-gray-200 w-full font-sans  rounded-lg outline-0  shadow-accent p-3 text-xs placeholder:text-black placeholder:italic placeholder:font-semibold'
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
                    <p className='text-end'>
                        <Link
                            href='/forgot-password'
                            className='text-white  text-xs underline inline-block'
                        >
                            Forgot Password?
                        </Link>
                    </p>
                </div>
                <div className='flex flex-row-reverse justify-end md:justify-between items-center gap-5'>
                    <button onClick={(e)=>LoginUser(e)} className='text-black text-base w-full btn rounded-lg btn-warning '>
                        {isSubmitting ? <span className='loading loading-dots loading-lg'></span>  : 'Login'}
                    </button>
                </div>

                <div className='flex mt-3 justify-center items-center gap-2'>
                    <div className='w-25 h-[.5px] bg-gray-300'></div>
                    <p className=' text-slate-300 font-serif  text-sm'>  Or login with </p>
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
                        Don&apos;t have an account yet?  
                        <Link
                            href='/signup'
                            className='underline inline-block text-accent cursor-pointer'
                        > 
                            Signup here

                        </Link>
                </p>

                
            </form>

       </div>
    </div>
  )
}

export default Login
