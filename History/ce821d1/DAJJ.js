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
      // console.log(data)
      console.log(blogs)
      })
  }, [])


  return (
  <>
{
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
  }
}
  </>
  )
}

export default blog

