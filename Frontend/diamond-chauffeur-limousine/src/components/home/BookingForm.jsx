import React, { useState } from "react";
import { FaLocationArrow, FaCalendar, FaClock, FaCar, FaUsers } from "react-icons/fa";
import axios from "axios";
import app from "../../images/app-store.png";
import google from "../../images/app-google.png";

const BookingForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [orderDate, setOrderDate] = useState("");
  const [orderTime, setOrderTime] = useState("");
  const [gearType, setGearType] = useState("");
  const [passengers, setPassengers] = useState("");
  const [brand, setBrand] = useState(""); 
  const [carType, setCarType] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Data to be sent to the API
    const formData = {
      brand,
      model: brand, 
      year: 2000, 
      description: "lorem epsum", 
      seats: "4",
      status: "pending", // Default status
      gearType,
      fuelType: carType,
    };

    try {
      // Making the API call using axios
      const response = await axios.post("http://localhost:3000/car/createCar", formData);
      console.log("Form submitted successfully:", response.data);
      // Handle success 
      // You can optionally redirect or show a success message
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error 
    }
  };

  return (
    <div className="flex justify-center items-center py-12 bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-stretch px-4">
        {/* Left Section - Description and Call to Action */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8 flex items-center">
          <div className="max-w-md mx-auto flex-grow">
            {/* Title */}
            <h1 className="text-3xl font-bold mb-4 text-center md:text-left">
              Use our quick booking form <br /> to get a limousine
            </h1>
            {/* Description */}
            <p className="text-lg mb-6 text-center md:text-left">
              Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis, quam nulla vehicula felis, eu cursus sem tellus.
            </p>
            {/* Contact Information */}
            <div className="flex flex-col items-center md:flex-row md:items-start md:justify-start mb-4">
              <i className="fas fa-phone text-lg mr-2"></i>
              <span className="text-lg font-bold mr-2">8-800-10-500</span>
              <span className="text-lg">Call to book an order</span>
            </div>
            {/* App Download Links */}
            <div className="flex flex-col items-center md:flex-row md:items-center md:justify-start">
              <a href="#" className="mr-4 mb-2 md:mb-0">
                <img src={app} alt="App Store" className="h-12 sm:h-14" />
              </a>
              <a href="#" className="mr-4">
                <img src={google} alt="Google Play" className="h-12 sm:h-14 " />
              </a>
              <span className="pt-4 text-lg text-center md:text-left">Download our Application to track your order</span>
            </div>
          </div>
        </div>
        {/* Right Section - Booking Form */}
        <div className="w-full md:w-1/2 flex items-stretch">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 flex-grow">
            {/* Pickup and Dropoff Locations */}
            <div className="mb-4">
              <label htmlFor="pickupLocation" className="block text-gray-700 text-sm font-bold mb-2">
                <FaLocationArrow className="inline-block" /> Pickup Location
              </label>
              <input
                type="text"
                id="pickupLocation"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dropoffLocation" className="block text-gray-700 text-sm font-bold mb-2">
                <FaLocationArrow className="inline-block" /> Dropoff Location
              </label>
              <input
                type="text"
                id="dropoffLocation"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
              />
            </div>
            {/* Order Date and Time */}
            <div className="mb-4 flex flex-col sm:flex-row sm:justify-between">
              <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                <label htmlFor="orderDate" className="block text-gray-700 text-sm font-bold mb-2">
                  <FaCalendar className="mr-2 inline-block" /> Order Date
                </label>
                <input
                  type="date"
                  id="orderDate"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={orderDate}
                  onChange={(e) => setOrderDate(e.target.value)}
                />
              </div>
              <div className="w-full sm:w-1/2">
                <label htmlFor="orderTime" className="block text-gray-700 text-sm font-bold mb-2">
                  <FaClock className="mr-2 inline-block" /> Order Time
                </label>
                <input
                  type="time"
                  id="orderTime"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  value={orderTime}
                  onChange={(e) => setOrderTime(e.target.value)}
                />
              </div>
            </div>
            {/* Gear Type */}
            <div className="mb-4">
              <label htmlFor="gearType" className="block text-gray-700 text-sm font-bold mb-2">
                <FaCar className="mr-2 inline-block" /> Car Gear Type
              </label>
              <select
                id="gearType"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={gearType}
                onChange={(e) => setGearType(e.target.value)}
              >
                <option value="">Select Gear Type</option>
                <option value="automatic">Automatic</option>
                <option value="manual">Manual</option>
              </select>
            </div>
            {/* Car Brand */}
            <div className="mb-4">
              <label htmlFor="brand" className="block text-gray-700 text-sm font-bold mb-2">
                <FaCar className="mr-2 inline-block" /> Car Brand
              </label>
              <select
                id="brand"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                <option value="">Select Car Brand</option>
                <option value="BMW">BMW</option>
                <option value="Range Rover">Range Rover</option>
                <option value="Cadillac">Cadillac</option>
                <option value="Porsche">Porsche</option>
                <option value="Ford">Ford</option>
                <option value="Lamborghini">Lamborghini</option>
                <option value="Mercedes">Mercedes</option>
              </select>
            </div>
            {/* Car Fuel Type */}
            <div className="mb-4">
              <label htmlFor="carType" className="block text-gray-700 text-sm font-bold mb-2">
                <FaCar className="mr-2 inline-block" /> Car Fuel Type
              </label>
              <select
                id="carType"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={carType}
                onChange={(e) => setCarType(e.target.value)}
              >
                <option value="">Select Car Fuel Type</option>
                <option value="petrol">Petrol</option>
                <option value="diesel">Diesel</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
            {/* Number of Passengers */}
            <div className="mb-4">
              <label htmlFor="passengers" className="block text-gray-700 text-sm font-bold mb-2">
                <FaUsers className="mr-2 inline-block" /> Number of Passengers
              </label>
              <input
                type="number"
                id="passengers"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              />
            </div>
            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
