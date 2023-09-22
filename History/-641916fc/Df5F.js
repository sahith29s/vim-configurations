import React from 'react'


const page = async () => {
  use
  let data = await fetch("https://jsonplaceholder.typicode.com/users")
  console.log(data);
  return (
    <div>page</div>
  )
}

export default page