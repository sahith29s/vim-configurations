import { NextResponse } from "next/server"
import mongoose from "mongoose"
export async function GET(req, res){
    console.log(req);
    return NextResponse.json("sahith")
}