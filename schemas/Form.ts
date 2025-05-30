import { z } from "zod";

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),

})

export const RegisterSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    phone: z.string().min(10, "Phone number must be at least 10 digits long").regex(/^\d+$/, "Phone number must contain only digits"),
    dateOfBirth: z.string().min(1, "Date of birth is required").refine((date) => {
        const today = new Date();
        const dob = new Date(date);
        return dob < today && today.getFullYear() - dob.getFullYear() >= 18;
    },

    {
        message: "You must be at least 18 years old"   
    }),

    gender: z.string().min(4,"gender is required").refine((gender) => {
        const validGenders = ["Male","Female"]
        return validGenders.includes(gender)
    },

    {
        message:"Gender must be either Male or Female"
    }
)
})

export const EmailSchema = z.object({
    email: z.string().email("Invalid email address"),
})




export default formSchema
export type EmaiSchemaType = z.infer<typeof EmailSchema> // This will be the type of the email data
export type FormSchema = z.infer<typeof formSchema> // This will be the type of the form data
export type RegisterSchemaType = z.infer<typeof RegisterSchema> // This will be the type of the register form data