import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = (e) =>{
        e.preventDefault()

        // some fancy firebase login 
        
    };

    return (
        <>
            <div className="login">
                <Link to="/">
                    <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" />
                </Link>

                <div className="login__container">
                    <h1>Sign-in</h1>

                    <form>
                        <h5>E-mail</h5>
                        <input value={email} onChange={(event) =>{setEmail(event.target.value)}} type="text" />

                        <h5>password</h5>
                        <input value={password} onChange={(event) =>{setPassword(event.target.value)}} type="password" />

                        <button type='submit' onClick={signIn} className="login__signInButton">
                        Sign In
                        </button>
                    </form>

                    <p>
                        By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                    </p>

                    <button className="login__registerButton">Create Your Amazon Account</button>
                </div>
            </div>

        </>
    )
}

export default Login