import React from 'react';

import Header from '../client-layout/Header';
import BookingForm from './BookingForm';
import Footer from '../client-layout/Footer';

const Index = ({activeLink, setActiveLink}) => {
    return (
        <div className="booking-container">
    <Header activeLink={activeLink} setActiveLink={setActiveLink} />
    <BookingForm />
    <Footer />
    </div>
    );
};
    export default Index;