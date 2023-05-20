

import React, { useState, useEffect } from 'react'

function blog() {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch("http://localhost:3001/api/blogs").then(a => {
      return a.json()
    })
      .then((data) => {
        setBlogs(data)
      })
  }, [])

  return (
  <>
  
 {
  blogs.map((item)=>{
    <div>{item.title}</div>
    console.log(item.title)
  })
 } 
  
  </>
  )
}

export default blog

