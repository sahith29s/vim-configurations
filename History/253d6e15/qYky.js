import React from 'react'

const page = async () => {
    console.log("sahith");
    let data =  await fetch("https://jsonplaceholder.typicode.com/users")
    data = await data.json()
    console.log(data);
    console.log("shaith");

    return (
        <div>Man</div>
    )
}

export default page