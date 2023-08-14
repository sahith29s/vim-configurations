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

    
    return (
        <>
            
        </>
    )
}

export default page