import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom";
const Header = () => {
    const [highlight, setHighlight] = useState<number>();
    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h3">Mern auth</Typography>
                    <Box sx={{ marginLeft: "auto" }}>
                        <Tabs
                            onChange={(e, val) => setHighlight(val)}
                            indicatorColor="secondary"
                            value={highlight}
                            textColor="inherit"
                        >

                            {/* <Link to="/login"> */}

                            <Tab label="sahith">
                                <Link to="/login" />
                            </Tab>

                            <Tab label="Sign up" />
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header