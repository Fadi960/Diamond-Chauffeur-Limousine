import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CreateReservation = ({
    setshowModal 
}) => {


    const [formData, setFormData] = useState({
        carId: '',
        userId: '',
        pickupLocation: '',
        dropOffLocation: '',
        orderDate: '',
        orderTime: '',
        price: '',
        status: 'pending',
        passengers: '1'
      });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log(formData)
 };

      const handleFormSubmit = async () => {
        try {

          const response = await axios.post("http://localhost:3000/booking/createBooking", formData);
          console.log(response);
          setshowModal(false);  // Clear editing state after successful update
        } catch (error) {
          console.error('Update booking error:', error);
        //   setError('Failed to update booking. Please try again later.');
        }
      };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-1/2 bg-white p-4 rounded">
            <h3 className="text-xl font-bold mb-4">Create Booking</h3>
            <form onSubmit={handleFormSubmit}>
            <div className="mb-2">
                <label className="block text-gray-700">Car ID</label>
                <input
                  type="text"
                  name="carId"
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">User Id</label>
                <input
                  type="text"
                  name="userId"
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Order Date</label>
                <input
                  type="text"
                  name="orderDate"
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Pick-up Location</label>
                <input
                  type="text"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Drop-off Location</label>
                <input
                  type="text"
                  name="dropOffLocation"
                  value={formData.dropOffLocation}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Order Time</label>
                <input
                  type="text"
                  name="orderTime"
                  value={formData.orderTime}
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                  required
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  onChange={handleInputChange}
                  className="border rounded p-2 w-full"
                  required
                />
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
  )
}

export default CreateReservation