"use client"

import { useState } from 'react'
import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/navigation"
import { Axios } from 'axios'



const page = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async () => {
    }


    return (
        <>

            <div className="flex flex-col items-center justify-center min-h-screen py-2 "></div>
            
            <h1>Login</h1>

        </>
    )
}

export default page