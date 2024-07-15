import React from 'react';

const Map = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        {/* Map Title */}
        <h2 className="text-xl font-bold mb-4 text-center">Customer Address Map</h2>
        
        {/* Map Container */}
        <div className="w-full md:w-1/2 mx-auto flex items-center justify-center">
          <div className="car-map mb-4" style={{ paddingLeft: '1rem' }}>
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11824.339782638797!2d-74.00639991335994!3d40.65135929292483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590cf6ab27f5%3A0xe5c063e01c99846e!2sParlour%20Hair%20Boutique!5e0!3m2!1sen!2sus!4v1681225840925!5m2!1sen!2sus"
              width="950"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Customer Address Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
