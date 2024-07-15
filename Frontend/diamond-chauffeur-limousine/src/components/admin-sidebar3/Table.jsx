import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditReservation from './EditReservation';
import CreateReservation from './CreateReservation';

const Table = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [reservation, setReservation] = useState({}); // State to store reservation for editing
  const [CreateModal, setCreateModal] = useState(false); // State to control create reservation modal

  const [currentPage, setCurrentPage] = useState(1); // State to manage current page for pagination
  const [error, setError] = useState(''); // State to manage error messages
  const [showModal, setShowModal] = useState(false); // State to control edit reservation modal

  const itemsPerPage = 5; // Number of items to display per page

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/booking/getAllBooking');
        console.log('API Response:', response.data.response); // Log the response structure
        setData(response.data.response); // Set the fetched data into state
      } catch (error) {
        console.error('Fetch bookings error:', error);
        setError('Failed to fetch bookings. Please try again later.');
      }
    };

    fetchData(); // Call the fetch data function when component mounts
  }, []); // Empty dependency array ensures it runs only once on mount

  // Function to handle edit button click
  const handleEditClick = (booking) => {
    setReservation(booking); // Set the selected booking for editing
    setShowModal(true); // Show edit modal
  };

  // Function to handle delete button click
  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:3000/booking/deleteBooking?bookingId=${bookingId}`);
      setData(data.filter((item) => item.bookingId !== bookingId)); // Update state after successful deletion
    } catch (error) {
      console.error('Delete booking error:', error);
      setError('Failed to delete booking. Please try again later.');
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(data.length / itemsPerPage); // Calculate total pages
  const startIdx = (currentPage - 1) * itemsPerPage; // Calculate starting index of current page
  const currentPageData = data.slice(startIdx, startIdx + itemsPerPage); // Get data for current page

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Reservations</h2>
      <div className='flex justify-start items-center p-5'>
        {/* Button to open create reservation modal */}
        <button className=' font-semibold text-white bg-green-500 py-2 px-4 rounded-md '
          onClick={() => { setCreateModal(true) }}
        >
          Create Reservation
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">ID</th>
              <th className="py-2 px-4 border-b text-left">CAR</th>
              <th className="py-2 px-4 border-b text-left">CUSTOMER</th>
              <th className="py-2 px-4 border-b text-left">PICK-UP</th>
              <th className="py-2 px-4 border-b text-left">DROP-OFF</th>
              <th className="py-2 px-4 border-b text-left">STATUS</th>
              <th className="py-2 px-4 border-b text-left">PRICE</th>
              <th className="py-2 px-4 border-b text-left">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {/* Render table rows based on data or show error message */}
            {error ? (
              <tr>
                <td colSpan="8" className="py-4 px-4 border-b text-center text-red-500">
                  {error}
                </td>
              </tr>
            ) : currentPageData.length === 0 ? (
              <tr>
                <td colSpan="8" className="py-4 px-4 border-b text-center text-gray-500">
                  No bookings available
                </td>
              </tr>
            ) : (
              currentPageData.map((item) => (
                <tr key={item.bookingId} id={`booking_${item.bookingId}`}>
                  <td className="py-2 px-4 border-b">{item.bookingId}</td>
                  <td className="py-2 px-4 border-b">{item.brand}</td>
                  <td className="py-2 px-4 border-b">{item.userName}</td>
                  <td className="py-2 px-4 border-b whitespace-pre-wrap">{item.pickupLocation}</td>
                  <td className="py-2 px-4 border-b whitespace-pre-wrap">{item.dropOffLocation}</td>
                  <td className="py-2 px-4 border-b">{item.status}</td>
                  <td className="py-2 px-4 border-b">{item.price}</td>
                  <td className="py-2 px-4 border-b">
                    {/* Edit and delete buttons */}
                    <button
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded mr-2"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                      onClick={() => handleDelete(item.bookingId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {/* Pagination controls */}
        <div className="flex justify-between items-center mt-4">
          <button
            className={`py-2 px-4 rounded ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div>
            Page {currentPage} of {totalPages}
          </div>
          <button
            className={`py-2 px-4 rounded ${currentPage === totalPages ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-700 text-white'}`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>

      {/* Conditional rendering of modals */}
      {CreateModal ? (
        <CreateReservation setshowModal={setShowModal} />
      ) : null}

      {showModal ? (
        <EditReservation reservation={reservation} setshowModal={setShowModal} />
      ) : null}
    </div>
  );
};

export default Table;
