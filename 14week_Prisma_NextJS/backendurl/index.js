const express = require("express");

const app = express();

app.get('/api/v1/user', (req, res)=>{
    return res.json({name: "Tejwant", email: "kaur@want.com"});
})

app.listen(3001);