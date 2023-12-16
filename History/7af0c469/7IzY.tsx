import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material"
const Header = () => {
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h3">Mern auth</Typography>
                    <Box sx={{marginLeft : "auto"}}>
                        <Tabs textColor="inherit">
                            <Tab label="Login"/>
                            <Tab label="Sign up"/>
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header