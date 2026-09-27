// const express = require('express')
const { Router } = require('express');
// const router = express.Router()
const router = Router(); 
const adminMiddleware = require('../middlewares/admin');
const { Admin, Course } = require('../db/index')

// ||lar to app.express.router

// const app = express();
// app.post()

// ethe sidda continue ker rhe; 
// it handles; /admin/signup

// router.post('/signup', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     Admin.create({ username, password })
//     .then(function(){ 
//         res.json({ msg: 'Admin created!' }) 
//     })
// })
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({ username, password })
    // if await is ok; only then res.json
    res.json({ msg: 'Admin created!' })  
})
// POST http://localhost:3000/admin/signup
// body {
//   "username": "tejwant@gmail.com",
//   "password": "123"
// }

// courses create kerna; check valid admin; or not
// app.use; ovi import kerna pena c so directly middleware da name;

// Create new Course
router.post('/courses', adminMiddleware, async (req, res) => {
    // use zod;
    const title = req.body.title;
    const desc = req.body.decription;
    const imgL = req.body.imageLink;
    const price = req.body.price

    let newCourse = await Course.create({ title, desc, imgL, price })
    console.log(newCourse)
    return res.json({ 
        msge: 'Course created Successfully', 
        courseId: newCourse._id 
    })  
    // return course id which is created automatically in mongo db as _id
})
// POST http://localhost:3000/admin/courses
// Header: username tejwant@gmail.com || password 123
// body {
//   "title": "full stack dev",
//   "description": "100xdevops",
//   "imageLink": "https://google.com/cat.png",
//   "price": 5999  
// } 


// router.get('/courses', (req, res)=>{
//     res.json({msh: "hi"})
// })

// Show all courses
router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find({})
    res.json({ courses: response })
})
// GET http://localhost:3000/admin/courses

module.exports = router;

// created courses??