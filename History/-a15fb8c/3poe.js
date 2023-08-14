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
                                <a href="/login">
                                    <button size="lg" className='landingButton btn btn-primary'>Login</button>
                                </a>

                                <a href="/resister">
                                    <button size="lg" className='loginButton btn btn-primary' variant="outline-primary" >SignUp</button>
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