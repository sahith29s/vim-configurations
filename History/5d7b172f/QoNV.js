import { NextResponse } from "next/server"
import mongoose from "mongoose"
export async function POST(req, res){
    console.log(req);
    return NextResponse.json("sahith")
}

export async function GET(req){
    return NextResponse.json("you are screwed up")
}