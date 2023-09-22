
import React, { useEffect, useState } from 'react';
import io from "socket.io-client"
let socket: any;
socket = io("http://localhost:5001")

const messages = [
    { text: 'Hello!', isUser: false },
    { text: 'Hi there!', isUser: true },
    { text: 'How are you?', isUser: false },
    { text: 'I\'m good, thanks!', isUser: true },
    { text: 'I\'m good, thanks!', isUser: true },
];

const Chat = () => {
    const [arrayOfMessageObj, setArrayOfMessageObjects] : any = useState([...messages])

    const [message, setMessage] = useState("")
    const handleSend = () => {

        let messageObject = { text: message, isUser: true }
        setArrayOfMessageObjects([...arrayOfMessageObj, messageObject])
        socket.emit("message", messageObject)

        socket.on("messageBackFromBackend", (messageObjectFromServer : any) => {
            setArrayOfMessageObjects([...arrayOfMessageObj , messageObjectFromServer])
        })
    }

    return (
        <>
            <div className=''>
                <div className="bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400 h-screen flex items-center flex-col">

                    <div className='w-[80%]'>

                        <div className="h-[80vh] flex-1 overflow-y-auto p-4">
                            {setArrayOfMessageObjects.map((message, index) => (
                                <div
                                    key={index}
                                    className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
                                >
                                    <div className={`rounded-lg py-2 px-4 inline-block ${message.isUser ? 'bg-green-400 text-white shadow-md' : 'bg-white text-gray-700 shadow-sm'}`}>
                                        {message.text}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="p-4">
                            {/* Your message input component can go here */}
                            <div>
                                <input value={message} onChange={(e) => setMessage(e.target.value)} className='w-[63rem] h-[2rem] rounded-lg ' type="text" />
                                <button onClick={handleSend} className='text-white bg-black py-1 px-1 rounded-r-lg relative right-[2.8rem]'>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Chat;

