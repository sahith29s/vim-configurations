import connect from "@/dbConfig/dbConfig"
import User from "@/models/userModels"
import { NextResponse, NextRequest } from "next/server"

// import bcryptjs from "bcryptjs"

connect()

export async function POST(request : NextRequest) {
    try {

        return NextResponse.json({message :  "by me"})

        // const { username, email, password } = reqBody
        // console.log("this is" ,reqBody)
        
        // const user = await User.find({ email })
        // if (user) {
        //     return NextResponse.json({ error: "User already exits" })
        // }
        
        // const reqBody = await request.json()

        // const newUser = new User({
        //     username,
        //     email,
        //     password,
        // })

        // const savedUser = await newUser.save()
        // console.log(savedUser);

        // return NextResponse.json({

        //     message: "User created Successfully", savedUser

        // })

    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    };

}