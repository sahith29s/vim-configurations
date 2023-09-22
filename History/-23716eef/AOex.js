import React, { useEffect } from 'react'
import axios from "axios"

const Chatpage = () => {

    const fetchChats = async () => {
        const data = await axios.get("http://localhost:5000/api/chat")
        const res = await data
        console.log(res)
    }

    useEffect(() => {
        fetchChats()
    }, [])


    return (

        <div>Chatpage</div>
    )
}

export default Chatpage