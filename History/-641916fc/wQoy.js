"use client"
import React, { useEffect } from 'react'


const page = async () => {
  useEffect(() => {
    ( async () => {

      let data = await fetch("https://jsonplaceholder.typicode.com/users")
      console.log(data);
    })()
  }, [])

  return (
    <div>page</div>
  )
}

export default page