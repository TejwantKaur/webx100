import { Router } from "express";
import type { Response } from "express";

import { z } from "zod";

import { db } from "../db.ts";
import type { CustomRequest } from "../middleware/user.ts";

const router = Router();

router.get('/', async(req: CustomRequest, res: Response) => {
    if (!req.userId) 
        return res.status(401).json({ msge: "Unauthorized" });
    try{
        const todos = await db.orm.public.Todo
        .where({ userId: req.userId})
        .select("userId" ,"id", "title", "description", "done")
        .include("user", (user) => user.select(`id`, `username`, `email`, ))
        .all();
    
        return res.json({ msge: "your todos", todos })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ msge: "Something went wrong" });
    }
})

const createTodoSchema = z.object({
    title: z.string().min(3),
    description: z.string(),
});
router.post('/', async(req: CustomRequest, res: Response) => {
    const result = createTodoSchema.safeParse(req.body);

    if (!result.success)
    return res.status(402).json({ msge: "title should be atleast 3 letters" });

    console.log(result);
    const data = result.data;

    if (!req.userId) return res.status(401).json({ msge: "Unauthorized" });

    try{
        const newTodo = await db.orm.public.Todo.create({
            userId: req.userId,
            title: data.title, 
            description: data.description
        });
        return res.json({ msge: "Todo Created!", todo: newTodo });
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ msge: "Something went wrong" });
    }
})

const updateTodoSchema = z.object({
    title: z.string().min(3),
    description: z.string()
})
router.put('/:id', async(req: CustomRequest, res: Response) => {
    const result = updateTodoSchema.safeParse(req.body);
    if (!result.success) return res.status(402).json({ msge: "title should be atleast 3 letters" });
    const data = result.data;

    const idResult = z.uuid().safeParse(req.params.id);
    if (!idResult.success) return res.status(400).json({ msge: "Invalid todo id" });
    const id = idResult.data;

    if (!req.userId) return res.status(401).json({ msge: "Unauthorized" });

    try {
        const updateTodo = await db.orm.public.Todo
        .where({ id, userId: req.userId })
        .update({ title: data.title, description: data.description });
    
            console.log(updateTodo); 
            if (!updateTodo) return res.status(404).json({ msge: "Todo not found" });
            return res.json({ msge: "Todo updated" })
        }
    catch(err){
        console.error(err);
        return res.status(500).json({ msge: "Something went wrong" });
    }
})

// mark done???
router.put('/:id/completed', async(req: CustomRequest, res: Response) => {
    const result = z.uuid().safeParse(req.params.id);
    if (!result.success) return res.status(400).json({ msge: "Invalid todo id" });
    const id = result.data;

    if (!req.userId) return res.status(401).json({ msge: "Unauthorized" });

    try {
        await db.orm.public.Todo
        .where({ id, userId: req.userId })
        .update({ done: true })
        
        return res.json({msge: "Marked done!"});
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ msge: "Something went wrong" });
    }
})

router.delete("/:id", async(req:CustomRequest, res: Response) => {
    const result = z.uuid().safeParse(req.params.id);
    if (!result.success) return res.status(400).json({ msge: "Invalid todo id" });
    const id = result.data;
    if (!req.userId) return res.status(401).json({ msge: "Unauthorized" });

    try {
        const deleted = await db.orm.public.Todo
        .where({ id, userId: req.userId })
        .delete()

        console.log(deleted);   // check what this returns for a match vs. no match
        if (!deleted) return res.status(404).json({ msge: "Todo not found" });
        res.json({ msge: "Todo deleted"})
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ msge: "Something went wrong" });
    }
})

export default router;