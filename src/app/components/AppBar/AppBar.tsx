import { AppBar as MuiAppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const AppBar = () => {
    return (
        <MuiAppBar position="static">
            <Toolbar variant="dense" >
                <IconButton edge="start" color="inherit" aria-aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography>Sample MUI</Typography>
            </Toolbar>
        </MuiAppBar>
    )
}

export default AppBar
