import connect from "@/dbConfig/dbConfig"

import User from "@/models/userModels"
import { NextResponse, NextRequest } from "next/server"

import bcryptjs from "bcryptjs"

connect()

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()
        const {username , email , password} = reqBody
        console.log(reqBody);

        //check if user already exists 
        const user = await User.find({email})
        if(user){
            return NextResponse.json({error : "User already exits"})
        }
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    };

}