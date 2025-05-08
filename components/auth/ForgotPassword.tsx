'use client'
import React from 'react'
import { baseAPI } from '@/schemas/AxiosInstance'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { EmaiSchemaType,EmailSchema } from '@/schemas/Form'

const ForgotPassword = () => {

    const navigate = useRouter()
    const [email, setEmail] = React.useState<EmaiSchemaType>({
        email: ''
    })

    const [errors, setErrors] = React.useState<EmaiSchemaType>({
        email: ''
    })

    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

       const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target
            setEmail((prev) => ({
                ...prev,
                [name]: value
            }))
        } 

    const HandleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {

        e.preventDefault()
        setIsSubmitting(true)
        setErrors({
            email: ''
        })

        const result = EmailSchema.safeParse(email)

        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors
            setErrors({
                email: fieldErrors.email ? fieldErrors.email[0] : ''
            })
            setIsSubmitting(false)
            return
        }
        
        const serverResponse = await baseAPI.post('/api/auth/forgot-password-request', { email })
        if (serverResponse.status === 200) {
            
            setIsSuccess(true)
            
            setEmail({
                email: ''
            })

            setErrors({
                email: ''
            })
            
            setIsSubmitting(false)
            
            navigate.push('/verification')

            return
        } else {
            
            setIsSubmitting(false)
            setErrors({
                email: 'Something went wrong, please try again later'
            })
        }

        console.log(serverResponse)

    }

  return (
    <div className='flex justify-center'>
      <form action="" className='md:w-3/4 lg:w-1/2 flex p-5 lg:p-10 flex-col  gap-3'>
        
        <p className='text-white text-center text-2xl font-bold mb-5'>Forgot Password?</p>
        <p className='text-[#676665]  text-center -mt-6 text-sm'>No worries we'll send you reset instructions</p>
        <label htmlFor="" className='text-white text-start'>Email</label>
        <input
            onChange={HandleChange}
            value={email.email}
            name='email'
            type="email"
            placeholder='Email address'
            className='text-black bg-gray-200 outline-0 w-full md:w-4/5  font-sans shadow-accent rounded-lg p-3 text-xs placeholder:text-black placeholder:font-semibold placeholder:italic' 
        />

        {errors.email && <p className='text-amber-500 text-xs'>{errors.email}</p>}

        <button
            onClick={HandleSubmit}
            type='submit'
            className='btn text-base   rounded-lg w-full md:w-4/5 btn-warning text-black mt-5  font-bold'
        >

            {isSubmitting ? <span className='loading loading-dots loading-lg'></span> : 'Send OTP'}

        </button>

        <p className='flex mt-5'>
            
            <Link href='/' className='hover:text-white w-auto rounded-md shadow-sm p-2 shadow-gray-900 flex justify-center items-center gap-1 text-[#676665] text-sm '>
                <ArrowLeft size={16} className='text-[#797979]'/>
                Back to login
            </Link>
        </p>
      </form>
    </div>
  )
}

export default ForgotPassword
