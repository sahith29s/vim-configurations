import React, { useState } from 'react'
import { Button, FormControl, FormLabel, Input, InputGroup, InputRightAddon, InputRightElement, VStack } from '@chakra-ui/react'

const Login = () => {
    const [name, setName] = useState("")
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