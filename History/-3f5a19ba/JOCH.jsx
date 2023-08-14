import React from 'react'
import "../styles/Main.css"
import { useRef } from 'react'


const Main = () => {
    const inputRef = useRef(null)
    return (
        <>
            <div className="container">
                <div className="title text-light">
                    <ol>
                    
                    </ol>
                    https://github.com/akashyap2013/Quiz_App_Client.git
                    https://github.com/akashyap2013/Quiz_App_Client.git
                    <lihttps:></lihttps://github.com/akashyap2013/Quiz_App_Client.git>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <form >
                        <input type="text" placeholder="Username*" ref={inputRef} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Main