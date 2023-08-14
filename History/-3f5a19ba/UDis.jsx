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
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    </ol>

                    <form >
                        <input type="text" placeholder="Username*" ref={inputRef} />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Main