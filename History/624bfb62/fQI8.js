// import React from 'react'
// import MainScreen from '../../MainScreen/MainScreen'

// const RegisterScreen = () => {
//     const handleRegisterSubmit = () =>{
//     };
//     return (
//         <>
//         <MainScreen title="REGISTER">

//         <form onSubmit={handleRegisterSubmit}>



//         </form>

//         </MainScreen>
//         </>
//     )
// }

// export default RegisterScreen

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        // try {
        //     if (password === confirmPassword) {
        //         const requestOptions = {
        //             method: "POST",
        //             headers: { "Content-Type": "application/json" },
        //             body: JSON.stringify({
        //                 name,
        //                 email,
        //                 password,
        //                 profilePicture

        //             })
        //         }
        //         const data = await fetch("http://localhost:5000/api/users/", requestOptions)
        //         let data2 = await data.json()
        //         console.log(data2);

        //         localStorage.setItem("userInfo", JSON.stringify(data2))
        //     }

        // } catch (error) {
        //     console.log(error);


        // }

        console.log(profilePicture);

    };

    const imageToUrlGenerator = (image) =>{
        if(image.type === "image/jpeg" || image.type === "iamge/png"){
            const formDataVar = new FormData()
            formDataVar.append("file",image)
            formDataVar.append("upload_preset" , "noteZipper")
            formDataVar.append("cloud_name" , "dpm6uveua")
            fetch("https://api.cloudinary.com/v1_1/dpm6uveua")

        }
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        className="my-2"
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type="email"
                        className='my-2'
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        className='my-2'
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirm your password"
                        className='my-2'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="profilePicture">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                        className='mt-2 mb-5'
                        type="file"
                        onChange={(e) => { setProfilePicture(e.target.files[0]) }}
                        required
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
        </div>
    );
};

export default RegisterPage;
