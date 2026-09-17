const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());

app.get("/", (req, res)=>{
    res.send("App Working")
})

app.get("/todos", (req, res)=> { 
    const count = 1 + Math.floor(Math.random() * 8);

    const todos = [];
    for(let i=1; i<=count; i++){
        const id = i;
        todos.push({
            id: id,
            title: `Todo ${id}`,
            description: `This is Todo ${id}`,
            completed: "false"
        })
    }
    res.json({todos});
})

app.get("/todos/:id", (req, res)=>{
    const id = body.params
    res.json({
        todo: {
            id: id,
            title: `Todo ${id}`,
            description: `This is Todo ${id}`,
            completed: "false" 
        }
    })
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`App listening at ${PORT}`)
})