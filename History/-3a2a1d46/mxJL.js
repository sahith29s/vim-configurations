import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ChatContext = createContext()
const navigate = Navigate()
const ChatProvider = ({ children }) => {
    const [user, setUser] = useState("")
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        setUser(userInfo)

        if (!userInfo) {
            navigate("/")
        }
    }, [])

    return <ChatContext.Provider>{children}</ChatContext.Provider>
}
export default ChatProvider