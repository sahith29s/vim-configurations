"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Axios } from 'axios'


const page = () => {
    const route = useRouter()

    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "",

    })
    const [buttonDisabled , setButtonDisabled] = React.useState(false)

    const onSignup = async () => {

    }

    useEffect(() =>{
        if(user.email.length> 0 && user.password.length > 0 && user.username.length > 0){

        }

    },[user])
    
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white bg-black">
                <h1>Signup</h1>

                <label htmlFor="username">username</label>
                <input
                    className="p-2 mb-4 text-black border-gray-300 rounded-lg boder focus:outline-none focus:border-gray-600"
                    type="text"
                    id='username'
                    value={user.username}
                    onChange={(e) => { setUser({ ...user, username: e.target.value }) }}
                    placeholder='username'
                />

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
                    onClick={onSignup}
                    className="p-2 mb-4 border-gray-300 rounded-lg boder focus:outline-none focus:border-gray-600"
                >
                    Signup
                </button>

                <Link href="/login" >Vist the Login page</Link>

            </div>

        </>
    )
}

export default page