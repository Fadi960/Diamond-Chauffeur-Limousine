import { useState } from 'react';
import { FaCar, FaGasPump, FaKey, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import card1 from "../../images/car-01-card.jpg";
import card2 from "../../images/car-02-card.jpg";
import card3 from "../../images/car-03-card.jpg";

const CardsSection = () => {
  // Initial state for car data
  const [cars, setCars] = useState([
    {
      title: 'Cadillac Limousine XTS',
      image: card1,
      price: 260,
      features: [
        { icon: FaUser, text: '4 seats' },
        { icon: FaGasPump, text: 'Diesel' },
        { icon: FaKey, text: 'Mechanic' },
      ],
    },
    {
      title: 'Mercedes Benz E-Class',
      image: card2,
      price: 190,
      features: [
        { icon: FaUser, text: '4 seats' },
        { icon: FaCar, text: 'Auto' },
        { icon: FaGasPump, text: 'Petrol' },
      ],
    },
    {
      title: 'Range Rover Sport 5.5',
      image: card3,
      price: 210,
      features: [
        { icon: FaUser, text: '5 seats' },
        { icon: FaCar, text: 'Auto' },
        { icon: FaGasPump, text: 'Petrol' },
      ],
    },
  ]);

  return (
    <div className="container mx-auto my-12 px-4">
      {/* Grid container for car cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.title}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            {/* Car image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-40 object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            {/* Car title */}
            <h3 className="text-lg font-semibold mt-4 text-center">{car.title}</h3>
            {/* Car description */}
            <p className="text-gray-500 mt-2 text-center">
              Insured, leather interior, air conditioning, rain sensor, panoramic roof
            </p>
            {/* Car features */}
            <div className="flex justify-center mt-4 gap-2">
              {car.features.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <feature.icon className="text-gray-400" />
                  {feature.text}
                </div>
              ))}
            </div>
            {/* Car price */}
            <div className="flex items-center mt-4">
              <span className="text-2xl font-bold text-gold-500">${car.price}</span>
              <span className="text-gray-600 ml-2">/ per hour</span>
            </div>
            {/* Car rating */}
            <div className="mt-2">
              <div className="flex justify-center gap-2 text-sm text-gray-600">
                <span className="text-gold-500">★★★★★</span>
              </div>
            </div>
            {/* Booking link */}
            <Link to="/booking" className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
              Get Car →
            </Link>
          </div>
        ))}
      </div>
      {/* Link to see more cars */}
      <div className="flex justify-center mt-8">
        <Link to="/car" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
          See More →
        </Link>
      </div>
    </div>
  );
};

export default CardsSection;
