const { Router } = require("express");
const router = Router();
const userMiddleware = require('../middlewares/user')
const { User, Course } = require("../db");

// /user/signup
router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.create({ username, password })
    res.json({ msge: "user created!" })
}) // user1@gmail.com; 1234
// POST http://localhost:3000/user/signup

// no validationn required;
// show all courses 
router.get('/courses', async (req, res) => {
    const response = await Course.find({})
    console.log(response)
    res.json({ courses: response })
})
// GET http://localhost:3000/user/courses

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // purchase courses
    const courseId = req.params.courseId // from URL
    const username = req.headers.username // since userMiddleware so username in header
    
    try {
        // input validation
        await User.updateOne(
            { username }, 
            { "$push": { purchasedCourse: courseId }}
        )
        res.json({ msge: "purchase successfully!"})
    } catch(e) { 
        console.log(e) 
    }
});
// POST http://localhost:3000/user/courses/6a9e2a34a7741c7aa2a283c4
// headers: user1@gmail.com; 1234

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.headers.username // since userMiddleware so username in header
    })
    console.log(user.purchasedCourse)
    const courses = await Course.find({
        _id: { "$in": user.purchasedCourse }
    })
    res.json({ courses })
})

module.exports = router