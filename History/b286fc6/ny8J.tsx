import {
    useToast,
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Switch,
} from "@chakra-ui/react"

import axios from "axios"
import { ChangeEvent, useEffect, useState } from "react"

interface FormData {
    email: string,
    password: string
}

import { useNavigate } from "react-router-dom"


const dataForm = {
    email: "",
    password: ""
}

export default function Login() {
    const toast = useToast();
    const [rememberme, setRememberme] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>(dataForm);
    const navigate = useNavigate();


    useEffect(() => {

        if ((localStorage.getItem("token"))) {
            navigate("/bad")
            console.log("sahith");
        }

        if (localStorage.getItem("formData")) {
            let { email, password } = JSON.parse(localStorage.getItem("formData") as string)
            let trueOrFalse = JSON.parse(localStorage.getItem("formData") as string).rememberme
            setRememberme(trueOrFalse);
            if (trueOrFalse) {
                setFormData({ email, password });
            }
        }
    }, [])

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        const id: string = e.target.id
        const value: string = e.target.value
        setFormData({ ...formData, [`${id}`]: value })
        console.log(formData);
    };

    const handleSubmit = async () => {
        try {
            if (!formData.email || !formData.password) {
                toast({
                    title: "Enter all creditionals",
                    description: "First all the fields",
                    position: "bottom-left",
                    status: "warning",
                    isClosable: true
                });
                return;
            }

            let { data } = await axios.post("http://localhost:3000/user/login", formData);
            console.log(data);
            if (data === "user doesn't exists") {
                toast({
                    title: "error",
                    description: "User doesn't exists please register first by signing up.",
                    position: "bottom-left",
                    status: "error",
                    isClosable: true
                });
                return;
            }
            toast({
                title: "success",
                description: "user logged in successfully",
                position: "bottom-left",
                status: "success",
                isClosable: true
            });

            // localStorage.setItem("token", data.token);
            console.log(data);
            data = { ...data, rememberme: rememberme, token: "" };
            
            
            localStorage.setItem("formData", JSON.stringify(data.isUser));
        }
        catch (error) {
            toast({
                title: "error",
                description: "oops! something went wrong.",
                position: "bottom-left",
                status: "error",
                isClosable: true
            })
            console.log(error);
        };
    };

    return (

        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Login to your account</Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input value={formData.email} onChange={(e) => handleOnChange(e)} type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input value={formData.password} onChange={(e) => handleOnChange(e)} type="password" />
                        </FormControl>
                        <Stack spacing={10}>

                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={'start'}
                                justify={"space-between"}>

                                <FormControl display="flex" alignItems="center">
                                    <FormLabel htmlFor="email-alerts" mb="0">
                                        Remember me
                                    </FormLabel>
                                    <Switch
                                        isChecked={rememberme}
                                        onChange={() => setRememberme(!rememberme)}
                                        id="email-alerts" />
                                </FormControl>

                                <Text color={"blue.400"}>Forgot password?</Text>
                            </Stack>
                            <Button
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                onClick={() => handleSubmit()}
                            >
                                Login
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}