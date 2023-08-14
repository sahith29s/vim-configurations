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
    })

    const onLogin = async () => {
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white bg-black">
                <h1>Login</h1>

                <label htmlFor="email">email</label>
                <input
                    className="p-2 mb-4 text-black border-gray-300 rounded-lg boder focus:outline-none focus:border-gray-600"
                    type="text"
                    id='email'
                    value={user.email}
                    onChange={(e) => { setUser({ ...user, email: e.target.value }) }}
                    placeholder='email'
                />

                <label htmlFor="password">password</label>
                <input
                    className="p-2 mb-4 text-black border-gray-300 rounded-lg boder focus:outline-none focus:border-gray-600"
                    type="password"
                    id='password'
                    value={user.password}
                    onChange={(e) => { setUser({ ...user, password: e.target.value }) }}
                    placeholder='password'
                />

                <button
                    onClick={onLogin}
                    className="p-2 mb-4 border-gray-300 rounded-lg boder focus:outline-none focus:border-gray-600"
                >
                    Login
                </button>

                <Link href="/signup" >Vist the Signin page</Link>

            </div>

        </>
    )
}

export default page