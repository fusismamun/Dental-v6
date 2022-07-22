import { Grid } from '@mui/material';
import React from 'react';
import chair from '../../../images/chair.png';
import abg from '../../../images/bg.png';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import Calender from '../../shared/Calender/Calender';

const appointmentBg = {
    background: `url(${abg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "center"
}
const varticalCenter = {
    display: 'flex',
    height: 450,
    alignItems: 'center',
}

const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{textAlign: 'left' }} xs={12} md={6}>
                        <Typography variant='h5' sx={{ fontWeight: 600, color: '#19D3AE' , my: 3 }}>
                            Appointment
                        </Typography>
                        <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6} style={varticalCenter}>
                    <img style={{ width: '350px' }} src={chair} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;