"use client"
import React, { useEffect, useState } from 'react'


const page = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    (async () => {

      let data = await fetch("https://jsonplaceholder.typicode.com/users")
      data = await data.json()
      setUsers(data)
    })()
  }, [])

  return (
    <div>
      {
        users.map((item , index ,arrary) => {  
          return <div >{item.username}</div>
        })
      }
    </div>
  )
}

export default page