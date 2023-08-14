import React, { useState } from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

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
                        <input type="text" />

                        <h5>password</h5>
                        <input type="password" />

                        <button className="login__signInButton">
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