import React from 'react';

import Header from '../client-layout/Header';
import Faq from './Faq';
import Footer from '../client-layout/Footer';

const Index = ({activeLink, setActiveLink}) => {
    return (
        <div className="faq-container">
    <Header activeLink={activeLink} setActiveLink={setActiveLink} />
    <Faq />
    <Footer />
    </div>
    );
};
    export default Index;