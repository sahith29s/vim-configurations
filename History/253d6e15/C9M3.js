import React from 'react'

const page = async () => {
    let data =  await fetch("https://jsonplaceholder.typicode.com/users")

    return (
        <div>Sahith</div>
    )
}

export default page