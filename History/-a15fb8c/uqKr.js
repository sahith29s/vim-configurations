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
                                <h2 className="title">Welcome to Note Zipper</h2>
                                <p className="subtitle">One Safe palce for allyour notes.</p>
                            </div>

                            <div className="buttonContainer">
                                <a href="/landing">
                                    <button size="lg" className='landingButton btn btn-primary' >Landing Button</button>
                                </a>

                                <a href="/login">
                                    <button size="lg" className='loginButton btn btn-primary ' >Login</button>
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