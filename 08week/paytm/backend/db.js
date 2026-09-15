const mongoose = require("mongoose");

async function main() {
  await mongoose.connect(
    "mongodb+srv://kaurtejwant998_db_user:D1gYKtJptyafhpAN@paytmcluster.ina5mgz.mongodb.net/Paytm",
  );
}
