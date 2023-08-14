import connect from "@/dbConfig/dbConfig"

import User from "@/models/userModels"
import { NextResponse, NextRequest } from "next/server"

import bcryptjs from "bcryptjs"

connect()

export async function POST(request: NextRequest) {
    try {

        const reqBody = await request.json()
        req
    }
    catch (error: any) {
        return NextResponse.json({ error: error.message })
    };

}