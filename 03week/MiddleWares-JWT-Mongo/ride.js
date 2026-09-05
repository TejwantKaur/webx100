const express = require("express");

const app = express();

function ageConfirm(req, res, next){
    const a = req.query.age;
    if(a>=18) next();
    else res.status(411).json({msg: "underage!"})
}

app.use(ageConfirm); // only work for the routes below it;

app.get("/ride1", function(req, res){
    res.json({msg: "you got ticket for ride1"})
    
})

app.get("/ride2", function(req, res){
    res.json({msg: "you got ticket for ride2"})
})

app.listen(3000)