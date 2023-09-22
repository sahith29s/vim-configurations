"use client"
import React, { useEffect } from 'react'


const page = () => {
  useEffect(() => {
    ( async () => {

      let data = await fetch("https://jsonplaceholder.typicode.com/users")
      data = await data.json()
      console.log(data);
    })()
  }, [])

  return (
    <div>page</div>
  )
}

export default page