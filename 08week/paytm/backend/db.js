const mongoose = require("mongoose");
const { Schema } = require("mongoose");
const mongo_url = "mongodb+srv://kaurtejwant998_db_user:D1gYKtJptyafhpAN@paytmcluster.ina5mgz.mongodb.net/Paytm"

async function connectDB(){
  await mongoose.connect(mongo_url);
  console.log("DB Connected!")
}

//   async function connectDB() {
//     await mongoose.connect(MONGO_URL);
//     console.log("MongoDB connected");
// }

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

// another db that will store the balance of user in mongo db;
const accountSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // id stored in mongoose as object id's
    ref: 'User', // ensures userId must belong to User table; only then we can add balance;
    required: true
  },
  balance: {
    type: Number,
    required: true,
  }
})

const User = mongoose.model("User", userSchema);
const Account = mongoose.model("Accounts", accountSchema);
module.exports = { User , Account, connectDB };
