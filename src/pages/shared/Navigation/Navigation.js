import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import DomainAddIcon from '@mui/icons-material/DomainAdd';
import Typography from '@mui/material/Typography';
import { Link, NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';



const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#19D3AE' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <DomainAddIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors-Dental
                    </Typography>
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to={"/home"}><Button color="inherit">Home</Button></Link>
                    <Link style={{ textDecoration: 'none', color: '#fff' }} to={"/appointment"}><Button color="inherit">Appointment</Button></Link>
                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to={"/login"}><Button color="inherit">Login</Button>
                    </NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;