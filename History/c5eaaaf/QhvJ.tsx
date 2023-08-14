"use client"
import { useState } from 'react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
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
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1>Signup</h1>

                <label htmlFor="username">username</label>
                <input
                    type="text"
                    id='username'
                    value={user.username}
                    onChange={(e) => {setUser({...user , username : e.target.value})}}
                    

                />
            </div>

        </>
    )
}

export default page