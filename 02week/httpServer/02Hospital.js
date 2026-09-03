const express = require("express");
const app = express();

app.use(express.json()); //   for req.body

const users = [{
    name: 'John', 
    kidneys: [{
        healthy: false,
    },{
        healthy: true,
    }]
}];

app.get("/", function(req, res){
    const johnKidneys = users[0].kidneys;
    console.log(johnKidneys);

    const numOfKidneys = johnKidneys.length;
    let numOfHealthyKidneys = 0;
    for(let i=0; i<numOfKidneys; i++){
        if(johnKidneys[i].healthy){
            numOfHealthyKidneys += 1;
        }
    }

    const numOfUnhealthyKidneys = numOfKidneys - numOfHealthyKidneys;
    res.json({
        numOfKidneys, 
        numOfHealthyKidneys,
        numOfUnhealthyKidneys
    })
})

// app.use(express.json()); //   for req.body

// post data
app.post("/", function(req, res){
    // const req.body is undefined;
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.send("Done!")
})

// replace data // change all kidney to healthy
app.put("/", function(req, res){
    if(isUnhealthyPresent()){
        for(let i=0; i<users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.send("Done!")
    } else {
        res.status(411).json({msg: "No Bad Kidney Present to make is healthy"})
    }
})

// delt; remove all unhealthy kidneys; only if unhealthy exists
function isUnhealthyPresent(){
    let unhealthy = false;
    for(let i=0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy)  
            unhealthy = true;
    }
    return unhealthy;
}

app.delete("/", function(req, res){
    if(isUnhealthyPresent()){
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy)
                newKidneys.push({ healthy: true });
        }
        users[0].kidneys = newKidneys;
        res.json({msg:"done"})
    } else {
        res.status(411).json({
            msg: "No Bad Kidney Present"
        })
    }
})






app.listen(3000);