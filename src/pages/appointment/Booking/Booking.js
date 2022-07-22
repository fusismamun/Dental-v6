import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModel from '../BookingModel/BookingModel';


const Booking = ({booking, date}) => {
    const { name, time, space } = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper sx={{ py: 5 }} elevation={3}>
                    <Typography sx={{ fontSize: 20, fontWeight: 600, color: "#19d3ae" }} variant='h5'>
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: 14, fontWeight: 600, my: 1 }} variant='h6'>
                        {time}
                    </Typography>
                    
                    <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: "#19D3AE" }}>Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModel
                date = {date}
                booking={booking}
                open={open}
                handleClose={handleClose}
            ></BookingModel>
        </>
    );
};

export default Booking;