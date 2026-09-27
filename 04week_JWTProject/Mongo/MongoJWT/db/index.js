const mongoose  = require('mongoose')

mongoose.connect(
    'mongodb+srv://kaurtejwant998_db_user:U3UPOV2YnaKHAU6A@cluster0.1vfzbyb.mongodb.net/CourseSellingApp2'
);

// Schemas
const adminSchema = new mongoose.Schema({
    username: String, 
    password: String
})
const userSchema = new mongoose.Schema({
    username: String, 
    password: String,
    purchasedCourses: [{
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

const Admin = mongoose.model('Admin', adminSchema);
const User = mongoose.model('User', userSchema);
const Course = mongoose.model('Course', courseSchema);

module.exports = { Admin, User, Course }
