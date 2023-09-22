import { createContext, useEffect, useState } from "react";
const ChatContext = createContext()
const ChatProvider = ({ children }) => {
    const [user, setUser] = useState("")
    useEffect(() => {
        const user

    }, [])

    return <ChatContext.Provider>{children}</ChatContext.Provider>
}
export default ChatProvider