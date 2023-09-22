import React, { useEffect, useState } from 'react'

import axios from "axios"

const Chatpage = () => {
    const [chats, setChats] = useState(second)

    const fetchChats = async () => {
        let { data } = await axios.get("http://localhost:5000/api/chat")
        console.log(data)
    }
    
    useEffect(() => {
        fetchChats()
    }, [])


    return (

        <div>Chatpage</div>
    )
}

export default Chatpage