'use server';

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { db } from "@repo/db";
import { Temporal } from "temporal-polyfill";

export async function createOnRampTransaction(amount: number, provider: string){
    const session = await getServerSession(authOptions);
    const token = Math.random().toString();
    // idealy it should be await axios.get("http//api//hdfc"); 
    // hdfc will give toekn to us; u tell me to take 200 transaction; take this token give it to user

    const userID = session.user.id;
    if(!userID) { return {msge: "user not logged in!"}}

    await db.orm.public.OnRampTransaction
    .create({
        userId: Number(userID), // Your schema has userId Int, and the session id is a string.
        // userId: userID,
        amount,
        status: "Processing",
        token,
        startTime: Temporal.Now.instant(), 
        provider
    })

    return { msge: "On Ramp Transaction added"}

}