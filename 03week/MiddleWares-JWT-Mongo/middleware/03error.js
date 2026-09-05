const express = require("express");
const app = express();

// maintain error count variable;
let errCnt = 0;

app.get("/errCount", function(req, res){
    res.json({errCnt})
})


// bad way to throw error
// app.get("/user", function(req, res){
//     let a;  // undefined
//     a.length;  // throws an err
//     res.status(200).json({msg: 'John'})
// });

// cool way 
app.get("/user", function(req, res){
    throw new Error("some error")
    res.status(200).json({msg: 'John'})
})

// any time; it finds exception; 
// error handling middleware at the end;
app.use(function(err, req, res, next){
    res.status(400).json({ msg: "exception" })
    errCnt+=1;
})



app.listen(3000)




