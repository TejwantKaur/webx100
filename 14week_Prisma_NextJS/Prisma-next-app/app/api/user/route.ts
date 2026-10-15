// http://localhost:3000/api/user

// route.ts; coz we want this route;
import { NextRequest, NextResponse } from "next/server"
import { db } from "@/src/prisma/db";

export async function POST(req: NextRequest){
    // extract body
    const body = await req.json();

    // store
    console.log(body);

    try{
        const user = await db.orm.public.User.create({
            username: body.username,
            password: body.password,
        })
        // response to user
        return NextResponse.json({
            user,
            msge: "You are Logged in!"
        })
    } catch(e){
        console.log(e);
        return NextResponse.json({ msge: "err catch" });
    }
}

// postgresql://neondb_owner:npg_jWi31gImxKwR@ep-fancy-base-ai6mcxpd-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require