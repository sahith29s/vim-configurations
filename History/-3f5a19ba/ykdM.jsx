import React from 'react'
import "../styles/Main.css"
import { Link } from 'react-router-dom'
import { useRef } from 'react'

const Main = () => {
    const inputRef = useRef(null)
    return (
        <>
            <div className="container">
                <div className="title text-light"> Quiz Application </div>

                <ol>
                    <li>You will be asked 10 questions one after another.</li>
                    <li>10 points is awarded for the correct answer.</li>
                    <li>Each question has three options. You can choose only one options.</li>
                    <li>You can review and change answers before the quiz finish.</li>
                    <li>The result will be declared at the end of the quiz.</li>
                </ol>

                <form id='form'>
                    <input className="userid" type="text" placeholder="Username*" ref={inputRef} />
                </form>
                
                <div className="start">
                    <Link className="btn" to={"quiz"} >Start Quiz</Link>
                </div>
            </div>
        </>
    )
}

export default Main