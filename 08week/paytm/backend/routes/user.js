const express = require("express")
const zod = require('zod')
const { User, Account } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config")
const { authMiddleware } = require("../middleware")

const router = express.Router()

// signup
const signupSchema = zod.object({
    username: zod.email(), // actually email
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
})
// api/v1/user....
router.post("/signup", async (req,res) => {
    const body = req.body;
    // const response = signupSchema.safeParse(req.body)
    // if(!response.success){
    //     return res.json({ msge: "Wrong Email / Incorrect inputs / Could'nt pass Schema!" })
    // }

    const { success } = signupSchema.safeParse(req.body);
    if(!success) { 
        return res.json({ msge: "Wrong Email / Incorrect inputs / Could'nt pass Schema!" }) 
    }

    // making sure user does'nt signup twice;
    const existingUser = await User.findOne({ username: body.username }); // null or user
    // if(existingUser._id) { return res.status(411).json({ msge: "User already exists!" }) } null_.id;
    if(existingUser) { return res.status(411).json({ msge: "User already exists!"}) }

    // if(!existingUser)
    const dbUser = await User.create(body) // username, passwrd, fname, lname
    // const user = await User.create({
    //     username: req.body.username,
    //     password: req.body.password,
    //     firstName: req.body.firstName,
    //     lastName: req.body.lastName,
    // })

    const userId = dbUser._id
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    // not hashing passwords, just allowing authentication;
    const token = jwt.sign({ userId: dbUser._id }, JWT_SECRET) // token is created; userId: 
    // try: const token = jwt.sign({ dbUser._id }, JWT_SECRET) // token is created; userId: 

    res.json({ 
        msge: "Profile created successfully", 
        token: token
    })
})
// { "username": "user1@gamil.com", "password": "1234567", "firstName": "user", "lastName": "sharma" }

// signin
const signinSchema = zod.object({
    username: zod.email(),
    password: zod.string()
})
router.post("/signin", async(req, res) => {
    const { success } = signinSchema.safeParse(req.body)
    if(!success){
        return res.status(411).json({ msge: "incorrect credentials" })
    }

    const { username, password } = req.body;

    // user sends username and password; so use them to find;
    const user = await User.findOne({
        username, password
    })
    const userId = user._id; // from db

    // if(user){
    //     // verify token
    //     const token = jwt.sign({ userId }, JWT_SECRET)
    //     res.json({ 
    //         msge:"Signedin successfully!", 
    //         token: token 
    //     })
    //     // return;
    // } else {
    //     res.status(411).json({ msge: 'wrong email & password' })
    // }
    if(!user) { 
        return res.status(411).json({ msge: 'wrong email & password' }) 
    }
    // verify token
    const token = jwt.sign({ userId }, JWT_SECRET)
    res.json({ 
        msge:"Signedin successfully!", 
        token: token 
    })
}) 
// { "username": "user1@gamil.com", "password": "1234567" }

// update
const updateSchema = zod.object({
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})
router.put("/", authMiddleware, async(req, res) => {
    const { success } = updateSchema.safeParse(req.body)
    if(!success) res.status(411).json({ msge: "incorrect credentials" })
    
    // User.updateOne(findPerson, work)
    await User.updateOne({ _id: req.userId }, req.body) // why id?
    res.json({ msge: "Updated Successfully!"})

})

// getting data of all users existing currently;
router.get("/bulk", async(req, res) => {
    const filter = req.query.filter || "";  // getting query parameter nd then sending;
    // if nothing; then search empty space which every user has;

    // %har%... jithe jithe v har in (first or last) present show all; 
    const users = await User.find({
        $or: [ // or for doing 2 queries at the same time;
            { firstName: { "$regex": filter }}, // either this is true
            { lastName: { "$regex": filter }}   // or this is true
        ]
    })

    // shows users; having har in first or lastNames;
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            id: user._id
        }))
    })
})


module.exports = router;