import z, { email } from "zod";

export const signupSchema = z.object({
    email: z.email(),
    username: z.string(),
    password: z.string()
})
export const signinSchema = z.object({
    email: z.email(),
    password: z.string()
})
export const createBlogSchema = z.object({
    title: z.string(),
    content: z.string()
}) 
export const updateBlogSchema = z.object({
    id: z.string(), // params vli
    title: z.string(),
    content: z.string()
}) 

export type SignupSchema = z.infer<typeof signupSchema> // type inference
export type SigninSchema = z.infer<typeof signinSchema>
export type CreateBlogSchema = z.infer<typeof createBlogSchema>
export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>

