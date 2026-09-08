const express = require("express")
const app = express();
const { createTodo, updateTodo } = require("./types")
const { Todo } = require("./db")

// middleware
app.use(express.json());

// view all todos
app.get('/todos', async (req, res)=>{
    const todos = await Todo.find({})
    res.json({todos})
})
// create
app.post('/todos', async (req, res)=>{
    const input = req.body;
    const parseInput = createTodo.safeParse(input);
    if(!parseInput.success){ 
        res.status(411).json({ msge: "Input must be String" }) 
        return;
    }
    // put in mongo
    await Todo.create({
        title: input.title,
        description: input.description,
        completed : false
    })
    res.json({ msge: "Todo created" })
})

app.put('/completed', async (req, res)=>{
    const id = req.body;
    const parseId = updateTodo.safeParse(id);
    if(!parseId.success){
        res.status(411).json({ msge: "Coudnt fnd id" }) 
        return;
    }
    // mongo id
    await Todo.find({ _id: req.body.id }, { completed: true })
    res.json("Todo marked completed!")
})

const PORT = 3000
app.listen(PORT, (req,res)=>{
    console.log(`app listening on ${PORT}`)
})