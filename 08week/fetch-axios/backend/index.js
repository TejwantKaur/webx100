const express = require("express");
const app = express();

app.get("/todos", (req, res)=> {
    const tasks = Math.floor(Math.random() * 15)
    let todos = [];

    for(let id=0; id<tasks; id++){
        todos.push({
            id,
            task: `this is task ${id}`,
            description: `this is description for task ${id}`,
            completed: false
        })
    }
    res.json({todos})
})



const port = 3000;
app.listen(port, ()=>{
    console.log(`app listening at ${port}`)
})