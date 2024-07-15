import React from 'react';
import Header from '../admin-layout/Header';
import Sidebar from '../admin-layout/Sidebar';
import Footer from '../admin-layout/Footer';
import CarInformation from './CarInformation';
import Revenue from './Revenue';
import Map from './Map';
import Calendar from './Calendar';

const Index = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <CarInformation />
                    <Revenue />
                    <Map/>
                    <Calendar />
                    
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Index;
