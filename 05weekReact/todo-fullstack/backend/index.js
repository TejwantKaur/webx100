const express = require("express")
const app = express();
const { createTodo, updateTodo } = require("./types")

// middleware
app.use(express.json());

// view all todos
app.get('/todos', (req, res)=>{
    
})
// create
app.post('/todo', (req, res)=>{
    const input = req.body;
    const parseInput = createTodo.safeParse(input);
    if(!parseInput.success){ 
        res.status(411).json({ msge: "Input must be String" }) 
        return;
    }
    // put in mongo
})

app.put('/completed', (req, res)=>{
    const id = req.body;
    const parseId = updateTodo.safeParse(id);
    if(!parseId.success){
        res.status(411).json({ msge: "Coudnt fnd id" }) 
        return;
    }
})


const PORT = 3000
app.listen(PORT, (req,res)=>{
    console.log(`app listening on ${PORT}`)
})