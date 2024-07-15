import React from 'react';
import image from '../../images/hero-limmo.png';
import image2 from '../../images/car-02-card.jpg';
import image3 from '../../images/car-03-card.jpg';

const CarDetail = () => {
  return (
    <div className="car-detail container mx-auto p-4">
      <div className="flex flex-wrap items-center">
        {/* First Car */}
        <div className="w-full md:w-1/3 p-4 flex justify-start">
          <div className="car-info">
            <div className="info-item mb-2">
              <label className="block font-bold">Brand</label>
              <span>Cadillac</span>
            </div>
            <div className="info-item mb-2">
              <label className="block font-bold">Model</label>
              <span>Limousine XTS</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 flex justify-center">
          <div className="car-image mb-4">
            <img src={image} alt="Car" className="w-3/4 md:w-full h-auto object-cover rounded" />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 flex justify-end">
          <div className="car-info">
            <div className="info-item mb-2">
              <label className="block font-bold">Year</label>
              <span>2017</span>
            </div>
            <div className="info-item mb-2">
              <label className="block font-bold">Fuel Type</label>
              <span>Petrol</span>
            </div>
            <div className="info-item mb-2">
              <label className="block font-bold">Status</label>
              <span>Published</span>
            </div>
          </div>
        </div>

        {/* Second Car */}
        <div className="w-full md:w-1/3 p-4 flex justify-start">
          <div className="car-info">
            <div className="info-item mb-2">
              <label className="block font-bold">Brand</label>
              <span>Mercedes</span>
            </div>
            <div className="info-item mb-2">
              <label className="block font-bold">Model</label>
              <span>BENZ E-Class</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 flex justify-center">
          <div className="car-image mb-4">
            <img src={image2} alt="Car" className="w-3/4 md:w-full h-auto object-cover rounded" />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 flex justify-end">
          <div className="car-info">
            <div className="info-item mb-2">
              <label className="block font-bold">Year</label>
              <span>2018</span>
            </div>
            <div className="info-item mb-2">
              <label className="block font-bold">Fuel Type</label>
              <span>Petrol</span>
            </div>
            <div className="info-item mb-2">
              <label className="block font-bold">Status</label>
              <span>Published</span>
            </div>
          </div>
        </div>

        {/* Third Car */}
        <div className="w-full md:w-1/3 p-4 flex justify-start">
          <div className="car-info">
            <div className="info-item mb-2">
              <label className="block font-bold">Brand</label>
              <span>Land Rover</span>
            </div>
            <div className="info-item mb-2">
              <label className="block font-bold">Model</label>
              <span>Range Rover</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 flex justify-center">
          <div className="car-image mb-4">
            <img src={image3} alt="Car" className="w-3/4 md:w-full h-auto object-cover rounded" />
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 flex justify-end">
          <div className="car-info">
            <div className="info-item mb-2">
              <label className="block font-bold">Year</label>
              <span>2019</span>
            </div>
            <div className="info-item mb-2">
              <label className="block font-bold">Fuel Type</label>
              <span>Petrol</span>
            </div>
            <div className="info-item mb-2">
              <label className="block font-bold">Status</label>
              <span>Published</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="w-full p-4">
          <div className="car-map mb-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11824.339782638797!2d-74.00639991335994!3d40.65135929292483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2590cf6ab27f5%3A0xe5c063e01c99846e!2sParlour%20Hair%20Boutique!5e0!3m2!1sen!2sus!4v1681225840925!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Earnings */}
        <div className="w-full md:w-1/2 p-4">
          <div className="car-earnings mb-4">
            <div className="earnings-item mb-2">
              <label className="block font-bold">Total Earnings</label>
              <span>$9700</span>
            </div>
          </div>
        </div>

        {/* Fuel Consumption */}
        <div className="w-full md:w-1/2 p-4">
          <div className="car-earnings mb-4">
            <div className="earnings-item mb-2">
              <label className="block font-bold">Fuel Consumption (KM)</label>
              <span>12933</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
