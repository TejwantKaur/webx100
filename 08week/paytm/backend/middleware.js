const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("./config")

const authMiddleware = (req, res, next) => {
    const authHeaders = req.headers.authorization; // const token = ; 
    // send authorization in headers: Bearer token; get by signin

    if(!authHeaders || !authHeaders.startsWith("Bearer "))
        return res.status(403).json({ msge: "Invalid token recieved" })

    // const words = authHeaders.split(" "); token = words[1]
    const jwtToken = authHeaders.split(" ")[1]; // [0] = "Bearer"

    // verify
    try { 
        const verified = jwt.verify(jwtToken, JWT_SECRET)
        console.log("Verified", verified)
        
        if(verified.userId){ // id
            // send username, in req, so that it is accessable after this middleware
            req.userId = verified.userId;
            next()
        } else {
            console.log("No user ID")
            return res.status(403).json({})
        }
    } catch (err) {
        res.status(403).json({err})
    }
}

module.exports = {authMiddleware};