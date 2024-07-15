import React, { useState } from 'react';
import { FaCar, FaGasPump, FaKey, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import card1 from "../images/car-01-card.jpg";
import card2 from "../images/car-02-card.jpg";
import card3 from "../images/car-03-card.jpg";
import card4 from "../images/car-04-card.jpg";
import card5 from "../images/car-05-card.jpg";
import card6 from "../images/car-06-card.jpg";
import card7 from "../images/car-07-card.jpg";
import card8 from "../images/car-08-card.jpg";
import card9 from "../images/car-09-card.jpg";

const Car = () => {
  // State to hold car details
  const [cars] = useState([
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
    {
      title: 'Porche Turbo 6.0',
      image: card4,
      price: 210,
      features: [
        { icon: FaUser, text: '5 seats' },
        { icon: FaCar, text: 'Auto' },
        { icon: FaGasPump, text: 'Petrol' },
      ],
    },
    {
      title: 'BMW 362',
      image: card5,
      price: 210,
      features: [
        { icon: FaUser, text: '5 seats' },
        { icon: FaCar, text: 'Auto' },
        { icon: FaGasPump, text: 'Petrol' },
      ],
    },
    {
      title: 'Ford Ranged V6',
      image: card6,
      price: 210,
      features: [
        { icon: FaUser, text: '5 seats' },
        { icon: FaCar, text: 'Auto' },
        { icon: FaGasPump, text: 'Petrol' },
      ],
    },
    {
      title: 'Mercedes Benz S-Class',
      image: card7,
      price: 210,
      features: [
        { icon: FaUser, text: '5 seats' },
        { icon: FaCar, text: 'Auto' },
        { icon: FaGasPump, text: 'Petrol' },
      ],
    },
    {
      title: 'Mercedes Benz Gatineau',
      image: card8,
      price: 210,
      features: [
        { icon: FaUser, text: '5 seats' },
        { icon: FaCar, text: 'Auto' },
        { icon: FaGasPump, text: 'Petrol' },
      ],
    },
    {
      title: 'Lamborgini Diablo 5.5',
      image: card9,
      price: 210,
      features: [
        { icon: FaUser, text: '5 seats' },
        { icon: FaCar, text: 'Auto' },
        { icon: FaGasPump, text: 'Petrol' },
      ],
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 3;

  // Logic for displaying cars
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(cars.length / carsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="container mx-auto my-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentCars.map((car) => (
          <div
            key={car.title}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col items-center"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={car.image}
                alt={car.title}
                className="w-full h-40 object-cover rounded-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4 text-center">{car.title}</h3>
            <p className="text-gray-500 mt-2 text-center">
              Insured, leather interior, air conditioning, rain sensor, panoramic roof
            </p>
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
            <div className="flex items-center mt-4">
              <span className="text-2xl font-bold text-gold-500">${car.price}</span>
              <span className="text-gray-600 ml-2">/ per hour</span>
            </div>
            <div className="mt-2">
              <div className="flex justify-center gap-2 text-sm text-gray-600">
                <span className="text-gold-500">★★★★★</span>
              </div>
            </div>
            <Link to='/booking' className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full">
              Get Car →
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <nav>
          <ul className="inline-flex items-center">
            <li>
              <button
                onClick={prevPage}
                className="px-3 py-2 border border-gray-300 bg-yellow-500 text-white"
                disabled={currentPage === 1}
              >
                &lt;
              </button>
            </li>
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  onClick={() => paginate(number)}
                  className={`px-3 py-2 border border-gray-300 bg-white text-gray-500 ${
                    currentPage === number ? 'bg-blue-500 text-white' : ''
                  }`}
                >
                  {number}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={nextPage}
                className="px-3 py-2 border border-gray-300 bg-yellow-500 text-white"
                disabled={currentPage === pageNumbers.length}
              >
                &gt;
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Car;
