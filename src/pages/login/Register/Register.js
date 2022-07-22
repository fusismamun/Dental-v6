import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import login from '../../../images/login.png';

const Register = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 15 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    <form>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type='email'
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
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Retype Your Password"
                            type="password"
                            name='password2'
                            // onChange={onChnageHandelar} 
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <Button type='submit' variant="contained" sx={{ width: '75%', mt: 3 }} style={{ backgroundColor: "#19D3AE" }}> Register </Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to={'/login'}>
                            <Button variant="text" sx={{ color: "#19D3AE", m: 2 }}>Already Register? Please Login</Button>
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

export default Register;