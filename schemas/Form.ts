import { z } from "zod";

const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),

})

export default formSchema
export type FormSchema = z.infer<typeof formSchema> // This will be the type of the form data