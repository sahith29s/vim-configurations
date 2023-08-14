// import React from 'react'

// const MyProfile = () => {
//     return (
//         <>
//             <div>
//             </div>
//         </>
//     )
// }

// export default MyProfile

// Profile.js
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const Profile = () => {
    const localStorageData = JSON.parse(localStorage.getItem("userInfo"))
    console.log(localStorageData);
    const name = "John Doe";
    const email = "johndoe@example.com";
    const imageUrl = "https://via.placeholder.com/200"; // Replace with your image URL

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={6} className="text-center">
                    <Image className="rounded-circle border w-50" src={localStorageData? localStorageData.pic : imageUrl} alt="Profile"  fluid />
                </Col>
            </Row>
            <Row className="justify-content-center mt-4">
                <Col md={6} className="text-center">
                    <h2>{localStorageData? localStorageData.name : name }</h2>
                    <p>{localStorageData? localStorageData.email : email}</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Profile;