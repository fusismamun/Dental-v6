import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Login = () => {

    const loginHandelar = e => {
        
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 15 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={loginHandelar}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            // onChange={onChnageHandelar} 
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Your Password"
                            type="password"
                            name='password'
                            // onChange={onChnageHandelar} 
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button type='submit' variant="contained" sx={{width: '75%', mt:3}} style={{ backgroundColor: "#19D3AE"}}> Login </Button>
                        <NavLink 
                        style={{textDecoration: 'none'}}
                        to={'/register'}>
                        <Button variant="text" sx={{color: "#19D3AE", m:2 }}>New User? Please Register</Button>
                        </NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '450px' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;