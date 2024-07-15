import React from 'react';
import Carousel from './Carousel';
import Hero from './Hero';
import CardsSection from './CardsSection';
import Comfort from './Comfort';
import Blog from './Blog';
import BookingForm from './BookingForm';
import Partner from './Partner';
import Header from '../client-layout/Header';
import Footer from "../client-layout/Footer";

const Index = () => {
  return (
    <div className="home-container"> 
        <Header />
        <Carousel />
        <Hero />
        <CardsSection />
        <Comfort />
        <BookingForm />
        <Blog />
        <Partner />
      <Footer />
    </div>
  );
};

export default Index;
