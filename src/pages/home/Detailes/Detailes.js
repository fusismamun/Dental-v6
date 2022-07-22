import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import clock from '../../../images/clock.svg' ;
import mark from '../../../images/marker.svg' ;
import phone from '../../../images/phone.svg';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';

const Detailes = () => {
    return (
        <Container style={{marginTop: '-50px', marginBottom: '50px' }} sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} style={{padding: 15}} >
                    <Grid item xs={12} sm={4} md={4}>
                        <Box style={{backgroundColor: '#19D3AE', display: 'flex', borderRadius: 5, padding: 25}}>
                            <img style={{height: 70}} src={clock} alt="" />
                            <Box  sx={ {color: "white", textAlign: 'left', mx:2, }}>
                            <Typography variant='h6'>
                            Opening Hours
                            </Typography>
                            <Typography variant='p' sx={ {color: "white"}}>
                            Lorem Ipsum is simply dummy text of the pri
                            </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Box style={{backgroundColor: '#3A4256', display: 'flex', padding: 25, borderRadius: 5}}>
                            <img style={{height: 70}} src={mark} alt="" />
                            <Box  sx={ {color: "white", textAlign: 'left', mx:2, }}>
                            <Typography variant='h6'>
                            Visit our location
                            </Typography>
                            <Typography variant='p' sx={ {color: "white"}}>
                            Dhaka Bangladesh
                            </Typography>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4}>
                    <Box style={{backgroundColor: '#19D3AE', display: 'flex', padding: 25, borderRadius: 5}}>
                            <img style={{height: 70}} src={phone} alt="" />
                            <Box  sx={ {color: "white", textAlign: 'left', mx:2, }}>
                            <Typography variant='h6'>
                            Contact us now
                            </Typography>
                            <Typography variant='p' sx={ {color: "white"}}>
                            +880163-8076223
                            </Typography>
                            </Box>
                        </Box>
                    </Grid>
            </Grid>
        </Container>
    );
};

export default Detailes;