import React from 'react'

const Login = () => {
    return (
        <VStack spacing="5px" color="black">
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>

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
                        onChange={(e) => setName(e.target.value)}
                    />

                    <InputRightElement>

                        <Button backgroundColor="transparent" h="1.75rem" size={"sm"} onClick={() => setShow(!show)}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>


                </InputGroup>
            </FormControl>

            <FormControl id='confirm-password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={confShow ? "text" : "password"}
                        placeholder="Enter Your Name"
                        onChange={(e) => setName(e.target.value)}
                    />

                    <InputRightElement>
                        <Button backgroundColor="transparent" h="1.75rem" size={"sm"} onClick={() => setConfShow(!confShow)}>
                            {confShow ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='pic'>
                <FormLabel>Upload your picture</FormLabel>
                <Input type='file' accept='image/*' paddingTop="4px" />
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