import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditCar from './EditCar'; // Import Edit component
import CreateCar from './CreateCar'; // Import Create Car component

const CarTable = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState('');
  const [selectedCar, setSelectedCar] = useState(null); // State to store selected car for editing
  const [showEditForm, setShowEditForm] = useState(false); // State to control display of edit form
  const [showCreateForm, setShowCreateForm] = useState(false); // State to control display of create form
  const [currentPage, setCurrentPage] = useState(1); // State to track current page
  const carsPerPage = 5; // Number of cars to display per page

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:3000/car/getAllCar');
        setCars(response.data.response); // Assuming response.data.response contains the array of cars
      } catch (error) {
        console.error('Fetch cars error:', error);
        setError('Failed to fetch cars. Please try again later.');
      }
    };

    fetchCars();
  }, []);


  const handleEdit = (car) => {
    setSelectedCar(car); // Set selected car for editing
    setShowEditForm(true); // Display edit form
  };

  const handleDelete = async (car) => {
    try {
      await axios.delete(`http://localhost:3000/car/deleteCar?carId=${car.carId}`);
      console.log('Delete successful');
      
      // Update cars list after successful deletion
      setCars(cars.filter(c => c.carId !== car.carId));
    } catch (error) {
      console.error('Delete error:', error);
      setError('Failed to delete car. Please try again later.');
    }
  };

  const handleEditSuccess = (updatedCar) => {
    // Update cars list with updated car details
    setCars(cars.map(car => car.carId === updatedCar.carId ? updatedCar : car));
    setShowEditForm(false); // Hide edit form after successful edit
    setSelectedCar(null); // Clear selected car
  };

  const handleCreateSuccess = (newCar) => {
    // Add new car to cars list
    setCars([...cars, newCar]);
    setShowCreateForm(false); // Hide create form after successful creation
  };

  // Calculate the index of the last and first car on the current page
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Function to change to the next page
  const handleNextPage = () => {
    if (currentPage < Math.ceil(cars.length / carsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to change to the previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="overflow-hidden">
      <h2 className="text-xl font-bold mb-4 pl-4">Cars</h2>
      {showEditForm ? (
        <EditCar
          car={selectedCar}
          onSuccess={handleEditSuccess}
          onCancel={() => setShowEditForm(false)}
        />
      ) : showCreateForm ? (
        <CreateCar
          onSuccess={handleCreateSuccess}
          setshowModal={setShowCreateForm}
        />
      ) : (
        <div>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 ml-4"
            onClick={() => setShowCreateForm(true)}
          >
            Create Car
          </button>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-center">Car ID</th>
                <th className="py-2 px-4 border-b text-center">Brand</th>
                <th className="py-2 px-4 border-b text-center">Model</th>
                <th className="py-2 px-4 border-b text-center">Year</th>
                <th className="py-2 px-4 border-b text-center">Fuel Type</th>
                <th className="py-2 px-4 border-b text-center">Status</th>
                <th className="py-2 px-4 border-b text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td colSpan="7" className="py-4 px-4 border-b text-center text-red-500">
                    {error}
                  </td>
                </tr>
              ) : currentCars.length === 0 ? (
                <tr>
                  <td colSpan="7" className="py-4 px-4 border-b text-center text-gray-500">
                    No cars available
                  </td>
                </tr>
              ) : (
                currentCars.map((car, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b text-center">{car.carId}</td>
                    <td className="py-2 px-4 border-b text-center">{car.brand}</td>
                    <td className="py-2 px-4 border-b text-center">{car.model}</td>
                    <td className="py-2 px-4 border-b text-center">{car.year}</td>
                    <td className="py-2 px-4 border-b text-center">{car.fuelType}</td>
                    <td className="py-2 px-4 border-b text-center">{car.status}</td>
                    <td className="py-2 px-4 border-b text-center">
                      <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mr-2"
                        onClick={() => handleEdit(car)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                        onClick={() => handleDelete(car)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
    {/* Pagination */}
    <div className="flex justify-between mt-4 px-4">
     <button
    className={`px-3 py-1 border rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-white text-gray-700'}`}
    onClick={handlePrevPage}
    disabled={currentPage === 1}
    >
    Previous
     </button>
      <button
     className={`px-3 py-1 border rounded ml-2 ${currentPage === Math.ceil(cars.length / carsPerPage) ? 'bg-gray-300 text-gray-700 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
     onClick={handleNextPage}
     disabled={currentPage === Math.ceil(cars.length / carsPerPage)}
     >
    Next
     </button>
       </div>
        </div>
      )}
    </div>
  );
};

export default CarTable;
