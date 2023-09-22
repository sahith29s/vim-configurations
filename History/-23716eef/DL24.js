import React, { useEffect, useState } from 'react'

import axios from "axios"

const Chatpage = () => {
    const [chats, setChats] = useState([])

    const fetchChats = async () => {
        let { data } = await axios.get("http://localhost:5000/api/chat")
        setChats(data)
    }
    
    useEffect(() => {
        fetchChats()
    }, [])


    return (

        <div>
            {
                chats.map((item , index ,arrary) => {  
                    return <div>
                        {item.username}
                    </div>
                })
            }
        </div>
    )
}

export default Chatpage