import {connect} from "@/dbConfig/dbConfig"

import User from "@/models/userModels"
import { NextResponse , NextRequest } from "next/server"

import bcryptjs from "bcryptjs"

connect()