import React from 'react';
import Header from '../admin-layout/Header';
import Sidebar from '../admin-layout/Sidebar';
import Footer from '../admin-layout/Footer';
import Information from './Information';
import Map from './Map';
import Document from './Document';




const Index = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <Information />
                    <Map />
                    <Document />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Index;
