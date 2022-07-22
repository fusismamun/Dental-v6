import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import hbg from '../../../images/bg.png';
import { Button, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import Detailes from '../Detailes/Detailes';

const headerBg = {
    background: `url(${hbg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
}
const varticalCenter = {
    display: 'flex',
    height: 450,
    alignItems: 'center',
}

const Banner = () => {
    return (
        <>
            <Container style={headerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item style={{ ...varticalCenter, textAlign: 'left' }} xs={12} md={6}>
                        <Box>
                            <Typography variant='h3' sx={{ fontWeight: 600, fontSize: 40, color: '#3A4256' }}>
                                Your New Smile Starts<br />
                                Here
                            </Typography>
                            <Typography variant='h6' sx={{ fontSize: 14, color: '#3A4256', fontWeight: 'light', my: 3 }}>
                                Dentists say that the most important part of tooth care happens at home. Brushing and flossing properly, along with regular dental checkups, can help prevent tooth decay and gum disease.
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: "#19D3AE" }}>GET Appointment</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={varticalCenter}>
                        <img style={{ width: '350px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Container>
            <Detailes></Detailes>
        </>
    );
};

export default Banner;