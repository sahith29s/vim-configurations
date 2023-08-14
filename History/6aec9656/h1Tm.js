import "./LoginScreen.css"
import axios from "axios"
import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import MainScreen from '../../MainScreen/MainScreen';

const LoginPage = () => {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password
                })
            }
            const data = await fetch("http://localhost:5000/api/users/login", requestOptions)
            let data2 = await data.json()
            console.log(data2);

            localStorage.setItem("userInfo", JSON.stringify(data2))

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
