import React from 'react';

import Header from '../client-layout/Header';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';
import Blog4 from './Blog4';
import Blog5 from './Blog5';
import Blog6 from './Blog6';
import Blog7 from './Blog7';
import Footer from '../client-layout/Footer';



const Index = ({activeLink, setActiveLink}) => {
    return (
        <div className="blog-container">
    <Header activeLink={activeLink} setActiveLink={setActiveLink} />
    <Blog1 />
    <Blog2 />
    <Blog3 />
    <Blog4 />
    <Blog5 />
    <Blog6 />
    <Blog7 />
    <Footer />
    </div>
    );
};
    export default Index;