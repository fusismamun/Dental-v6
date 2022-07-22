import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import { Box, Container, textAlign } from '@mui/system';
import treatment from '../../../images/treatment.png' ;


const varticalCenter = {
    display: 'flex',
    height: 450,
    alignItems: 'center',
}

const ExceptionalDantel = () => {
    return (
        <>
        <Container  sx={{ flexGrow: 1, my:5 }}>
            <Grid container spacing={2}>
                < Grid item xs={12} md={6} sx= {{my:5, }}>
                <img style={{ width: '280px', borderRadius:"10px"}} src={treatment} alt="" />
                </Grid >
                <Grid item style={{ ...varticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography variant='h3' sx={{ fontWeight: 600,fontSize: 40, color: '#3A4256' }}>
                        Exceptional Dental Care <br />On Your Terms
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: 14, color: '#3A4256', fontWeight: 'light', my: 3 }}>
                            Dentists say that the most important part of tooth care happens at home. Brushing and flossing properly, along with regular dental checkups, can help prevent tooth decay and gum disease.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#19D3AE" }}>GET Appointment</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default ExceptionalDantel;