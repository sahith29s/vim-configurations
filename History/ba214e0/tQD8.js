import React, { useState } from 'react'
import { useHistory } from "react-router-dom"

import { Navigate } from "react-router-dom"
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, VStack } from '@chakra-ui/react'
import axios from "axios"
import { useToast } from '@chakra-ui/react'

const Login = () => {
    const history = useHistory()

    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [password, setPassword] = useState("")
    const toast = useToast()

    const submitHandler = async () => {
        setLoading(true)

        if (!email || !password) {
            toast({
                title: "Please Enter All The Details",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            setLoading(false)
            return
        }

        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            }
            const { data } = await axios.post("http://localhost:5000/api/user/login", { email, password }, config)
            toast({
                title: "Login Successful",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })

            console.log(data);

            localStorage.setItem("userInfo", JSON.stringify(data))
            setLoading(false)
        } catch (error) {
            toast({
                title: "Error Occured!",
                description: "Error",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
            console.log(error);
            setLoading(false)
        }


    };


    return (
        <VStack spacing="5px" color="black">
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    value={email}
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        value={password}
                        type={show ? "text" : "password"}
                        placeholder="Enter Your Name"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <InputRightElement>

                        <Button backgroundColor="transparent" h="1.75rem" size={"sm"} onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>


            <Button
                colorScheme='blue'
                width="100%"
                marginTop="15px"
                isLoading={loading}
                onClick={submitHandler}>
                Login
            </Button>

            <Button
                colorScheme='red'
                variant="solid"
                width="100%"
                onClick={() => {
                    setEmail("guest@example.com")
                    setPassword("123456")
                }}>
                Get User Creditionals
            </Button>
            <Button onClick={() => history.push(/"about")} >sahith</Button >
        </VStack>
    )
}

export default Login