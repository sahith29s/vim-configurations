import { NextResponse } from "next/server"
export default function GET(req, res){
    return NextResponse.json({name : "sahith"})
}