import React, { useEffect } from 'react'
import axios from "axios"

const Chatpage = () => {

    const fetchChats = async () => {
        const res = await axios.get("http://localhost:5000/api/chat")
        const { data } = await res.
        console.log()
    }

    useEffect(() => {
        fetchChats()
    }, [])


    return (

        <div>Chatpage</div>
    )
}

export default Chatpage