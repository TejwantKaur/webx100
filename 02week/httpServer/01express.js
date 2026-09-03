const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hi :)")
    console.log("HI :)")
})
app.listen(3000);