import React from 'react';
import { FaUser } from "react-icons/fa";  
import { Link } from 'react-router-dom'; 
import logo from "../../logo/header-diamond.png";  

/**
 * Header component displaying a navigation bar with logo, links, contact info, and user validation.
 */
const Header = () => {
  return (
    <header className="bg-gray-800 text-white">  {/* Header container with background and text color */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">  {/* Container for content with responsive padding */}
        <div className="flex justify-between items-center py-4 md:py-6">  {/* Flex container for header content */}
          <div className="flex items-center">  {/* Section for logo and brand text */}
            <img src={logo} alt="Logo" className="h-8 md:h-10 mr-2 sm:mr-4" />  {/* Displaying the logo with specified styling */}
            <div className="font-bold text-lg md:text-xl">Diamond</div>  {/* Brand name with bold and large text styling */}
            <div className="ml-1 text-sm hidden md:block">Chauffeur Limousine</div>  {/* Subtitle with smaller text styling */}
          </div>

          <nav className="hidden md:flex items-center space-x-4 flex-wrap">  {/* Navigation links section with wrap on smaller screens */}
            <Link to="/" className="hover:underline">HOME</Link>  {/* Link to home page with underline on hover */}
            <Link to="/faq" className="hover:underline">FAQ</Link>  {/* Link to FAQ page with underline on hover */}
            <Link to="/booking" className="hover:underline">BOOKING</Link>  {/* Link to booking page with underline on hover */}
            <Link to="/blog" className="hover:underline">BLOG</Link>  {/* Link to blog page with underline on hover */}
            <Link to="/contacts" className="hover:underline">CONTACTS</Link>  {/* Link to contacts page with underline on hover */}
          </nav>
           
           {/* Section for additional content on the right */}
          <div className="flex items-center">  
            <div className="hidden md:flex items-center space-x-4">  
              <span className="text-yellow-500">Call to book:</span>  
              <span className="ml-2">8-800-10-500</span>  
            </div>
            {/* Section for user validation */}
            <div className="flex items-center mx-2">  
              <Link to="/auth">  
                <FaUser className="h-8 w-8 sm:h-10 lg:h-6 md:h-10 md:w-10 rounded-full" />  
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
