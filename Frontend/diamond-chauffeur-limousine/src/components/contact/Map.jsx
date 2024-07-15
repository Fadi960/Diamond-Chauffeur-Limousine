import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';

/**
 * Map component displaying contact information and Google Maps.
 */
const Map = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-between items-center m-4">
          <div className="flex flex-col justify-center items-center space-x-3 mb-4 sm:mb-0">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-600" />
              <h4 className="text-lg font-semibold">Location</h4>
            </div>
            <p>29 Nicolas str, New York, 987597-50</p>
          </div>
          <div className="flex flex-col justify-center items-center space-x-3 mb-4 sm:mb-0">
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-600" />
              <h4 className="text-lg font-semibold">Phones</h4>
            </div>
            <p>0(800) 890-90-609</p>
            <p>0(800) 890-90-620</p>
          </div>
          <div className="flex flex-col justify-center items-center space-x-3 mb-4 sm:mb-0">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-600" />
              <h4 className="text-lg font-semibold">Email</h4>
            </div>
            <p>sale@google.com</p>
            <p>tech@google.com</p>
          </div>
          <div className="flex flex-col justify-center items-center space-x-3">
            <div className="flex items-center gap-2">
              <FaClock className="text-yellow-600" />
              <h4 className="text-lg font-semibold">Working Hours</h4>
            </div>
            <p>Wednesday - Sunday</p>
            <p>7:00 AM - 5:00 PM</p>
          </div>
        </div>
        
        {/* Map */}
        <div className="relative w-full h-[400px] sm:h-[600px] p-4">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.996947382247!2d-74.00601508459368!3d40.71277697933025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a3161ce5cd1%3A0x5f5cbfd4d3b1a0e7!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1623657384053!5m2!1sen!2s"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Map;
