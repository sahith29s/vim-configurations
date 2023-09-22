import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, VStack } from '@chakra-ui/react'

const Login = () => {
    const submitHandler = () =>{

    };
    const [name, setName] = useState("")
    const [show,setShow] = useState(false)
    const [password, setPassword] = useState("")
    

    return (
        <VStack spacing="5px" color="black">
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter Your Name"
                        onChange={(e) => setName(e.target.value)}
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
                Sign Up
            </Button>


        </VStack>
    )
}

export default Login