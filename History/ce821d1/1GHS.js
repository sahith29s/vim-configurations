import styles from "@/styles/Home.module.css";
import React, { useState, useEffect } from 'react'

function blog() {
  // const [blogs, setBlogs] = useState([])
  let blogs = []
  useEffect(() => {
    fetch("http://localhost:3001/api/blogs").then(a => {
      return a.json()
    })
      .then((data) => {
      blogs.push(data)
      console.log(data[0])
      })
  }, [])


  return (
  <>
<div>
  {

    blogs.map((value)=>{
      <div> {value}</div>
    })
  }
  
</div>
  </>
  )
}

export default blog

