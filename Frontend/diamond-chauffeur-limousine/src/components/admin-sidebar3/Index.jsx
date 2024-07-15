import React from 'react';
import Header from '../admin-layout/Header';
import Sidebar from '../admin-layout/Sidebar';
import Footer from '../admin-layout/Footer';
import Reservation from './Reservation';
import Table from './Table';



const Index = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Header />
                    <Reservation />
                    
                    <Table/>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Index;
