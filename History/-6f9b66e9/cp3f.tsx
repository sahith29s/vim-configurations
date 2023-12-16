import {
    Button,
    FormControl,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    useColorModeValue,
    Toast,
} from '@chakra-ui/react'
import axios from 'axios';
import { useState } from 'react'

type ForgotPasswordFormInputs = {
    email: string
}

export default function ForgotPassword() {
    const toast = Toast();
    const handleSubmit = async () => {
        let { data } = await axios.post("http://localhost:3000/user/forgotpass", { email });
        // console.log(data);
        if (data === "success") {
                toast({
                    title: "error",
                    description: "user with this email has already been created",
                    position: "bottom-left",
                    status: "error",
                    isClosable: true
                })
        } else if (data === "failed") {
            
        }

    };
    const [email, setEmail] = useState<string>("");

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    Forgot your password?
                </Heading>
                <Text
                    fontSize={{ base: 'sm', sm: 'md' }}
                    color={useColorModeValue('gray.800', 'gray.400')}>
                    You&apos;ll get an email with a reset link
                </Text>
                <FormControl id="email">
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: 'gray.500' }}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={(e) => handleSubmit()}
                    >
                        Request Reset
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    )
}