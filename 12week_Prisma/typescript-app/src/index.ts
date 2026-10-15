import zod, { email } from 'zod';
import express from 'express';

const app = express();

// schema for updating profile;
const userProfileSchema = zod.object({
    name: zod.string().min(1),
    email: zod.email(),
    age: zod.number().min(18).optional()
})

// app.put("/user", (req, res) => {
//     const { success } = userProfileSchema.safeParse(req.body);
//     if(!success) return res.status(411).json({});
//     const updateBody = req.body;

//     return res.json({msge: "User updated"});
// })


// type of updateBody
export type FinalUserSchema = zod.infer<typeof userProfileSchema>
// use export when we have to do validation on frontend also;

app.put("/user", (req, res) => {
    const { success } = userProfileSchema.safeParse(req.body);
    if(!success) return res.status(411).json({});
    const updateBody: FinalUserSchema = req.body;

    return res.json({msge: "User updated"});
})