import { NextResponse } from "next/server"
import Note from "@/models/noteModel";
import connectDb from "@/app/connectDb/connectDb";
import mongoose from "mongoose"

export async function POST(req, res) {
    try {
        const { description } = await req.json()
        
        return NextResponse.json("sahith")
    } catch (error) {
        console.log(error);

    }
}

export async function GET(req) {
    connectDb()
    return NextResponse.json("you are screwed up")

}