import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Typography } from '@mui/material';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: "1",
        name: "Teeth Orthodontics",
        time: "8:00 AM - 9:00 AM",
        space: 10
    },
    {
        id: "2",
        name: "Cosmetic Dentistry",
        time: "10:05 am - 11:30 am",
        space: 5
    },
    {
        id: "3",
        name: "Teeth Cleaning",
        time: "8:00 AM - 9:00 AM",
        space: 10
    },
    {
        id: "4",
        name: "Cavity Protection",
        time: "12:00 AM - 1:00 PM",
        space: 6
    },
    {
        id: "5",
        name: "Pediatric Dental",
        time: "2:00 PM - 4:00 PM",
        space: 7
    },
    {
        id: "6",
        name: "Oral Surgery",
        time: "9:00 AM - 12:00AM",
        space: 5
    }
]

const AvaliableAppointment = ({date}) => {
    return (
        <Container>
            <Typography variant="h2" sx={{ color: "#19D3AE", fontSize: 35, fontWeight: 500, my: 3 }}>Available Appointment On: {date.toDateString()}</Typography >
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvaliableAppointment;