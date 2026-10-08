// http://localhost:3000/api/user

import { NextRequest } from "next/server"

export function GET(){
    return Response.json({ name:"Tejwant", email:"tej@want.com" })
}

export async function POST(req: NextRequest){
    // extract body
    const body = await req.json();
    
    // store
    console.log(body);

    // response to user
    return Response.json({
        msge: "You are Logged in!"
    })
}

// postgresql://neondb_owner:npg_jWi31gImxKwR@ep-fancy-base-ai6mcxpd-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require