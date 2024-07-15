import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditReservation = ({
    reservation,
    setshowModal 
}) => {


    const [formData, setFormData] = useState({
        bookingId: '',
        pickupLocation: '',
        dropOffLocation: '',
        status: '',
        price: ''
      });

      useEffect(() => {
        const obj =  {
            bookingId: reservation.bookingId,
            pickupLocation: reservation.pickupLocation,
            dropOffLocation: reservation.dropOffLocation,
            status: reservation.status,
            price: reservation.price
         }
        setFormData(
            { ...obj }
        );
      }, [reservation]);
    

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        console.log(formData)
 };

      const handleFormSubmit = async () => {
        try {

          const response = await axios.patch("http://localhost:3000/booking/updateBooking", formData);
          console.log(response)

            setshowModal(false);  // Clear editing state after successful update
        } catch (error) {
          console.error('Update booking error:', error);
        //   setError('Failed to update booking. Please try again later.');
        }
      };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="w-1/2 bg-white p-4 rounded">
            <h3 className="text-xl font-bold mb-4">Edit Booking</h3>
            <form onSubmit={handleFormSubmit}>
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
                <label className="block text-gray-700">Status</label>
                <input
                  type="text"
                  name="status"
                  value={formData.status}
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
                  value={formData.price}
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
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}

export default EditReservation