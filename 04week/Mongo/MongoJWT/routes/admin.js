const { Router } = require('express')
const router = Router()
const adminMiddleware = require('../middlewares/admin')
const { Admin, Course } = require('../db/index')
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require('../config')

// Admin Routes; creates profile
router.post('/signup', async(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({ username, password })
    res.json({ msge: 'Profile created!'})
})
// POST http://localhost:3000/admin/signup
// { "username": "admin1@gmail.com", "password": "1234" }

// returns jwt-token; send us token
router.post('/signin', async(req, res) => {
    // admin signin
    const username = req.body.username;
    const password = req.body.password;
    const user = await Admin.find({
        username, password
    })
    if(user){
        const token = jwt.sign({ username }, JWT_SECRET)
        res.json({ token })
    } else {
        res.json({msge: 'wrong email & password'})
    }
})
// POST http://localhost:3000/admin/signin
// { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluMUBnbWFpbC5jb20iLCJpYXQiOjE3ODg3NjUwNjV9.QCtR-n6US74eVa6hI927KnIAglGNS5L-5Ekue17d74Q" }

// Create new Course
router.post('/courses', adminMiddleware, async (req, res) => {
    // use zod;
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price

    let newCourse = await Course.create({ title, description, imageLink, price })
    console.log(newCourse)
    return res.json({ 
        msge: 'Course created Successfully', 
        courseId: newCourse._id 
    })  
    // return course id which is created automatically in mongo db as _id
})
// POST http://localhost:3000/admin/courses
// Headers: Authorization:  Bearer eyJhbGci....
// { title, desc, imgL, price }

// Show all courses
router.get('/courses', adminMiddleware, async(req, res)=>{
    const response = await Course.find({})
    res.json({ courses: response })
})

module.exports = router