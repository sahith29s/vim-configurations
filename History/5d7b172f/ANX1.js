import { NextResponse } from "next/server"
import connectDb from "@/app/connectDb/connectDb";
import mongoose from "mongoose"

export async function POST(req, res){
    const {_id} = await req.body
    console.log(_id);
    return NextResponse.json("sahith")
}

export async function GET(req){
    connectDb()
    return NextResponse.json("you are screwed up")

}