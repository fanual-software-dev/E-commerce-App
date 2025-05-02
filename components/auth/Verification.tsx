'use client'
import React from 'react'
import verificationNumSchema from '@/schemas/VerificationNum'
import { VerificationNumSchema } from '@/schemas/VerificationNum'

const Verification = () => {
    const [verifcationNumbers, setVerifcationNumbers] = React.useState<Record<string, string|number>>({
        one: '',
        two: '',
        three: '',
        four: '',
        five: '',
        six: ''    
    })

    const numArray = ['one','two','three','four','five','six']


    const [errors, setErrors] = React.useState<VerificationNumSchema>({
        verificationNum: ''
    })

    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [isSuccess, setIsSuccess] = React.useState(false)

    const HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value,id } = e.target
        setVerifcationNumbers((prev) => ({
            ...prev,
            [name]: value
        }))

        if (id<'5' && value.length === 1) {
            const nextInput = numArray[numArray.indexOf(name) + 1]
            if (nextInput) {
                const nextInputElement = document.querySelector(`input[name="${nextInput}"]`) as HTMLInputElement
                nextInputElement.focus()
            }
        }
    }

    const HandleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        setErrors({
            verificationNum: ''
        })

        setIsSubmitting(false)
        setIsSubmitting(true)
        const verificationNum = Object.values(verifcationNumbers).join('')
        const result = verificationNumSchema.safeParse({ verificationNum })

        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors
            setErrors({
                verificationNum: fieldErrors.verificationNum ? fieldErrors.verificationNum[0] : ''
            })
            setIsSubmitting(false)
            return
        }

        
    }





  return (
    <div className='flex justify-center py-5'>
      <form action="" className='flex flex-col gap-5 items-center justify-center w-full sm:w-3/4 md:w-3/5 xl:w-1/2 p-5'>
        <h1 className='text-white text-3xl font-bold'>Verification</h1>
        <p className='text-[#676665] text-sm'>Please enter the verification code sent to your email.</p>
        <div className='grid grid-cols-6 gap-3 md:gap-10   justify-center  w-full p-5'>

            {numArray.map((item,index) => (
                
                <input
                    type="numeric"
                    key={index}
                    name={item}
                    autoFocus={index === 0}
                    id={index.toString()}
                    value={verifcationNumbers[item]}
                    onChange={HandleChange} 
                    maxLength={1} 
                    className='bg-gray-200 sm:w-15 sm:h-12  border-none rounded-lg text-black text-center sm:text-2xl font-semibold p-2  sm:px-2 sm:py-3'
                />
            ))}          
          
        </div>
        {errors.verificationNum && <span className='text-amber-500 -mt-6  text-xs'>{errors.verificationNum}</span>}
        
        <button
            onClick={HandleSubmit}
            // disabled={isSubmitting}
            type="submit" 
            className='btn text-base  rounded-full w-full sm:w-1/2 btn-warning text-black mt-3 font-bold'
            >
                {isSubmitting ? <span className='loading loading-dots loading-lg'></span> : 'Verify'}
        </button>

      </form>
    </div>
  )
}

export default Verification
