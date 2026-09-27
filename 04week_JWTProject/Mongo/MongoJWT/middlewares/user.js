const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../config');

function userMiddleware(req, res, next){
    const token = req.headers.authorization;
    const words = token.split(" ");
    console.log(words)
    console.log(words[1])
    const jwtToken = words[1];

    // verify
    try { 
        const verified = jwt.verify(jwtToken, JWT_SECRET)
        if(verified.username){
            req.username = verified.username;
            next()
        }
        else { 
            res.status(403).json( { msg: "incorrect username | not exists" } ) 
        }
    } catch(e){
        res.json({msge: 'users token not matched'})
    }  
}

module.exports = userMiddleware