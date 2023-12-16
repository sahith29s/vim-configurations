import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useState } from 'react';


interface formDataInterface {
    name: string,
    email: string,
    password: string,
}
const Signup = () => {
    const [formData, setformData] = useState<formDataInterface>({
        name: "",
        email: "",
        password: ""
    })

    const handleSubmit = (e: any) => {
        e.preventDefault();
        sendRequestCreateUser();
    };


    const sendRequestCreateUser = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/user/signup", formData);
            const data = await res.data;
            console.log(data);
        }
        catch (error: any) {

            console.log(error.response.data.message);
        };
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })

    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <Box width={300}
                    marginLeft="auto"
                    marginRight="auto"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography variant="h2"> Signup</Typography>
                    <TextField
                        name="name"
                        value={formData.name}
                        variant="outlined"
                        placeholder="Name"
                        margin="normal"
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        name="email"
                        value={formData.email}
                        variant="outlined"
                        placeholder="Email"
                        margin="normal"
                        onChange={(e) => handleChange(e)}
                    />
                    <TextField
                        name="password"
                        value={formData.password}
                        variant="outlined"
                        placeholder="Password"
                        margin="normal"
                        onChange={(e) => handleChange(e)}
                    />
                    <Button variant="contained" type="submit">
                        Signup
                    </Button>
                </Box>
                
            </form>
        </>
    )
}

export default Signup