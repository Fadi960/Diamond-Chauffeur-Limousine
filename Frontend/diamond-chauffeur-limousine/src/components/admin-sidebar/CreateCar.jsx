import React, { useState } from 'react';
import axios from 'axios';

const CreateCar = ({ setshowModal }) => {
  const [formData, setFormData] = useState({
    description: 'Lorem epsum',
    seats: '2',
    brand: '',
    model: '',
    year: '',
    fuelType: 'petrol',
    gearType: 'automatic',
    status: 'pending'
  });


  // Handles input changes and updates the form data state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handles form submission and sends a POST request to create a new car
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/car/createCar", formData);
      console.log(response);
      setshowModal(false); // Close modal after successful creation
      window.location.reload();
    } catch (error) {
      console.error('Create car error:', error);
      // Handle error if needed, e.g., show an error message
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="w-1/2 bg-white p-4 rounded">
        <h3 className="text-xl font-bold mb-4">Create Car</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-2">
            <label className="block text-gray-700">Brand</label>
            <input
              type="text"
              name="brand"
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Model</label>
            <input
              type="text"
              name="model"
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Year</label>
            <input
              type="text"
              name="year"
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Fuel Type</label>
            <select
              name="fuelType"
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
              required
              value={formData.fuelType}
              >
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
              </select>
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Status</label>
            <select
              name="status"
              onChange={handleInputChange}
              className="border rounded p-2 w-full"
              required
              value={formData.status}
            >
              <option value="published">Published</option>
              <option value="inactive">Inactive</option>
              <option value="scheduled">Scheduled</option>
              <option value="pending">Pending</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded mr-2"
              onClick={() => setshowModal(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCar;
