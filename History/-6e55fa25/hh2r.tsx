import {
    useToast,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"

import axios from "axios"
import { Link } from "react-router-dom"
import { ChangeEvent, useState } from "react"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"

interface FormData {
    firstName: string,
    lastName: string,
    email: string,
    password: string
};

const dataForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""

};

export default function Signin() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>(dataForm);

    const handleSubmit = async () => {
        console.log(formData.email);
        try {
            if (!formData.email || !formData.password || !formData.firstName) {
                toast({
                    position: "bottom-left",
                    title: "Enter all the creditionals",
                    description: "first enter all the field",
                    status: "warning",
                    duration: 10000,
                    isClosable: true,
                })
                return "";
            }

            const userName: string = `${formData.firstName} ${formData.lastName ? formData.lastName : ""}`
            const email: string = formData.email;
            const password: string = formData.password;
            let dataBody = { userName, email, password };
            let { data } = await axios.post("http://localhost:3000/user/signup", dataBody);
            console.log(data);

            let desc = data.userName ? `name : ${data.userName} and email : ${data.email}` : data

            toast({
                title: `${!data.userName ? "duplicate email" : "account created successfully"}`,
                position: "bottom-left",
                description: desc,
                status: `${!data.userName ? "error" : "success"}`,
                duration: 10000,
                isClosable: true,
            })
            setFormData(dataForm);
            console.log(data);
        }
        catch (error: any) {
            toast({
                title: "error",
                description: "There is some error in the server",
                position: "bottom-left",
                status: "error",
                isClosable: true
            })
        };
    };

    const handleClickForm = (e: ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        const value = e.target.value;
        setFormData({ ...formData, [`${id}`]: value });
    };

    const toast = useToast();

    return (

        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sign up
                    </Heading>
                    <Text fontSize={"lg"} color={"gray.600"}>
                        to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input value={formData.firstName} onChange={(e) => handleClickForm(e)} type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name <span className="text-sm text-red-500">*optional</span></FormLabel>
                                    <Input type="text" name="lastName" onChange={(e) => handleClickForm(e)} />
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel >Email address</FormLabel>
                            <Input onChange={(e) => handleClickForm(e)} type="email" />
                        </FormControl>
                        <FormControl id="password" isRequired>
                            <FormLabel >Password</FormLabel>
                            <InputGroup>
                                <Input onChange={(e) => handleClickForm(e)} type={showPassword ? "text" : "password"} />
                                <InputRightElement h={"full"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                onClick={() => handleSubmit()}
                            >
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                Already a user? <Link to="/login" className="text-blue-500" >Login</Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}