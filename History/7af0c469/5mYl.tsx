import { AppBar, Box, Tab, Toolbar, Typography } from "@mui/material"
const Header = () => {
    return (
        <>
            <AppBar>
            <Toolbar>
                <Typography variant="h3">Mern auth</Typography>
                <Box>
                    <Tab/>
                </Box>
            </Toolbar>
            </AppBar>
        </>
    )
}

export default Header