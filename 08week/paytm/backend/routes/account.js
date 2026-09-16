const express = require("express");
const mongoose = require("mongoose");
const { authMiddleware } = require("../middleware");
const { Account } = require("../db");
const router = express.Router();

// Balance
router.get("/balance", authMiddleware, async (req, res) => {
  const account = await Account.findOne({ userId: req.userId }); // find account by id
  res.json({ balance: account.balance });
});

// { amount, toId }
router.post("/transfer", authMiddleware, async (req, res) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction(); // starting point
    const fromId = req.userId;
    const { amount, toId } = req.body;

    const fromAccount = await Account.findOne({ userId: fromId }).session(
      session,
    );
    if (!fromAccount || fromAccount.balance < amount) {
      // amount to be sent
      await session.abortTransaction();
      return res.status(400).json({ msge: "Insufficient Balance" });
    }

    const toAccount = await Account.findOne({ userId: toId }).session(session);
    if (!toAccount) {
      await session.abortTransaction();
      return res.status(400).json({ msge: "Account doesn't Exists! " });
    }

    // transfer balance
    await Account.updateOne( { userId: fromId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne( { userId: toId },{ $inc: { balance: amount } }).session(session);

    // end transaction;
    await session.commitTransaction();
    res.json({ msge: "Transfer Successfull" });
  } 
  catch (err) {
    await session.abortTransaction();
    return res.status(400).json({ err });
  }
  finally {
    session.endSession();
  }
});
// http://localhost:3000/api/v1/account/transfer
// { "amount": 1000, "toId": "6aa9efcb8e2a505036e2c8ae" }


module.exports = router;
