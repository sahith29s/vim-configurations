import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom";
const Header = () => {
    const [highlight, setHighlight] = useState<number>(0);
    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h3">Mern auth</Typography>
                    <Box sx={{ marginLeft: "auto" }}>
                        <Tabs
                            onChange={(e, val) => setHighlight(val)}
                            indicatorColor="secondary"
                            value={highlight ? 0 : highlight}
                            textColor="inherit"
                        >
                            <Tab label="Login" to="/login"
                                component={Link} />

                            <Tab label="sign up" to="/signup"
                                component={Link} />

                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header