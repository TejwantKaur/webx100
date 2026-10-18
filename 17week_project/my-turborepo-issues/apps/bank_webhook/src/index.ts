import express from "express";
import { db } from "@repo/db";
// add => "@repo/db": "*", 

const app = express();
app.use(express.json());

app.post("/hdfcWebhook", async(req, res)=>{
    const paymentInfo = {
        token: req.body.token, // user with this token
        userId: Number(req.body.user_identifier),
        amount: Number(req.body.amount) // nd this amt has successfully made a transaction
    }
    // {
    //   "token":"0.053474275803861104",
    //   "user_identifier": "1",  // sending transactions; login person
    //   "amount": "20000"
    // }

    if(!paymentInfo.token || Number.isNaN(paymentInfo.userId) || !(paymentInfo.amount > 0)) {
        return res.status(400).json({ msg: "Bad request" });
    }
    try {
       await db.transaction(async(tx :any) => {
        // get token and then update its status;
            const trans = await tx.orm.public.OnRampTransaction
            .where({ token: paymentInfo.token })
            .first();

            // unknown token, or this webhook was already processed
            if (!trans || trans.status !== "Processing") {
                throw new Error("Invalid or already processed");
            }

            // prisma 7;
            // db.balance.updateMany({
            //     where: {userId: Number(paymentInformation.userId)},
            //     data: {amount: { increment: Number(paymentInformation.amount)}}
            // }),

            await tx.execute(
                db.raw.sql`UPDATE "Balance" SET amount = amount + ${paymentInfo.amount} WHERE "userId" = ${paymentInfo.userId}`
                .affectedCount()
                .build()
            );

            await tx.orm.public.OnRampTransaction
            .where({ token: paymentInfo.token })
            .updateAll({ status: "Success" });
        });
        res.json({msge: "Captured!"})
    }
    catch(e){
        console.log(e);
        res.status(411).json({ msge: "Payment Failed!" })
    }
})

await db.connect();

app.listen(3003, () => {
  console.log("bank_webhook listening on http://localhost:3003");
});

// https://www.prisma.io/docs/orm/fundamentals/transactions
// https://www.prisma.io/docs/orm/coming-from-prisma-orm-7#not-available-yet
