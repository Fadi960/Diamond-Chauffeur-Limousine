import React from 'react';

import Header from '../client-layout/Header';
import BookingForm from './BookingForm';
import Footer from '../client-layout/Footer';

const Index = () => {
    return (
        <div className="booking-container">
    <Header/>
    <BookingForm />
    <Footer />
    </div>
    );
};
    export default Index;