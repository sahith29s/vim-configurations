import React from 'react'

const page = async () => {
    let data =  await fetch("https://jsonplaceholder.typicode.com/users")
    data = await data.json()
    console.log(data);
    console.log("shaith");

    return (
        <div>Sahith</div>
    )
}

export default page