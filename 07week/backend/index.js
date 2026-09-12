const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

// app.use(cors())

app.get('/notifications', (req, res)=>{
    const network = Math.floor(Math.random()*200)
    const jobs = Math.floor(Math.random()*50)
    const msges = Math.floor(Math.random()*50)
    const notification = Math.floor(Math.random()*200)

    res.json({ network, jobs, msges, notification})
})

app.listen(3000, (req, res)=>{
    console.log("app listening at 3000")
})