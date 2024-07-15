import React from 'react';

import Header from '../client-layout/Header';
import Faq from './Faq';
import Footer from '../client-layout/Footer';

const Index = () => {
    return (
        <div className="faq-container">
    <Header/>
    <Faq />
    <Footer />
    </div>
    );
};
    export default Index;