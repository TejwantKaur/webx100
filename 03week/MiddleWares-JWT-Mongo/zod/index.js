const express = require("express");
const app = express();
const zod = require("zod")

// const schema = zod.array(zod.number());
const schema = zod.object({
    email: zod.string().email(),
    password: zod.string(),
    // country: "IN", "US"
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys: zod.array(zod.number()),
})


app.use(express.json());

app.post("/health", function(req, res){
    const kidneys = req.body?.kidneys;
    // { "kidneys" : [1,2,0] }
    const response = schema.safeParse(kidneys);

    if(response.success){
        const kidLen = kidneys.length;
        // res.send() 
        res.json({
            msg: `You have ${kidLen} kidneys`,
            response
        }) // 3
    }

    else {
        // res.send ({response})
        res.status(411).json({
            msg: "invalid input",
            response
        })
    }
});

const abc = 10;

// global catches
// special type of middle ware that accepts 4 argument
// app.use(function(error, req, res, next){
//     res.json("Something is wrong")
// })


app.listen(3000)