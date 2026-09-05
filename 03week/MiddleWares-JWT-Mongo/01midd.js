// count how many times we changed routes;

const express = require("express");
const app = express();

let reqCnt = 0;

// http://localhost:3000/requestCount
// middleware will not get triggered for this url;
app.get('/requestCount', function(req, res){
    res.status(200).json({reqCnt});
})

app.use(function(req, res, next){
    reqCnt+=1;
    next();
})

// http://localhost:3000/user
// uses middleware
app.get("/user", function(req, res){
    res.status(200).json({name: 'john'});
});

app.listen(3000);

