const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../config');

function adminMiddleware(req, res, next){
    // irrespective of ke asi header ch Authorization; capital ch likhea h ja small;
    // it will always get converted to small while having here;

    const token = req.headers.authorization;
    // its like Bearer token_afbiabijb
    const words = token.split(" "); // ['Bearer','token']
    const jwtToken = words[1];

    // verify
    try {
        const verified = jwt.verify(jwtToken, JWT_SECRET)
        if(verified.username) { 
            req.username = verified.username // added in headers; 
            next() 
        }
        else {
            res.status(403).json( { msg:"incorrect username | not exists" })
        }
    } catch(e) {
        res.json({msge: "incorrect jwt-token sent"})
    }
}
module.exports = adminMiddleware;