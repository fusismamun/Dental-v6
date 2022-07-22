import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvaliableAppointment from '../AvaliableAppointment/AvaliableAppointment';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvaliableAppointment date={date}></AvaliableAppointment>
        </div>
    );
};

export default Appointment;