import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const PatientSays = (props) => {
    const { name, description, location, img } = props.patientsSay
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, border: 0, borderColor: "#19d3ae", boxShadow: 4 }}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'left', mb: 3}}>
                        {description}
                    </Typography>
                    <Box sx={{display: 'flex', alignItems:'start'}}>
                    <CardMedia
                        component="img"
                        style={{width: 'auto', height: '80px', margin: '3px',border: '5px solid #19d3ae', borderRadius:'50px', borderColor: '#19d3ae'}}
                        image={img}
                        alt="green iguana"
                    />
                    <Box sx={{mx:3, textAlign: 'left'}}>
                    <Typography sx={{fontWeight: '500', fontSize:20}} variant="h6" component="div">
                        {name}
                    </Typography>
                    <Typography sx={{fontWeight: '500', fontSize:14}} variant="h6" component="div">
                        {location}
                    </Typography>
                    </Box>
                    </Box>

                </CardContent>

            </Card>

        </Grid>
    );
};

export default PatientSays;