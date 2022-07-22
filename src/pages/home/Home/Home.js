import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ExceptionalDantel from '../ExceptionalDantel/ExceptionalDantel';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ExceptionalDantel></ExceptionalDantel>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            
        </div>
    );
};

export default Home;