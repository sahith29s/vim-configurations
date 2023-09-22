import { Box, Container, Text, Tab, Tabs, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom'


const Homepage = () => {
    const navigate = Navigate()
    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"))
        if (!userInfo) {
            navigate("/chats")
        }
    }, [navigate])
    return (
        <Container maxW="xl" centerContent>
            <Box
                display="flex"
                justifyContent="center"
                p={3}
                bg={"white"}
                w="100%"
                m="40px 0 15px 0"
                borderRadius="lg"
                borderWidth="1px"
            >
                <Text
                    fontSize="4xl"
                    color="black"
                >
                    Talk-A-Tive
                </Text>

            </Box>

            <Box
                bg="white"
                w="100%"
                p={4}
                borderRadius="lg"
                borderWidth="1px"
            >
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab width="50%">Login</Tab>
                        <Tab width="50%">Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel><Login /></TabPanel>
                        <TabPanel><Signup /></TabPanel>
                    </TabPanels>
                </Tabs>


            </Box>
        </Container>

    )
}

export default Homepage