const mongoose = require("mongoose");
const { schema } = mongoose;

// const userSchema = new Schema({
//     username: String,
//     firstName: String,
//     lastName: String,
//     password: String
// })

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    maxLength: 30,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = { User };
