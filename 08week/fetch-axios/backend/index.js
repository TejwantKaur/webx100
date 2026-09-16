const express = require("express");
const app = express();

app.get("/todos", (req, res)=> {
    const tasks = 1 + Math.floor(Math.random() * 10)
    let todos = [];

    for(let id=1; id<=tasks; id++){
        todos.push({
            id,
            task: `this is task ${id}`,
            description: `this is description for task ${id}`,
            completed: false
        })
    }
    res.json({todos})
})

app.post("/todos", (req, res)=> {
    res.json({msge: "post"})
})



const port = 3000;
app.listen(port, ()=>{
    console.log(`app listening at ${port}`)
})