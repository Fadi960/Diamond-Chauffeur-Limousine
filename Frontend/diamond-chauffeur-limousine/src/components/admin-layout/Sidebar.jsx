import React, { useState } from 'react';
import { FaHome, FaLaptop, FaAngleDown, FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the sidebar menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-4">
        {/* Dashboard Link */}
        <Link to="/admin" className="flex items-center">
          <FaHome className="text-lg mr-3" />
          <span className="text-lg">Dashboard</span>
        </Link>
      </div>
      <nav className="mt-10">
        <div className="mt-2">
          {/* Chauffeur Limousine Dropdown */}
          <button
            className="flex items-center px-4 py-2 w-full text-left hover:bg-gray-700"
            onClick={toggleMenu}
          >
            <FaLaptop className="text-lg mr-3" />
            <span className="flex-grow">Chauffeur Limousine</span>
            {isOpen ? <FaAngleDown /> : <FaAngleRight />}
          </button>
          {/* Dropdown Items */}
          {isOpen && (
            <div className="ml-8 mt-2">
              <Link
                to="/car-list"
                className="block py-1 text-sm text-gray-400 hover:text-white"
              >
                • Car List
              </Link>
              <Link
                to="/car-details"
                className="block py-1 text-sm text-gray-400 hover:text-white"
              >
                • Car Details
              </Link>
              <Link
                to="/reservations"
                className="block py-1 text-sm text-gray-400 hover:text-white"
              >
                • Reservations
              </Link>
              <Link
                to="/reservation-details"
                className="block py-1 text-sm text-gray-400 hover:text-white"
              >
                • Reservation Details
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
