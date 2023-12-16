import { Box, Button, TextField, Typography } from "@mui/material"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


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

            const res = await fetch("http://localhost:3000/api/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
            console.log(data);
            history("/user");
        }
        catch (error: any) {
            // console.log(error.response.data.message);
            console.log(error);
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