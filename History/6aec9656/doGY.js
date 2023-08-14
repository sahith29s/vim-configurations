// import React from 'react'

// import MainScreen from '../../MainScreen/MainScreen'
// import { Form } from 'react-router-dom'

// const LoginScreen = () => {
//     return (
//         <>

//         </>
//     )
// }

// export default LoginScreen

import "./LoginScreen.css"
import axios from "axios"
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import MainScreen from '../../MainScreen/MainScreen';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            // const config = {
            //     headers: {
            //         "Content-type": "application/json"
            //     }
            // }
            // const { data } = await axios.post(
            //     "http://localhost:5000/api/users/login",
            //     {
            //         email,
            //         password
            //     },
            //     config
            // )

            // console.log(data);

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password
                })
            }
            const data = await fetch("http://localhost:5000/api/users/login", requestOptions)
            console.log(data);

        } catch (error) {
            console.log(error);


        }

    };

    return (
        <>

            <Container>
                <div className="loginContainer">
                    <h1>Login Page</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label
                                className="my-3"
                            >Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formName">
                            <Form.Label className="my-3">Password</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>


                        <Button variant="primary" className="my-2" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    );
};

export default LoginPage;
