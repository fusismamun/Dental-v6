import { Height } from '@mui/icons-material';
import { Grid, Typography } from '@mui/material';
import { Box, Container, textAlign } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people1.png';
import people2 from '../../../images/people2.png';
import people3 from '../../../images/people3.png';
import tbg from '../../../images/quote.svg';
import PatientSays from '../PatientSays/PatientSays';


const patientsSays = [
    {
        name: 'Winson Herry',
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'California',
        img: people1
    },
    {
        name: 'Sara Yarn',
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'California',
        img: people2
    },
    {
        name: 'Malkova Katu',
        description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        location: 'California',
        img: people3
    }

]
const testimonialBg = {
    background: `url(${tbg})`,
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "right",

}

const Testimonial = () => {
    return (
        <Box style={testimonialBg} sx={{ flexGrow: 1, mt:20}}>
                 <Container >
                <Typography sx={{ fontWeight: 'bold', color: "#19D3AE", my:1, textAlign: 'left'}} variant="h6" component="div" >
                    Testimonial
                </Typography>
                <Typography sx={{ fontWeight: 'light', mb: 5, textAlign: 'left' }} variant="h4" component="div">
                What Our Patients Says
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                       patientsSays.map(patientsSay=> <PatientSays
                        patientsSay={patientsSay}
                       ></PatientSays>) 
                    }
                    </Grid>

                </Container>
        </Box>
    );
};

export default Testimonial;