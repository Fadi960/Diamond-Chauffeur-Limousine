
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/home/Index"
import Faq from "./components/faq/Index"
import Booking from './components/booking/Index';
import Blog from './components/blog/Index'
import Contact from './components/contact/Index';
import Auth from './components/auth/Index';
import AdminIndex from './components/admin-dashboard/Index';
import AdminSidebar from './components/admin-sidebar/Index';
import CarList from './components/admin-sidebar2/Index';
import Reservation from './components/admin-sidebar3/Index';
import ReservationDetail from './components/admin-sidebar4/Index';
import NotFound from './NotFound';
import Car from './pages/Car';
import Profile from './pages/Profile';
import { useState } from 'react';


const App = () => {
  const [activeLink, setActiveLink] = useState('home')
  return (
    <>
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <div className="flex-grow-0">
          <Routes>
            <Route path="*" element={<NotFound activeLink={activeLink} setActiveLink={setActiveLink} />} />
            <Route path="/" element={<Home  activeLink={activeLink} setActiveLink={setActiveLink} />} />
            <Route path="/faq" element={<Faq activeLink={activeLink} setActiveLink={setActiveLink} />} />
            <Route path="/booking" element={<Booking activeLink={activeLink} setActiveLink={setActiveLink} />} />
            <Route path="/blog" element={<Blog activeLink={activeLink} setActiveLink={setActiveLink} />} />
            <Route path="/contacts" element={<Contact activeLink={activeLink} setActiveLink={setActiveLink} />} />
            <Route path="/auth" element={<Auth  />} />
            <Route path="/admin/*" element={<AdminIndex />} />
            <Route path="/car-list" element={<AdminSidebar />} />
            <Route path="/car-details" element={<CarList />} />
            <Route path="/reservations" element={<Reservation />} />
            <Route path="/reservation-details" element={<ReservationDetail />} />
            <Route path="/car" element={<Car />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
    
      </div>
    </Router>
    </>
  );
};

export default App;
