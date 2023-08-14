import React from 'react'
import Button from 'react-bootstrap/esm/Button'
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
                                    <Button size="lg" className='landingButton btn btn-primary'>Login</Button>
                                </a>

                                <a href="/register">
                                    <Button size="lg" className='landingButton' variant="outline-primary">SignUp</Button>
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