import React, { useEffect } from 'react'
import axios from "axios"

const Chatpage = () => {

    const fetchChats = async () => {
        let data = await axios.get("http://localhost:5000/api/chat")
        let res = await data.json
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