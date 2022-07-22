import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment.png';
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    marginTop: 160,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-100px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{display: 'flex', justifyContent: 'flex-start',alignItems: 'center', textAlign: 'left'}}>
                    <Box >
                    <Typography sx={{ fontWeight: 'bold', color: "#19D3AE", mb: 2}} variant='h6' component="div">
                        Appointment
                    </Typography>
                    <Typography sx={{ fontWeight: '500', color: "#fff" }} variant='h4'>
                        Make an appointment Today
                    </Typography>
                    <Typography variant='h6'  sx={{fontSize: 14, fontWeight: 400, color: "#fff", my:4}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less 
                    </Typography>
                    <Button variant="contained" style={{backgroundColor:"#19D3AE" }}>Click Here</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;