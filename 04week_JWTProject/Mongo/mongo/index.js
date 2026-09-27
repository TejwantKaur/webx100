const express = require('express')
const app = express()

const bodyParser = require('body-parser') 
const adminRouter = require('./routes/admin')
const userRouter = require('./routes/user')

// middlewares
app.use(bodyParser.json()); // req.body pdhn vste

// jo vi request /admin/adjf/course/.... jithe vi aon sbto pehle admin router te jaan; so middleware bnaa dita ehnu; 
app.use('/admin', adminRouter) // link /admin/.... baad vala adminRouter ch;
// same for user;
app.use('/user', userRouter) // /user/.... baad vala userRouter ch;

const PORT = 3000
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})