const { Router } = require('express')
const router = Router()
const userMiddleware = require('../middlewares/user')
const { User, Course } = require('../db/index')
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../config')

// User Routes
router.post('/signup', async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    await User.create({ username, password })
    res.json({ msge: 'Profile created!'})
})

// returns jwt-token
router.post('/signin', async(req, res) => {
    // admin signin
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({
        username, password
    })
    if(user){
        const token = jwt.sign({ username }, JWT_SECRET)
        res.json({ token })
    } else {
        res.json({msge: 'wrong email & password'})
    }
})
// POST http://localhost:3000/user/signin

// show all courses
router.get('/courses', async(req, res) => {
    const courses = await Course.find({})
    res.json({ courses })
})
// GET http://localhost:3000/user/courses

// purchase course // user da token add kero 
router.post('/courses/:courseId', userMiddleware, async (req, res) => { 
    // coz we added in req.username; so we can access it rn
    const username = req.username;
    const courseId = req.params.courseId

    try {
        await User.updateOne(
            { username },
            { "$push": { purchasedCourses: courseId }}
        )
        res.json({ msge: "purchased successfully!"})
    } catch(e){
        res.json({ msge: "purchased fail" })
    }
})
 
// show purchased courses;
router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    const user = await User.findOne({
        username: req.username
    })
    const courses = await Course.find({
        _id: { "$in": user.purchasedCourse }
    })
    res.json({ courses })
})

module.exports = router