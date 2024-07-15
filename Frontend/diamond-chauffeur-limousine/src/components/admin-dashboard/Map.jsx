import React from 'react';
import Reservation from './Reservation';

const locations = [
  {
    name: 'Pawsibilities',
    coordinates: { lat: 40.7128, lng: -73.9352 },
  },
  {
    name: 'Americart Services',
    coordinates: { lat: 40.7128, lng: -73.9352 },
  },
  {
    name: 'Bayport Memorial Park',
    coordinates: { lat: 40.7128, lng: -73.9352 },
  },
  {
    name: 'Bayport United Methodist Church',
    coordinates: { lat: 40.7128, lng: -73.9352 },
  },
  {
    name: 'Parlour Hair Boutique',
    coordinates: { lat: 40.7128, lng: -73.9352 },
  },
];

const Map = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex flex-col w-full md:w-1/2 h-screen bg-gray-100 p-4">
        {/* Map component - replace with your actual map implementation */}
        <div className="h-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.155224847221!2d-73.93521448475097!3d40.71282157914286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f29c7958f3%3A0x58143861d41940f9!2sBayport%20Memorial%20Park!5e0!3m2!1sen!2sus!4v1701039125945!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* Add location markers here */}
        {locations.map((location) => (
          <div
            key={location.name}
            className="absolute top-0 left-0 transform translate-x-1/2 -translate-y-1/2"
            style={{
              top: `${location.coordinates.lat}%`,
              left: `${location.coordinates.lng}%`,
            }}
          >
            <div className="bg-blue-500 rounded-full w-4 h-4"></div>
            {/* Add location name */}
            <div className="text-xs text-black font-bold absolute top-[-12px] left-[-12px]">{location.name}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full md:w-1/2 h-screen p-4">
        <h2 className="text-2xl font-bold mb-4">Last Reservations</h2>
        <div className="flex flex-col gap-4">
          <Reservation
            vehicle="BMW"
            model="BMW 362 2017"
            start="Jul 9, 2023"
            end="Jul 12, 2023"
            status="Active"
          />
          <Reservation
            vehicle="MERCEDES"
            model="AMG GT 2019"
            start="Jul 5, 2023"
            end="Jul 11, 2023"
            status="Cancel"
          />
          <Reservation
            vehicle="PORSCHE"
            model="Porche Turbo 2018"
            start="Jul 4, 2023"
            end="Jul 9, 2023"
            status="Active"
          />
          <Reservation
            vehicle="CADILLAC"
            model="Limousine XTS 2020"
            start="Jul 3, 2023"
            end="Jul 7, 2023"
            status="Active"
          />
        </div>
      </div>
    </div>
  );
};

export default Map;