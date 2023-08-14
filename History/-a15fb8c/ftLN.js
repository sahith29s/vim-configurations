import React from 'react'
import "./LandingPage.css"

const LandingPage = () => {
    return (
        <>
            <div className="main">
                <div className="container">

                    <div className="row">
                        <div className="intro-text">

                            <div>
                                <h1 className="title">Welcome to Note Zipper</h1>
                                <p className="subtitle">One Safe palce for allyour notes.</p>
                            </div>

                        <div className="buttonContainer">
                            <a  href="/landing">
                                <button size="lg" className='landingButtond' >Landing Button</button>
                            </a>

                            <a  href="/login">
                                <button size="lg" className='loginButton' >Login</button>
                            </a>
                        </div>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LandingPage