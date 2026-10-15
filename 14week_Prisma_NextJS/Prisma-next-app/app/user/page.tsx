import axios from 'axios';

import { NextRequest, NextResponse } from "next/server"
import { db } from "@/src/prisma/db";

async function fetchData(){
    const user = await db.orm.public.User.first();
    return { 
        username: user?.username,
        password: user?.password
    }
}

export default async function User() {
  const userDetails = await fetchData();
  return (
    <div className="flex flex-col justify-center h-screen">
      <div>
        <div className="flex justify-center"> {userDetails.username} </div>
        <div className="flex justify-center"> {userDetails.password} </div>
      </div>
    </div>
  )
}
