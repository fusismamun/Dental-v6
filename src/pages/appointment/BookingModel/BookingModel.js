import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModel = ({ open, handleClose, booking, date }) => {
    const { name, time, space } = booking;
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography sx={{ textAlign: 'center', fontSize: 20, fontWeight: 500, color: "#19d3ae" }} id="transition-modal-title" variant="h6" component="h2">
                        {name}
                    </Typography>
                    <Typography sx={{ fontSize: 14, fontWeight: 600, color: "black", textAlign: 'center' }} variant='caption' display="block">
                        {space} Spaces Available
                    </Typography>
                    <form>
                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            disabled
                            id="outlined-size-small"
                            defaultValue={time}
                            size="small"
                        />
                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Your Name"
                            size="small"
                        />
                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Phone Number"
                            size="small"
                        />
                        <TextField
                            sx={{ width: "90%", m: 1 }}
                            id="outlined-size-small"
                            defaultValue="Email"
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: "90%", m: 1 }}
                            id="outlined-size-small"
                            defaultValue={date.toDateString()}
                            size="small"
                        />
                        <Button type='submit' variant="contained" style={{ backgroundColor: "#19D3AE", float: "right" }}>Submit </Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModel;