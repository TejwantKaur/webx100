const mongoose = require('mongoose')

// default db is test;
// mongoose.connect('mongodb+srv://kaurtejwant998_db_user:U3UPOV2YnaKHAU6A@cluster0.1vfzbyb.mongodb.net/');

mongoose.connect(
    'mongodb+srv://kaurtejwant998_db_user:U3UPOV2YnaKHAU6A@cluster0.1vfzbyb.mongodb.net/CourseSellingApp'
);

// Defining Schemas
const adminSchema = new mongoose.Schema({
    username: String,
    password: String,
})

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    purchasedCourse : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    }]
})

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    imageLink: String,
    price: Number,
})

// model variable and model name are conventionally capitalized
const Admin = mongoose.model('Admin', adminSchema)
const User = mongoose.model('User', userSchema)
const Course = mongoose.model('Course', courseSchema)

module.exports = {Admin, User, Course}