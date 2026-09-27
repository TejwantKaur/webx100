const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
// const { connectDB } = require("./db")

const app = express();
app.use(cors());
app.use(express.json());

// connectDB();

app.use("/api/v1", mainRouter);
// after this breakpoint go to mainRouter

// api/v1/user/signup
// api/v1/user/signin
// api/v1/user/changePassword

// api/v1/account/transferMoney
// api/v1/account/balance

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
