import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from "@chakra-ui/react"
import { useState } from "react"
import { baseUrl } from "../backendBaseUrl";

export default function SimpleCard() {
    interface formDataInterface {
        email: string,
        password: string
    }

    const defaultFormData = {
        email: "",
        password: ""
    }

    const [formData, setFormData] = useState<formDataInterface>(defaultFormData);

    const submitForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let response = await fetch((baseUrl + "api/user/login"), {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(formData),
        });
        let data = await response.json();

    };

    // let response = await fetch((baseUrl + "api/user/register"), {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json", },
    //     body: JSON.stringify(formData),
    // });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
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
                            <Input name="email" value={formData.email} onChange={handleInputChange} type="email" />
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input name="password" onChange={(e) => handleInputChange(e)} value={formData.password} type="password" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={"start"}
                                justify={"space-between"}>
                                <Checkbox>Remember me</Checkbox>
                                <Text color={"blue.400"}>Forgot password?</Text>
                            </Stack>
                            <Button
                                bg={"blue.400"}
                                onClick={(e) => submitForm(e)}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}>
                                Login
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    )
}