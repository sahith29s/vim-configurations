import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
const Header = () => {
    const [highlight, selHighlight] = useState<number>()
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h3">Mern auth</Typography>
                    <Box sx={{ marginLeft: "auto" }}>
                        <Tabs onChange={(e, val) => console.log(val)} textColor="inherit">
                            <Tab label="Login" />
                            <Tab label="Sign up" />
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header