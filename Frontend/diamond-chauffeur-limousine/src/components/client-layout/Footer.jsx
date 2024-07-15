import React from 'react';
import Subscribe from './Subscribe';

const Footer = () => {
  return (
    <>
      {/* Subscribe Section */}
      <Subscribe />

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Diamond. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
