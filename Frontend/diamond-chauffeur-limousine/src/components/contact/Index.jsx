import React from 'react';

import Header from '../client-layout/Header';
import Map from './Map';
import Message from './Message';
import Footer from '../client-layout/Footer';

const Index = () => {
    return (
        <div className="faq-container">
    <Header/>
    <Map />
    <Message />
    <Footer />
    </div>
    );
};
    export default Index;