import { Box, Button, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


interface formDataInterface {
    email: string,
    password: string,
}
const Login = () => {
    const history = useNavigate();
    const [formData, setformData] = useState<formDataInterface>({
        email: "",
        password: ""
    })

    const handleSubmit = (e: any) => {
        e.preventDefault();
        sendRequestCreateUser();
    };

    const sendRequestCreateUser = async () => {
        try {
            const res = await axios.post("http://localhost:3000/api/user/login", formData);
            const data = await res.data;
            history("/user");
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
                    <Typography variant="h2">Login</Typography>
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
                    <Button variant="contained" type="submit">Login</Button>
                </Box>
            </form>
        </>
    )
}

export default Login