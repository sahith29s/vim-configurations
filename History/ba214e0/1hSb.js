import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, VStack } from '@chakra-ui/react'
import axios from "axios"
import { useToast } from '@chakra-ui/react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [show, setShow] = useState(false)
    const [password, setPassword] = useState("")
    const toast = useToast()

    const submitHandler = async () => {
        if (!email || !password) {
            toast({
                title: "Please Enter All The Details",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom"
            })
        }


    };


    return (
        <VStack spacing="5px" color="black">
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder="Enter Your Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
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
        </VStack>
    )
}

export default Login