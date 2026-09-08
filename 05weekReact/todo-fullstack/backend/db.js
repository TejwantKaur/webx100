const mongoose = require("mongoose")

mongoose.connect(
    'mongodb+srv://kaurtejwant998_db_user:U3UPOV2YnaKHAU6A@cluster0.1vfzbyb.mongodb.net/Todos'
);

const todoSchema = mongoose.Schema({
    title: String, 
    description: String,
    completed: Boolean
})

const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo }