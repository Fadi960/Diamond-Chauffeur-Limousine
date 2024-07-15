import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock } from 'react-icons/fa';

/**
 * Subscribe component displaying a newsletter subscription form and contact information.
 */
const Subscribe = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-4">Want to know about our offers first?</h2>
        <p className="text-xl mb-6">Subscribe to our newsletter</p>
        <div className="flex justify-center">
          <input 
            type="email" 
            placeholder="Your email ..." 
            className="p-3 w-full md:w-2/3 lg:w-1/3 rounded-l-md text-black"  
          />
          <button className="bg-yellow-600 hover:bg-yellow-500 p-3 rounded-r-md">Subscribe</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-12 text-center gap-8">
          <div className="flex flex-col items-center">
            <p className="text-lg flex items-center">
              <FaPhoneAlt className="inline mr-2" /> 0 (550) 680-34-12
            </p>
            <p className="text-sm">Round-the-clock</p>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0">  
            <p className="text-lg flex items-center">
              <FaMapMarkerAlt className="inline mr-2" /> 1353 Locust St, Kansas City, MO
            </p>
            <p className="text-lg">64106</p>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-0">  
            <p className="text-lg flex items-center">
              <FaEnvelope className="inline mr-2" /> info@google.com
            </p>
            <p className="text-lg flex items-center">
              <FaEnvelope className="inline mr-2" /> support@google.com
            </p>
            <p className="text-lg mt-2 flex items-center">
              <FaClock className="inline mr-2" /> Mo-Sa: 07:00 - 22:00
            </p>
            <p className="text-lg flex items-center">
              <FaClock className="inline mr-2" /> Su: 07:00 - 16:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
