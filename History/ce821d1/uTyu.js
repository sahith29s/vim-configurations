// import React from 'react'
// import Link from "next/link"




// const blog = async()=> {
//   // fetch("http://localhost:3000/api/blogs").then(a=>{
//   //   return a.json()
//   // }).then(data=>{
//   //   console.log(data)
//   // })
//   // console.log("sahitht")
//   return (
//     <div>
//       <div>
//         <h1>Latest by  blogs</h1>
//         <h2>Blog one</h2>
//       </div>
      
//     </div>
//   )
// }

// export default blog


import React, { useEffect } from 'react'

function blog() {
useEffect(()=>{
  fetch("http://localhost:3001/api/blogs").then(a=>{
  return a.json()
  })
  .then((data)=>{
    console.log(data)
    console.log("sahith")
  })
},[])

  return (
    <div>blolsdfjg</div>
  )
}

export default blog

