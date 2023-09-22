"use client"
import React  from 'react'
import { useState } from 'react'

const page = () => {
  const [username, setUsername] = useState("")
  return (
    <>
      <h1>Enter your name</h1>
      <form action="">
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className='border-zinc-800 border-2 p' />
      </form>
    </>
  )
}

export default page