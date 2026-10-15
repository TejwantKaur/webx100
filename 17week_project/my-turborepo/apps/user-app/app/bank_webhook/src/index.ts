import express from "express";
import { db } from "@repo/db";
// add => "@repo/db": "*", 

const app = express();

app.post("/hdfcWebhook", async(req, res)=>{
    const paymentInfo = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    }
    
    try{
        await db.$transaction([
            await db.orm.public.Balance
            .where({ userId: paymentInfo.userId })
            .update({ amount: { increment: paymentInfo.amount } }),
            
            // update status
            await db.orm.public.onRampTransaction
            .where({ token: paymentInfo.token})
            .update({ status: "Success"})

        ]),
        res.json({ msge: "Captured!" })
    }
    catch(e){
        console.log(e);
        res.status(411).json({ msge: "Payment Failed!" })
    }
})

app.listen(3003);
