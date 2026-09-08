const express = require("express")
const app = express();


app.use(express.json());

// view all todos
app.get('/todos', (req, res)=>{
    
})
// create
app.post('/todo', (req, res)=>{

})

app.put('/completed', (req, res)=>{

})


const PORT = 3000
app.listen(PORT, (req,res)=>{
    console.log(`app listening on ${PORT}`)
})